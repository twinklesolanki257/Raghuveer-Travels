import React from 'react'

const Ourrates = () => {
    return (
        <div id='rates'><center>
            <h1 className='h1'>Our Rates</h1>
            <table>
                <tr>
                    <th>Car List</th>
                    <th>Seating</th>
                    <th>Rates</th>
                </tr>
                <tr>
                    <td>Innova Crysta</td>
                    <td>7+1</td>
                    <td> ₹14</td>
                </tr>
                <tr>
                    <td>Amaze</td>
                    <td>9+1</td>
                    <td>₹13</td>
                </tr>
                <tr>
                    <td>Tavera</td>
                    <td>9+1</td>
                    <td>₹13</td>
                </tr>
                <tr>
                    <td>Innova</td>
                    <td>4+1</td>
                    <td>₹13</td>
                </tr>
                <tr>
                    <td>Etios</td>
                    <td>4+1</td>
                    <td>₹10</td>
                </tr>
                <tr>
                    <td>Swift</td>
                    <td>4+1</td>
                    <td>₹9</td>
                </tr>
                <tr>
                    <td>Breeza</td>
                    <td>5+1</td>
                    <td>₹8.7</td>
                </tr>
                <tr>
                    <td>17 Seater Traveller</td>
                    <td>16+1</td>
                    <td>₹20</td>
                </tr>
                <tr>
                    <td>32 Seater Traveller</td>
                    <td>31+1</td>
                    <td>₹40</td>
                </tr>
            </table>
            <br />
            <h2 className='h2'>Sedan Taxi(Innova, Etios, Swift)</h2>
            <table>
                <tr>
                    <th>Package</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>8 hrs 80 Km</td>
                    <td>Local /Extra hours 100/- Extra Km 10/-</td>
                    <td> ₹1400</td>
                </tr>
                <tr>
                    <td>Full Day Out of Station</td>
                    <td>Full Day 10/- Per Included 250Km Running</td>
                    <td>₹2500</td>
                </tr>
                <tr>
                    <td>Pick & Drop</td>
                    <td>600/-</td>
                    <td>₹600</td>
                </tr>
            </table>
            <br />
            <h2 className='h2'>Suv Taxi(Innova Crysta, Amaze, Breeza, Tavera)</h2>
            <table>
                <tr>
                    <th>Package</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>Full Day Package</td>
                    <td>14 Per Km Included 250/- Running Night Allowance 250/-</td>
                    <td> ₹3500</td>
                </tr>
                <tr>
                    <td>14 Rs Per Hr/80Km</td>
                    <td>Extra Hours 150/- Extra Km 14/-</td>
                    <td>₹2000</td>
                </tr>
                <tr>
                    <td>Pick & Drop</td>
                    <td>1000/-</td>
                    <td>₹1000</td>
                </tr>
            </table>
            <br />
            <h2 className='h2'>Traveller(17/32 Seater Traveller)</h2>
            <table>
                <tr>
                    <th>Package</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>22Rs Per Km</td>
                    <td>Outstation Full Day Package Night Allowance 400/-</td>
                    <td> ₹5500</td>
                </tr>
                <tr>
                    <td>30Rs Per Km</td>
                    <td>Outstation and Local Full Day Package Night Alowance 500/-</td>
                    <td>₹7500</td>
                </tr>
            </table>
        </center>

        </div>
    )
}

export default Ourrates;