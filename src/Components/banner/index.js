import React from 'react'
import "../banner/banner.css";


const banner = () => {
    return (
        <div className="intro-banner-custom padding-top-20">
		    <div className="container">
			    <div className="row justify-content-center">
				    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 banner-content">
					
					<h1 className="intro-banner-header-index">We prepare your legal government documents</h1>

					<h3 className="intro-banner-sub-header-index">Saving your <strong>Time, Money, Exertion and Stress</strong> on every document!</h3>
					
					<h3 className="intro-banner-starting-price">Starting <span className="intro-banner-price">@ Rs. 499/-</span>* Only!</h3>

					<p><span className="banner-section-intro">#AatmanirbharBharat #VocalForLocal <img src="images/flags/in.svg"/></span> </p>

					<h3 className="intro-banner-services"><strong>Domicile Certificate and Income Certificate Services</strong></h3>

					<div>
						<p className="banner-section-conditions margin-top-30">*Actual price will depend on the service selected
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className="banner-form-container" id="contact-form">
			<div className="row">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div className="dashboard-box margin-top-0 border-highlight-blue">

						{/* <!-- Headline --> */}
						<div className="headline header padding-bottom-0">
							<h3 className="text-center"> Apply for Service</h3>
							<p className="callback-form-content">Fill the details & we will get in touch with you to understand your requirement
							</p>
						</div>

						<div className="row callback-banner-row">
							<div className="col-lg-8 col-md-8">
								<div className="content with-padding padding-bottom-10 callback-form-padding">
									<div className="contact-form-wrap">

										<form id="contactForm" method="post">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="input-with-icon-left contact-form-group">
														<input className="with-border form-control margin-bottom-16" name="contact_name" type="text" id="contactName" placeholder="Your Name" required/> 
														<i className="icon-material-outline-account-circle"></i>
														<div className="form-validate-icons">
															<span></span>
														</div>
													</div>
												</div>


												<div className="col-lg-6 col-md-6">
													<div className="input-with-icon-left contact-form-group">
														<input className="with-border form-control margin-bottom-16" name="contact_phone" type="text" id="contactPhone" placeholder="Phone Number" required/>
														<i className="icon-feather-phone"></i>
														<div className="form-validate-icons">
															<span></span>
														</div>
													</div>
												</div>


												<div className="col-lg-6 col-md-6">
													<div className="input-with-icon-left contact-form-group">
														<input className="with-border form-control margin-bottom-16" name="contact_email" type="email" id="contactEmail" placeholder="Email Address" required/>
														<i className="icon-material-outline-email"></i>
														<div className="form-validate-icons">
															<span></span>
														</div>
													</div>
												</div>

												<div className="col-lg-6 col-md-6">
													<div className="input-with-icon-left contact-form-group">
														<div id="autocomplete-container">
															<input  className="with-border form-control margin-bottom-16" name="contact_city" id="contactCity" type="text" placeholder="Nagpur" value="Nagpur" readOnly/>
														</div>
														<i className="icon-material-outline-location-on"></i>
														<div className="form-validate-icons">
															<span></span>
														</div>
													</div>
												</div>


												<div className="col-lg-12">
													<div className="input-with-icon-left contact-form-group">
														<select className="selectpicker with-border service-selector form-control margin-bottom-16" data-size="7" title="Choose Service" name="contact_service"  id="contactService" required>
														<option value="domicile">Domicile Certificate</option>
														<option value="income-certificate">Income Certificate</option>
														</select>
														<i className="icon-feather-list"></i>
														<div className="form-validate-icons">
															<span></span>
														</div>
													</div>
												</div>

												<div className="col-lg-6 col-md-6">
													<div className="contact-form-group">
													<div className="row margin-left-0">
													<div className="captcha-box">
													<span id="txtCaptchaSpan"></span>
														</div>
														
														<div className="capta-text">
														<input type="text" className="with-border form-control padding-right-0 padding-left-10" name="contact_question" id="txtInput" placeholder="Please Enter Code *"/>
														</div>
													</div>
														<input type="hidden" id="txtCaptcha"/>
														<div className="form-validate-icons">
															<span></span>
														</div>
													</div>
												</div>

												<div className="col-lg-12 text-center">
													<button type="submit"  name="submit" id="contactBtn"  className="button ripple-effect big margin-top-10 margin-bottom-20"> Submit Details</button>
													<div className="notification  closeable">
													<p id="msg"></p>
													<a className="close"></a>
													</div>
												</div>
											</div>

										</form>

									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="banner-callback-benefits">
									<p className="banner-section-benefits-content"><i className="icon-line-awesome-thumbs-up margin-right-10"></i>Trusted Brand
									</p>
									<p className="banner-section-benefits-content"><i className="icon-feather-award margin-right-10"></i>Expert Guidance
									</p>
									<p className="banner-section-benefits-content"><i className="icon-line-awesome-map-marker margin-right-10"></i>Online Process
									</p>
									<p className="banner-section-benefits-content"><i className="icon-line-awesome-money margin-right-10"></i>No Hidden Charges
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default banner

