<?php

$localhost = "127.0.0.1";
$username = "iscsco_wp477_use";
$password = "Z25Ts0bMd,ez";
$database = "iscsco_wp477_db";

//	Getting products from tidystock
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://ACzts04gqXgHwRQaJ5QP13KI0WZ4wpQ8Nyvo7ardJTU=:@iscsnz.tidystock.com/api/materialitems',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10, 
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
//   CURLOPT_HTTPHEADER => array(
//     'Authorization: Basic ACzts04gqXgHwRQaJ5QP13KI0WZ4wpQ8Nyvo7ardJTU='
//   )
));

$response = curl_exec($curl);

if(curl_errno($curl)){
    echo 'Curl error: ' . curl_error($curl);
}

print_r(curl_getinfo($curl));

curl_close($curl);

$response_decode = json_decode($response, 1);

//	Updating database for Price and SKU
$dbh = new PDO(
		'mysql:host=localhost;dbname=' . $database,
		$username,
		$password
	);
if ($dbh) {
	echo "Connected to the database successfully!";
}
$count = 0;
foreach($response_decode as $product) {
//	if($product['name'] === 'Mifare Self Adhesive Disk') {
// 		print_r($product);
// 		echo PHP_EOL;
		
		$select = "SELECT * FROM wp_posts where post_type = 'product' AND post_title = '" . $product['name'] . "'";
		$stmt = $dbh->prepare($select);
		$stmt->execute();
		$row = $stmt->fetchAll();
		
		if(count($row) === 0) {
			echo '"' . $product['name'] . '" is not found in Woocommerce Products!' . PHP_EOL;
			continue;
		}
		
// 		print_r(json_encode($row));
// 		echo PHP_EOL;
	
		$count++;
		//  Check if there is particular row for that post_id, otherwise INSERT
		$check_reg_price = "SELECT post_id, meta_key FROM wp_postmeta where post_id = " . $row[0]['ID'] . " and meta_key = '_regular_price'";
		$stmt = $dbh->prepare($check_reg_price);
		$stmt->execute();
		$row_check = $stmt->fetchAll();
// 		print_r($row_check);
// 		echo PHP_EOL;
		if(count($row_check) > 0) {
			$update_reg_price = "UPDATE wp_postmeta SET meta_value = " . $product['charge'] . " Where post_id = " . $row[0]['ID'] . " and meta_key = '_regular_price'";
			$stmt = $dbh->prepare($update_reg_price);
			$stmt->execute();
		} else {
			$insert_reg_price = "INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES (" . $row[0]['ID'] . ", '_regular_price', '" . $product['charge'] . "');";
			$stmt = $dbh->prepare($update_reg_price);
			$stmt->execute();
		}

		$check_price = "SELECT post_id, meta_key FROM wp_postmeta where post_id = " . $row[0]['ID'] . " and meta_key = '_price'";
		$stmt = $dbh->prepare($check_price);
		$stmt->execute();
		$row_check = $stmt->fetchAll();
// 		print_r($row_check);
// 		echo PHP_EOL;
		if(count($row_check) > 0) {
			$update_reg_price = "UPDATE wp_postmeta SET meta_value = " . $product['charge'] . " Where post_id = " . $row[0]['ID'] . " and meta_key = '_price'";
			$stmt = $dbh->prepare($update_reg_price);
			$stmt->execute();
		} else {
			$insert_reg_price = "INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES (" . $row[0]['ID'] . ", '_price', " . $product['charge'] . ");";
			$stmt = $dbh->prepare($update_reg_price);
			$stmt->execute();
		}

		$check_sku = "SELECT post_id, meta_key FROM wp_postmeta where post_id = " . $row[0]['ID'] . " and meta_key = '_sku'";
		$stmt = $dbh->prepare($check_sku);
		$stmt->execute();
		$row_check = $stmt->fetchAll();
// 		print_r($row_check);
// 		echo PHP_EOL;
		if(count($row_check) > 0) {
			$update_sku = "UPDATE wp_postmeta SET meta_value = '" . $product['code'] . "' Where post_id = " . $row[0]['ID'] . " and meta_key = '_sku'";
			$stmt = $dbh->prepare($update_sku);
			$result = $stmt->execute();
		} else {
			$insert_sku = "INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES (" . $row[0]['ID'] . ", '_sku', '" . $product['code'] . "');";
			$stmt = $dbh->prepare($insert_sku);
			$result = $stmt->execute();
		}		
// 	}
}

echo $count . " products have updated successfully!" . PHP_EOL;
die;
