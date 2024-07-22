import React from 'react';
import '../static/Pastor.css';

const FlexRow = () => {
    return (
        <section className='darkSection'>
            <div id="1" class="flex-container">
                <div className = "aboutSummary">
                    <h4>Motto</h4>
                    <p id = "quote">
                        "Discipling Godly Men and Women,
                        Building Godly Families,
                        Raising Godly Children"
                    </p>
                </div>
                <div id="2" className = "aboutSummary">
                    <h4>Family</h4>
                    <p>
                        Together they have discipled numerous singles and couples in pre-marital and 
                        marriage counseling for more than 20 years. They have four kids: Emmet (“the Truth” ),
                        Artesia (“the Life”), Deryka (“the Way”), and Jedidiah (“the Love of God”).
                    </p>
                </div>
                <div id="3" className = "aboutSummary">
                <h4>Some Fun Facts!</h4>
                <ul>
                    <li>He grew up in a restaurant family in NYC.</li>
                    <li>He is fluent in Mandarin, Cantonese, Taiwanese and “Brooklynese”.</li>
                    <li>His claim to fame: His father invented Orange Beef.</li>
                </ul>
            </div>
            </div>
        </section>
    );
}

export default FlexRow;
