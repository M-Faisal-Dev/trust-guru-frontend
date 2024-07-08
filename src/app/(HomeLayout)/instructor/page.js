import Instor from "@/components/Instructors/Instor"

async function getData() {
  try {
    const res = await fetch('https://backend.trustyourguru.com/api/teacher-profile/get-all', { cache: 'no-store' });
    return res.json();
  } catch (error) {
    // Handle the error, log it, or throw it further if needed
    console.error('An error occurred while fetching data:');
    throw error; // Re-throwing the error to be caught by the caller
  }
}

export default async function page() {
  let data;
  try {
    data = await getData();
  } catch (error) {
    console.error('An error occurred while fetching data:');
    data = []; // Fallback to empty array in case of error
  }
  return (
    <div>
        <Instor props = {data}/>
    </div>
  )
}

