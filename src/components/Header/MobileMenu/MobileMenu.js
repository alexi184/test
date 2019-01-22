import React from 'react'
import './MobileMenu.scss'

const MenuMobile = (props) => {
    return (
        <nav className="mobile-nav">
            <div className="section-wrapper">
                <ul className="menu-list">
                    {
                        props.menu.map((item) =>
                            <li className="menu-list__item">
                                <a href="#" className="menu-list__link">
                                    {item.link}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default MenuMobile
