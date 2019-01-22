import React, {Component} from 'react'
import './Header.scss'
import logo from '../../img/raster/logo@2x.png'
import Menu from './Menu/Menu'
import MobileMenu from './MobileMenu/MobileMenu'

class Header extends Component {

    state = {
        opened: false
    }

    openMenu = () => {
        this.setState({
            opened : !this.state.opened
        })
    }

    render () {
        return (
            <header className="header">
                <div className="header-top">
                    <div className="section-wrapper">
                        <a href="#" className="logo">
                            <img src={logo} alt="" />
                        </a>
                        <div className={`menu__icon ${this.state.opened ? 'open' : ''}`} onClick={this.openMenu}>
                            {
                                [...Array(4)].map((item,i) =>
                                    <span key={i}>{item}</span>
                                )
                            }
                        </div>

                        <Menu menu={this.props.menu} />

                    </div>
                </div>

                {
                    (this.state.opened) &&
                    <MobileMenu menu={this.props.menu} />
                }
            </header>
        )
    }
}

export default Header

Header.defaultProps = {
    menu: [
        {
            id: 1,
            link: 'О модели'
        },
        {
            id: 2,
            link: 'Преимущества'
        },
        {
            id: 3,
            link: 'Комплектации'
        },
        {
            id: 4,
            link: 'Галерея'
        }
    ]
}