import React from 'react'
import "./MedalTable.css"

// sample data
const medalData = [
    { country: 'USA', gold: 39, silver: 41, bronze: 33 },
    { country: 'China', gold: 38, silver: 32, bronze: 18 },
    { country: 'Japan', gold: 27, silver: 14, bronze: 17 },
    { country: 'Germany', gold: 10, silver: 11, bronze: 16 },
    { country: 'Nigeria', gold: 3, silver: 1, bronze: 2 }
]

const MedalTable = () => {

    return (
        <div className="MedalTableWrapper">
            <h1>Medal Table</h1>
            <table className='MedalTable'>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Gold</th>
                        <th>Silver</th>
                        <th>Bronze</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {medalData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.country}</td>
                            <td>{data.gold}</td>
                            <td>{data.silver}</td>
                            <td>{data.bronze}</td>
                            <td>{data.gold + data.silver + data.bronze}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MedalTable