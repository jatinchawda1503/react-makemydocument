import React, { Component } from 'react'
import TeamComponent from './Teamcomponent'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../css/style.css";
import "../../css/custom.css";
import "./team.css"
import prakashsharma from "../../images/prakash-sharma.jpg"
import swetankgupta from "../../images/swetank-gupta.jpg"
import reenagupta from "../../images/reena-gupta.jpg"
import moreshwarkakde from "../../images/moreshwar-kakde.jpg"




class Team extends Component {
render(){

    var settings = {
        infinite: false,
        className:"default-slick-carousel freelancers-container freelancers-grid-layout",
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		responsive: [
		    
            {
		      breakpoint: 1292,
		      settings: {
		        dots: true,
		    	arrows: false
		      }
		    },
		    {
		      breakpoint: 993,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        dots: true,
		    	arrows: false
		      }
		    },
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true,
		   		arrows: false
		      }
		    }
	  ]
      };

    return (
        <div className="section gray padding-top-45 padding-bottom-30 full-width-carousel-fix">
	<div className="container">
		<div className="row">

			<div className="col-xl-12">
				{/* <!-- Section Headline --> */}
				<div className="section-headline centered margin-top-0 margin-bottom-25">
					<h3>
						<strong>Our Team</strong>
					</h3>
				</div>

				<Slider className="default-slick-carousel freelancers-container freelancers-grid-layout" {...settings}>

                    
                    <TeamComponent
                    imageUrl={prakashsharma}
                    Name="Mr. Prakash Sharma"
                    Designation="Co-founder, Director"
                    Link="/about-us#meet-our-team"
                    />
					
                    <TeamComponent
                    imageUrl={swetankgupta}
                    Name="Mr. Swetank Gupta "
                    Designation="Co-founder"
                    Link="/about-us#meet-our-team"
                    />

                    <TeamComponent
                    imageUrl={reenagupta}
                    Name="Mrs. Reena Gupta"
                    Designation="Co-founder, Director"
                    Link="/about-us#meet-our-team"
                    />

                    <TeamComponent
                    imageUrl={moreshwarkakde}
                    Name="Mr. Moreshwar Kakde "
                    Designation="Co-founder, Director"
                    Link="/about-us#meet-our-team"
                    />

				</Slider>
			</div>

		</div>
	</div>
</div>
    )
}
}

export default Team
