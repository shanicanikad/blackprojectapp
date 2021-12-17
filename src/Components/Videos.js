import React from 'react'
import '../Styles/Videos.css'
import Nav from './Nav'
import Subscribe from './Subscribe'

function Video() {
    return (
        <div className="containsV">
            <Nav />
            <Subscribe />
            <h2 className="both">MENS</h2>
            <tr>
                <td>
                    <div id="mens"> Fear of God Exclusively for Ermenegildo Zegna
                        <p><iframe src="https://www.youtube.com/embed/QT0-dRnqqHU"></iframe></p>
                    </div>
                </td>


                <td>
                    <div id="mens"> Public School | Fall / Winter Men's Runway Show
                        <p><iframe src="https://www.youtube.com/embed/u75f11puv3c"></iframe></p>
                    </div>
                </td>
            </tr>
            <tr>

                <td>
                    <div id="mens"> Daily Paper SS20 Campaign
                        <p><iframe src="https://www.youtube.com/embed/D1WaY-fhNmk"></iframe></p>
                    </div>
                </td>


                <td>
                    <div id="mens"> Pyer Moss | Fall Winter 2018/2019
                        <p><iframe src="https://www.youtube.com/embed/Bz-cQmdP3uQ"></iframe></p>
                    </div>
                </td>
            </tr>


            <h2 className="both">WOMENS</h2>

            <tr>

                <td>
                    <div id="mens"> Thebe Magugu | Fall Winter 2019/2020
                        <p><iframe src="https://www.youtube.com/embed/K-64i_IgVpQ"></iframe></p>
                    </div>
                </td>


                <td>
                    <div id="mens"> LaQuan Smith February 2020 
                        <p><iframe src="https://www.youtube.com/embed/mDLOaqTg-aQ"></iframe></p>
                    </div>
                </td>

            </tr>
            <tr>
                <td>
                    <div id="mens"> Savage X Fenty Show 2021
                        <p><iframe src="https://www.youtube.com/embed/Jhxx7naUOYE"></iframe></p>
                    </div>
                </td>


                <td>
                    <div id="mens"> Fe Noel February 2020 
                        <p><iframe src="https://www.youtube.com/embed/kV2AXou2AOo"></iframe></p>
                    </div>
                </td>

            </tr>
        </div>
    )
}

export default Video