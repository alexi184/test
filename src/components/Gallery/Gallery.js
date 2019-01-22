import React, {Component} from 'react'
import './Gallery.scss'
import Swiper from 'react-id-swiper';
import "react-id-swiper/src/styles/scss/swiper.scss";

import img1 from '../../img/raster/1.png'
import img2 from '../../img/raster/2.png'
import img3 from '../../img/raster/3.png'

class Gallery extends Component {

    render() {

        const params = {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30,
            loop: true
        }

        const {gallery} = this.props

        return (
            <section className='section-content gallery-section'>

                <h2 className="section-title section-title_white section-wrapper">Галерея</h2>
                <div className="gallery-slider">
                    <Swiper {...params}>
                        {
                            gallery.map((item, i) =>
                                <div className="gallery-slider__item" key={i}>
                                    <div className="gallery-slider__img-wrap">
                                        <img src={item.img} alt="img" />
                                    </div>
                                </div>
                            )
                        }
                    </Swiper>
                </div>
            </section>
        )
    }
}

export default Gallery

Gallery.defaultProps = {
    gallery: [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        }
    ]
}