import React, {Component} from 'react'
import './Form.scss'
import Select from 'react-select'

class Form extends Component {

    render() {

        const options = [
            { value: '1', label: 'Style' },
            { value: '2', label: 'Comfort' },
            { value: '3', label: 'Premium' },
            { value: '4', label: 'All road' }
        ]

        return (
            <section className='section-content form-section'>
                <div className="section-wrapper">
                    <h2 className="section-title">Иниуллуктуальные Ассистенты помощи водителю</h2>
                    <div className="section-description">
                        Оставьте заявку на интересующую вас комплектацию и мы сделаем вам лучшее предложение!
                    </div>

                    <form action="/" className="form-section__form">
                        <div className="form-section__form-row">

                            <Select
                                className='react-select-container'
                                classNamePrefix="react-select"
                                placeholder = "Комплектация"
                                options={options}
                            />

                           {/* <select name="picking">
                                <option>Комплектация</option>
                                <option value="1">Style</option>
                                <option value="2">Comfort</option>
                                <option value="3">Premium</option>
                                <option value="4">All road</option>
                            </select>*/}

                        </div>

                        <div className="form-section__form-row">
                            <input placeholder="Ваше имя" type="text"/>
                        </div>

                        <div className="form-section__form-row">
                            <input placeholder="Телефон" type="text"/>
                        </div>

                        <div className="form-section__form-row">
                            <input type="submit" value="Отправить заявку"/>
                        </div>
                    </form>

                </div>
            </section>

        );
    }
}

export default Form