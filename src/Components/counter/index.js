import React from 'react'
import "./counter.css";
import CounterComponents from "./counterComponents";


const Counter = () => {
    return (
        <div className="section padding-top-45 padding-bottom-75">
	<div className="container">
		<div className="row padding-right-40 padding-left-40 margin-left-0 margin-right-0">

			<div className="col-xl-12">
				{/* <!-- Section Headline --> */}
				<div className="section-headline centered margin-top-0 margin-bottom-50">
					<h3><strong>Why Us ?</strong></h3>
				</div>
			</div>


			<div className="col-xl-12">
				<div className="counters-container">
				
					<CounterComponents
                    title = "Applications Processed"
                    value = "2386"
                    symbol = "+"
                    iconClass = "icon-line-awesome-suitcase"
                    />

					<CounterComponents
                    title = "Hours Saved"
                    value = "28543"
                    symbol = "+"
                    iconClass = "icon-line-awesome-clock-o"
                    />




                    
					<CounterComponents
                    title = "Customers Served"
                    value = "2386"
                    symbol = ""
                    iconClass = "icon-line-awesome-user"
                    />

                    
					<CounterComponents
                    title = "Satisfaction Rate"
                    value = "100"
                    symbol = "%"
                    iconClass = "icon-line-awesome-trophy"
                    />


				</div>
			</div>
		</div>
	</div>
</div>
    )
}

export default Counter
