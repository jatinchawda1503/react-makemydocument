import React from 'react'

const sevicesComponent = ({link,title,desciption,amount,amount_desciption,btn_title}) => {
    return (
        <div>
            	{/* <!-- Jobs Container --> */}
				<div className="tasks-list-container compact-list margin-top-35">
						
                        {/* <!-- Task --> */}
                        <a href={link} className="task-listing">
    
                            {/* <!-- Job Listing Details --> */}
                            <div className="task-listing-details">
    
                                {/* <!-- Details --> */}
                                <div className="task-listing-description">
                                    <h3 className="task-listing-title">{title}</h3>
                                    <p>{desciption}</p>
                                </div>
    
                            </div>
    
                            <div className="task-listing-bid">
                                <div className="task-listing-bid-inner">
                                    <div className="task-offers">
                                        <strong><i className="fa fa-inr photo-box-rs"></i>{amount}</strong>
                                        <span>{amount_desciption}</span>
                                    </div>
                                    <span className="button button-sliding-icon ripple-effect">{btn_title} <i className="icon-material-outline-arrow-right-alt"></i></span>
                                </div>
                            </div>
                        </a>
    
                    </div>
                    {/* <!-- Jobs Container / End --> */}
        </div>
    )
}

export default sevicesComponent
