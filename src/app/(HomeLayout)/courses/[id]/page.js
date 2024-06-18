import CourseHero from '@/components/Coaching-detail/CourseHero';
import Graphics from '@/components/Coaching-detail/Graphics';

async function getData(id) {
  try {
    const res = await fetch(`http://localhost:4000/api/course/${id}`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return []; // Return an empty array or default value in case of error
  }
}

export default async function Page({ params }) {
  const { id } = params;
  const data = await getData(id);

  return (
    <main>
      <CourseHero data={data} />
      <Graphics data={data} />
    </main>
  );
}
