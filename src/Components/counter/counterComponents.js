import React from 'react'
import CountUp from 'react-countup';


const counterComponents = ({value,symbol,title,iconClass}) => {
    return (    
        <div className="single-counter">
						<i className={iconClass}></i>
						<div className="counter-inner">
                        <h3><CountUp className="counter" 
                        start={0}
                        duration={5}
                        separator="," 
                        end={Number(value)}
                        suffix={symbol}
                        /></h3>
							<span className="counter-title">{title}</span>
						</div>
		</div>
    )
}

export default counterComponents
