import MainNavBar from '@/components/shared/nav_bar/main_nav_bar'
import React from 'react'

interface Props{
  children:React.ReactNode
}
export default function MainLayout({children}:Props) {
  return (
    <div>
      <MainNavBar/>
      {children}
    </div>
  )
}
