import Course from "@/components/Course-detail/Course"

async function getData() {
  try{
   const res = await fetch('http://localhost:4000/api/course', { cache: 'no-store' })
    return res.json()
  }catch(err){
    throw new Error('Failed to fetch data')
  }
  
}
 
export default async function Page() {
  const data = await getData()
  return <main>  <Course data={data ? data : []}/></main>
}