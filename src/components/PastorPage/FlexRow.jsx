import React from 'react';
import '../static/Pastor.css';

const FlexRow = () => {
    return (
        <section className='darkSection'>
            {/* the container for the flex row */}
            <div class="flex-container">
                <div id="pastor-quote" className = "aboutSummary">
                    <h4><strong>Motto</strong></h4>
                    <p id = "quote">
                        "Discipling Godly Men and Women,
                        Building Godly Families,
                        Raising Godly Children"
                    </p>
                </div>
                <div id="family" className = "aboutSummary">
                    <h4><strong>Family</strong></h4>
                    <p>
                        Together they have discipled numerous singles and couples in pre-marital and 
                        marriage counseling for more than 20 years. They have four kids: Emmet (“the Truth” ),
                        Artesia (“the Life”), Deryka (“the Way”), and Jedidiah (“the Love of God”).
                    </p>
                </div>
            </div>
            {/* fun facts is outside the flex div */}
            <div id="fun-facts" className = "aboutSummary">
                <h4><strong>Some Fun Facts!</strong></h4>
                <ul>
                    <li>He grew up in a restaurant family in NYC.</li>
                    <li>He is fluent in Mandarin, Cantonese, Taiwanese and “Brooklynese”.</li>
                    <li>His claim to fame: His father invented Orange Beef.</li>
                </ul>
                </div>
        </section>
    );
}

export default FlexRow;
