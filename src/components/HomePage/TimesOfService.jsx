import React from 'react';
import '../static/TOS.css';


const StatementOfFaith = () => {
    return (
        <section className='darkSection'>
            <div className='aboutSummary'>
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
    );
}

export default StatementOfFaith;