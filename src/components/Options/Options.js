import React, {Component} from 'react'
import './Options.scss'
import OptionsBlock from './OptionsBlock/OptionsBlock'
import OptionsTable from './OptionsTable/OptionsTable'

class Options extends Component {

    render() {
        const {options} = this.props;

        return (

            <div className='section-content options-section'>
                <div className="section-wrapper">
                    <h2 className="section-title">Доступные комплектации</h2>
                    <div className="options-list">
                        <OptionsBlock options={options} />
                        <OptionsTable options={options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Options

Options.defaultProps = {
    options: [
        {
            picking: 'Style',
            engine: 'TSI 2.0',
            power: '150 л.с.',
            kpp: '6-АКП',
            drive: 'Передний',
            price: '1 350 000 ₽'

        },
        {
            picking: 'Comfort',
            engine: 'TSI 2.0',
            power: '180 л.с.',
            kpp: '7-АКП',
            drive: 'Передний',
            price: '1 890 000 ₽'

        },
        {
            picking: 'Premium',
            engine: 'TSI 3.0',
            power: '220 л.с.',
            kpp: '7-АКП',
            drive: 'Полный',
            price: '2 325 000 ₽'

        },
        {
            picking: 'All road',
            engine: 'TSI 2.0',
            power: '180 л.с.',
            kpp: '7-АКП',
            drive: 'Полный',
            price: '2 325 000 ₽'
        }
    ]
}