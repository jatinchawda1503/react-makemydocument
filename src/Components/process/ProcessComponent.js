import React from 'react'
import './proces.css'

const ProcessComponent = ({title,discription,iconclassName,BoxclassName}) => {
    return (
        <div className="col-xl-4 col-md-4">
        {/* <!-- Icon Box --> */}
        <div className={BoxclassName}>
            {/* <!-- Icon --> */}
            <div className="icon-box-circle">
                <div className="icon-box-circle-inner">
                    <i className={iconclassName}></i>
                    <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                </div>
            </div>
            <h3>{title}</h3>
            <p>{discription}</p>
        </div>
    </div>
    )
}

export default ProcessComponent
