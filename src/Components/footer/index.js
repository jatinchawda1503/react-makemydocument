import React from 'react'
import logo from "../../images/logo-2.png"

const Footer = () => {
    return (
        <div id="footer">

	{/* <!-- Footer Top Section --> */}
	<div className="footer-top-section">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">

					{/* <!-- Footer Rows Container --> */}
					<div className="footer-rows-container">

						{/* <!-- Left Side --> */}
						<div className="footer-rows-left">
							<div className="footer-row padding-top-20 padding-bottom-20">
								<form  method="post" className="newsletter" id="newsletter">
								<h3 className="footer-newsletter-header"><i className="icon-feather-mail"></i> Stay Connected</h3>
									<input type="email" name="email" placeholder="Enter your email address" className="footer-newsletter-input" id="newsletterEmail"/>
									<button type="submit" id="newsletter-submit" className="footer-newsletter-button"><i className="icon-feather-arrow-right"></i></button><span id="news-msg" className="d-flex align-items-center margin-left-10"></span>
								</form>
							</div>
						</div>

						{/* <!-- Right Side --> */}
						<div className="footer-rows-right">

							{/* <!-- Social Icons --> */}
							<div className="footer-row">
								<div className="footer-row-inner">
									<ul className="footer-social-links">
										<li>
											<a href="https://facebook.com/makemydocument" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-facebook-f"></i>
											</a>
										</li>
										<li>
											<a href="https://twitter.com/makemydocument" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-twitter"></i>
											</a>
										</li>
										<li>
											<a href="https://instagram.com/makemydocument/" title="Instagram" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-instagram"></i>
											</a>
										</li>
										<li>
											<a href="https://linkedin.com/in/make-my-document-a2b10a1b9/" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-linkedin-in"></i>
											</a>
										</li>
									</ul>
									<div className="clearfix"></div>
								</div>
							</div>

							{/* <!-- Language Switcher --> */}
						</div>

					</div>
					{/* <!-- Footer Rows Container / End --> */}
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Footer Top Section / End -->

	<!-- Footer Middle Section --> */}
	<div className="footer-middle-section">
		<div className="container">
			<div className="row footer-menu-row">


				{/* <!-- Newsletter --> */}
				{/* <!-- <div className="col-xl-4 col-lg-4 col-md-12">
					<h3><i className="icon-feather-mail"></i> Stay Connected With Us!</h3>
					<p>Sign Up with your email and stay updated of the latest happenings, updates, offers and much more.</p>
					<form action="#" method="get" className="newsletter">
						<input type="text" name="fname" placeholder="Enter your email address">
						<button type="submit"><i className="icon-feather-arrow-right"></i></button>
					</form>
				</div> --> */}

				<div className="col-xl-5 col-lg-5 col-md-12 footer-company-div">
					<h3 className="footer-company-header">
						<span>
							<img src={logo} className="footer-company-logo" alt="logo"/>
						</span>
						<span>MakeMyDocument
						</span>
					</h3>
					<p><i className="icon-line-awesome-map-marker"></i>Block No. 9/A, 4th Floor, J B Wing, Mangalwari, Sadar, Nagpur, 440001</p>
					<p><i className="icon-feather-phone-call"></i>9423121988
					</p>
					<p><i className="icon-material-outline-email"></i><a href="mailto:contact@makemydocument.in">contact@makemydocument.in</a>
					</p>
				</div>
				

				<div className="col-xl-2 col-lg-2 col-md-6">
				</div>


				{/* <!-- Links --> */}
				<div className="col-xl-3 col-lg-3 col-md-3">
					<div className="footer-links">
						<h3>Services</h3>
						<ul>
							<li><a href="<?php echo $host_dir;?>/services/caste-certificate.php"><span>Caste Certificate</span></a></li>
							<li><a href="<?php echo $host_dir;?>/services/domicile.php"><span>Domicile Certificate</span></a></li>
							{/* <!-- <li><a href="<?php echo $host_dir;?>/services/caste-certificate-ncl.php"><span>Caste Certificate NCL</span></a></li> --> */}
							<li><a href="<?php echo $host_dir;?>/services/income-certificate.php"><span>Income Certificate</span></a></li>
						</ul>
					</div>
				</div>

				{/* <!-- Links --> */}
				<div className="col-xl-2 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>Helpful Links</h3>
						<ul>
							<li><a href="<?php echo $host_dir;?>/contact-us.php"><span>Contact Us</span></a></li>
							<li><a href="<?php echo $host_dir;?>/privacy-policy.php"><span>Privacy Policy</span></a></li>
							<li><a href="<?php echo $host_dir;?>/terms-and-conditions.php"><span>Terms and Conditions</span></a></li>
						</ul>
					</div>
				</div>


			</div>
		</div>
	</div>
	{/* <!-- Footer Middle Section / End -->

	<!-- Footer Copyrights --> */}
	<div className="footer-bottom-section">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">
					© 2020 <strong>MakeMyDocument</strong>. All Rights Reserved.
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Footer Copyrights / End --> */}




</div>
    )
}

export default Footer
