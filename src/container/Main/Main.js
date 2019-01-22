import React from 'react'
import './Main.scss'
import Advantages from '../../components/Advantages/Advantages'
import Options from '../../components/Options/Options'
import Form from '../../components/Form/Form'
import Gallery from '../../components/Gallery/Gallery'

const Main = () => {
    return (
        <main className="main">
            <Advantages />
            <Options />
            <Form />
            <Gallery />
        </main>
    )
}

export default Main