import React from "react";
import '../static/Anthology.css';
import bookImage from "../images/book.png"; 
const Anthology = () => {
    return (
        <section className=' projectsSection' id='anthology' >
        <div className="anthologySummary"> 
            <div className="d-flex justify-content-center">
                <h2 className='siteHeadings'>Our Anthology</h2>
            </div>
            <div id='book'>
                <a href="http://bccc-ny.org/assets/pdf/SBI7Anthology.pdf">
                    <img src={bookImage} alt="book image"/>
                </a>
            </div>
            <div class="book-caption-center">
                <p><strong>Click the book to read!</strong></p>
            </div>
            <div id="bot-margin">
                <p>The following anthology was created in the summer of 2023 by SBI (Summa Bible Institute) 7.0, a youth ministry team from Brooklyn Community Christian Church. Our goal is to model ourselves after 1 Timothy 4:12:</p>
            </div>
            <div class ="book-caption-center">
                <p style={{textAlign:"center", fontStyle: "italic"}}>Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.</p>
            </div>  
                <div id="bot-margin">
                    <p>
                        Each SBI member has written their testimony, a story detailing their experiences with God and their acceptance of Jesus Christ as their Lord and Savior. Along with 
                        their testimony, we have each submitted creative works which serve as expressions of our faith in Jesus. God has done so much in our lives, and we only wish to share 
                        it with the world. We're hoping you will be inspired and moved by these works.
                    </p>
                </div>         
                <div class ="book-caption-center">
                    <p style={{textAlign:"center", fontStyle: "italic"}}><strong>SBI 7.0 Directors<br /> Cullen Ye and Simeon Leung</strong></p>
                </div>
            
        </div> 
        </section>
    );
}

export default Anthology;
