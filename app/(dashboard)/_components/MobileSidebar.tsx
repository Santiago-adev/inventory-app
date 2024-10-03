
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'
import Sidebar from './Sidebar'

function MobileSidebar() {
  return (
    <Sheet>
        <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition-all'>
            <Menu />
        </SheetTrigger>
        <SheetContent>
            <Sidebar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar