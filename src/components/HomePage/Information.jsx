import React from 'react';
import '../static/TOS.css';
import Map from '../images/map.jpg'; 
import '../static/Information.css';
const Information = () => {
    return (
        <div className="force-w center">
            <section className='darkSection contact flex-container ' id='contact'>
                <div className='aboutSummary flex-container '>
                    <img src={Map} className="roundi"></img>
                    <hr/>
                    <p>Address:</p>
                    <br/>
                    <p>2287 East 15th St.</p>
                    <br/>   
                    <p>Brooklyn, NY 11229</p>
                </div>
            
                <div className='aboutSummary flex-container '>
                    <h2 style={{textAlign:"center"}}>Service Times</h2>
                    <div id="table">
                        <table>
                            <tr>
                                <th>Service	</th>
                                <th>Day</th>
                                <th>Time</th>
                            </tr>
                            <tr>
                                <td>Chinese Service</td>
                                <td>Sunday	</td>
                                <td>9:30 am</td>
                            </tr>
                            <tr>
                                <td>English Service	</td>
                                <td>Sunday	</td>
                                <td>11:30 am</td>
                            </tr>
                            <tr>
                                <td>English Prayer Meeting</td>
                                <td>Tuesday</td>
                                <td>7:30 PM</td>
                            </tr>
                            <tr>
                                <td>Chinese Prayer Meeting</td>
                                <td>Wednesday	</td>
                                <td>8:00PM</td>
                            </tr>
                            <tr>
                                <td>English/Chinese Fellowship</td>
                                <td>Friday</td>
                                <td>7:30 PM</td>
                            </tr>
                        </table>
                        </div>
                </div>
            </section>
        </div>
    );
}

export default Information;
