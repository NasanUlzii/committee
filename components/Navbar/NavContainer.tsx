'use client'

import Nav from './Nav'
import MobileNav from './MobileNav'
import { use, useState } from 'react'

const NavContainer = () => {
    const [showNav, setShowNav] = useState(false);

    // Open nav function

    const openNavHandler = () => { setShowNav(true); }
    // Open nav function

    const closeNavHandler = () => { setShowNav(false); }
    return (
        <div>
            <Nav openNav={openNavHandler} />
            <MobileNav showNav={showNav} closeNav={closeNavHandler} />
        </div>
    )
}

export default NavContainer