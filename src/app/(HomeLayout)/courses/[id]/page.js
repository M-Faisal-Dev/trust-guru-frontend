

import CourseHero from '@/components/Coaching-detail/CourseHero'
import Graphics from '@/components/Coaching-detail/Graphics'

async function getData(id) {
  try{
   const res = await fetch(`http://localhost:4000/api/course/${id}`, { cache: 'no-store' })
    return res.json()
  }catch(err){
    throw new Error('Failed to fetch data')
  }
  
}
 
export default async function page({params}) {
  const {id} = params
  const data = await getData(id)
  return <main> 
     <CourseHero data={data ? data : []}/>
     <Graphics data={data ? data : []} />
     </main>
}