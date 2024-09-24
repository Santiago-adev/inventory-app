import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function NavbarRoutes() {
  return (
    <div className='flex gap-x-2 ml-auto'>
        {/*<Link href={"/"}>
            <Button size={"sm"} variant={"ghost"}>
                <LogOut className='h-4 w-4 mr-2' />
                    Exit
            </Button>
        </Link>*/}
        <Link href={"/admin"}>
        <Button size={"sm"} variant={"ghost"} className='text-md'>
            Administracion
        </Button>
        </Link>
        <UserButton afterSwitchSessionUrl="/" />
    </div>
  )
}

export default NavbarRoutes