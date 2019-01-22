import React from 'react'
import '../Options.scss'

const OptionsTable = (props) => {
    return (
        <table className="options-list__table">
            <thead>
            <tr>
                <th>Комплектация</th>
                <th>Двигатель</th>
                <th>Мощность</th>
                <th>КПП</th>
                <th>Привод</th>
                <th>Стоимость </th>
            </tr>
            </thead>
            <tbody>
            {
                props.options.map((item, i) =>
                    <tr key={i}>
                        <td>
                            {item.picking}
                        </td>
                        <td>
                            {item.price}
                        </td>
                        <td>
                            {item.engine}
                        </td>
                        <td>
                            {item.power}
                        </td>
                        <td>
                            {item.kpp}
                        </td>
                        <td>
                            {item.drive}
                        </td>
                    </tr>
                )
            }
            </tbody>

        </table>
    )
}

export default OptionsTable