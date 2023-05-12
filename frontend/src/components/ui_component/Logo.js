import React from 'react'
import logo from '../../assets/images/Jersey_Icon.svg'
import logoText from '../../assets/images/Logo_Text.svg'

export const Logo = () => {
    return (
        <div className="logo">
            <img
                alt="Jersey Logo"
                src={logo}
            />
            <img
                className="d-inline-block align-top"
                alt="Logo Top"
                src={logoText}
            />
        </div>
    )
}
