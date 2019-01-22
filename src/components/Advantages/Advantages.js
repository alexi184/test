import React, {Component} from 'react'
import './Advantages.scss'

import imgMobile1 from '../../img/raster/1.png'
import imgMobile2 from '../../img/raster/2.png'
import imgMobile3 from '../../img/raster/3.png'

class Advantages extends Component {

    render() {

        const {advantages} = this.props

        return (
            <div className='section-content advantages-section'>
                <div className="section-wrapper">

                    <h2 className="main-title">Причины стать владельцем Škoda Superb в ноябре</h2>
                    <div className="section-description">
                        Представьте себе автомобиль, в котором отсутствует грань между красотой и функциональностью, а дизайн и пространство находятся в абсолютной гармонии.
                    </div>

                    <div className="advantages-section__list">
                        {
                            advantages.map((item) =>
                                <div className="advantages-section__list-item" key={item.id}>
                                    <div className="advantages-section__list-img">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className="advantages-section__list-text">
                                        {item.text}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Advantages

Advantages.defaultProps = {
    advantages: [
        {
            id:1,
            img: imgMobile1,
            text: "Премиальные технологии, невероятный комфорт и вместительность"
        },
        {
            id:2,
            img: imgMobile2,
            text: "Специальные серии с 4х4 Sportline"
        },
        {
            id:3,
            img: imgMobile3,
            text: "Возможность приобретения кузова Limo или кузова Combi"
        }
    ]
}