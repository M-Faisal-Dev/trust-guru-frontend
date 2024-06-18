import Course from "@/components/Course-detail/Course";

async function getData() {
  try {
    const res = await fetch('https://backend.trustyourguru.com/api/course', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return []; // Return an empty array or default value in case of error
  }
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <Course data={data} />
    </main>
  );
}
