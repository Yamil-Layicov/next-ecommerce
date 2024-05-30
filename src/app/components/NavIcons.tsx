"use client"

import Image from "next/image"
import { useState } from "react"

const NavIcons = () => {
  const[showModal, setShowModal] = useState(false);
  return (
    <div>
      <Image src="/profile.png" alt="" width={24} height={24} onClick={() => setShowModal(prev => !prev)}/>
      {showModal && "asdasd"}
    </div>
  )
}

export default NavIcons
