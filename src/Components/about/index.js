import React from 'react'
import Logo from '../../images/logo-2.png'

const AboutComponent = () => {
    return (
        <div className="section gray padding-top-45 padding-bottom-30">
        <div className="container">
            <div className="row">
    
                {/* <!-- Section Headline --> */}
                <div className="col-xl-12">
                        {/* <!-- Section Headline --> */}
                        <div className="section-headline centered margin-top-0 margin-bottom-50">
                            <h3><strong>About MakeMyDocument</strong></h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <img src={Logo} className="about-us-logo"/>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                        <p>MakeMyDocument is a web based Legal Guidance and Counselling service portal where you can obtain various legal documents such as <strong>Domicile Certificate, Income Certificate</strong>, etc on a single click while enjoying your convenience at home. 
                        </p>
                        <p>The company is founded by a team of professionals from various departments such as Government services, IT sector, Real Estate sector and Legal Services sector. With a combined experience of more than <strong>75+ years</strong>, the company aims in bridging the gap between the government and the common man.
                        </p>
                        <p>The services have been introduced to ease the process of obtaining any legal document from the government by providing <strong>Expert Guidance, Complete Online Process and Proactive Services</strong>. We support the government machinery by guiding the citizens in screening, preparing and filing the documents in the required format and hence benefiting both of them in the process.  
                        </p>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default AboutComponent
