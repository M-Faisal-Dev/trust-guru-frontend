"use client"
// import ProfileNav from '@/components/profile-detail/ProfileNav'
import ProfileHero from '@/components/profile-detail/ProfileHero'
import TabsComponent from '@/components/profile-detail/TabsComponent'


const page = () => {
  return (
    <div>
        {/* <ProfileNav /> */}
        <ProfileHero />
        <TabsComponent />
    </div>
  )
}

export default page