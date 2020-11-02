import React from 'react'
import ServiceComponent from './sevicesComponent';


const Service = () => {
    return (
        <div className="section padding-top-45 padding-bottom-30 service-section">
	<div className="container">
		<div className="row">
			<div className="col-xl-12">
				
				{/* <!-- Section Headline --> */}
				<div className="section-headline centered margin-top-0 margin-bottom-25">
					<h3>
						<strong>Services Offered</strong>
					</h3>
				</div>
                
                <ServiceComponent
                link = "/services/domicile-certificate"
                title = "Domicile Certificate"
                desciption = "A domicile certificate, often referred to as a residence certificate is an official document that is used to prove that a person is a resident of a particular State/Union Territory. A person having a domicile certificate can avail various benefits like education, government-sponsored scholarship and employment under state quotas."
                amount = "499"
                amount_desciption = "Professional Fees"
                btn_title ="Apply"
                />

                <ServiceComponent
                link = "/services/income-certificate"
                title = "Income Certificate"
                desciption = "Income Certificate is an official document issued by the State Government which states the annual income details of the applicant or family of the applicant. The key information specified in the certificate is details regarding the annual income of the family earned from various sources as per the records for the specific financial year/s."
                amount = "499"
                amount_desciption = "Professional Fees"
                btn_title ="Apply"
                />
			

			</div>
		</div>
	</div>
</div>
    )
}

export default Service
