import React from 'react'
import ProcessComponent from './ProcessComponent'

const Process = () => {
    return (
        <div className="section padding-top-45 padding-bottom-30">
		<div className="container">
			<div className="row">

				<div className="col-xl-12">
					{/* <!-- Section Headline --> */}
					<div className="section-headline centered margin-top-0 margin-bottom-50">
						<h3><strong>How It Works?</strong></h3>
					</div>
				</div>
				<ProcessComponent 
                title = "1. Fill Form"
                discription = "Submit your details by filling the above form."
                iconclassName = "icon-brand-wpforms"
                BoxclassName = "icon-box with-line"
                />
				<ProcessComponent 
                title = "2. Guidance From Expert"
                discription = "Our service expert will connect with you and prepare the documents."
                iconclassName = "icon-feather-phone-call"
                BoxclassName = "icon-box with-line"
                />
                <ProcessComponent 
                title = "3. Get Certificate"
                discription = "Documents will be filed with the govt. & you will receive the final certificate from them."
                iconclassName = "icon-line-awesome-trophy"
                BoxclassName="icon-box"
                />
			</div>
		</div>
	</div>
    )
}

export default Process
