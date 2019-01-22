import React from 'react'
import '../Options.scss'

const OptionsBlock = (props) => {
    return (
        <div className="options-list-block">
            {
                props.options.map((item, i) =>
                    <div className="options-list__item" key={i}>
                        <div className="options-list__row">
                            <div className="options-list__cell
                                                       options-list__cell_bold">
                                {item.picking}
                            </div>
                            <div className="options-list__cell
                                             options-list__cell_green">
                                {item.price}
                            </div>

                        </div>
                        <div className="options-list__row">
                            <div className="options-list__cell">
                                {item.engine}
                            </div>
                            <div className="options-list__cell">
                                {item.power}
                            </div>
                            <div className="options-list__cell">
                                {item.kpp}
                            </div>
                            <div className="options-list__cell">
                                {item.drive}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default OptionsBlock