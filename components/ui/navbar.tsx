import MobileSidebar from '@/app/(dashboard)/_components/MobileSidebar'
import NavbarRoutes from '@/app/(dashboard)/_components/NavbarRoutes'
import React from 'react'

function Navbar() {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'> 
        <MobileSidebar />
        <NavbarRoutes />
    </div>
  )
}

export default Navbar