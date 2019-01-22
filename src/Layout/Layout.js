import React, {Component} from 'react'
import './Layout.scss'
import '../styles/media.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Main from '../container/Main/Main'

class Layout extends Component {

    render() {
        return (
            <div className='layout'>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default Layout