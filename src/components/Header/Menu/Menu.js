import React from 'react'
import './Menu.scss'

const Menu = (props) => {
    return (
        <nav className="desktop-nav">
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

export default Menu
