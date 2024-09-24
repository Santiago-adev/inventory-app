import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <Image  height={50} width={50} alt='logo' src={"/logo.svg"}/>
  )
}

export default Logo