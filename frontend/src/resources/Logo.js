import React from 'react'
import logo from '../images/Jersey_Icon.svg'
import logoText from '../images/Logo_Text.svg'

export const Logo = () => {
    return (
        <div className="logo">
            <img

                alt="Jersey Logo"
                src={logo}
            />
            <img

                alt="Logo Top"
                src={logoText}
            />
        </div>
    )
}
