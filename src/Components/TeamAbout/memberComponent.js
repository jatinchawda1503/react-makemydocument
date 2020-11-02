import React from 'react'

const MemberComponent = ({logo,title,discription_p1,discription_p2,discription_p3}) => {
    return (
        <div className="row">
         <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 team-member-details">
					<img src={logo} className="about-us-logo member-image" />
				</div>
				<div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 team-member-details">
					<p><strong>{title}</strong> {discription_p1}
					</p>
					<p>{discription_p2}
					</p>
					<p> {discription_p3}
					</p>
					{/* <!-- <p className="member-social-channels">
						<a href="https://facebook.com/makemydocument" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
							<i className="icon-brand-facebook-f"></i>
						</a>
						<a href="https://twitter.com/makemydocument" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
							<i className="icon-brand-twitter">
							</i>
						</a>
						<a href="https://instagram.com/makemydocument/" title="Instagram" data-tippy-placement="bottom" data-tippy-theme="light">
							<i className="icon-brand-instagram"></i>
						</a>
						<a href="https://linkedin.com/in/make-my-document-a2b10a1b9/" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
							<i className="icon-brand-linkedin-in"></i>
						</a>
					</p> --> */}
				</div>
                </div>
    )
}

export default MemberComponent
