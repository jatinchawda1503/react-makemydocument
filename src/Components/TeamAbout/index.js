import React from 'react'
import MemberComponent from "./memberComponent"
import prakashsharma from "../../images/prakash-sharma.jpg"
import swetankgupta from "../../images/swetank-gupta.jpg"
import reenagupta from "../../images/reena-gupta.jpg"
import moreshwarkakde from "../../images/moreshwar-kakde.jpg"

const TeamAbout = () => {
    return (
        <div className="section gray padding-top-45 margin-bottom-30" id="meet-our-team">
		<div className="container">
			<div className="row">

				{/* <!-- Section Headline --> */}
				<div className="col-xl-12">
					{/* <!-- Section Headline --> */}
					<div className="section-headline centered margin-top-0 margin-bottom-50">
						<h3><strong>Meet Our Team</strong></h3>
					</div>
				</div>

                <MemberComponent
                logo={prakashsharma}
                title="Mr. Prakash Sharma"
                discription_p1 = " is one of the co-founders of MakeMyDocument. He completed his M.COM and LLB from Maharashtra and then practiced law for a couple of years. He has worked with several government departments such as the Law and Judiciary Department, Sales Tax Department and the Revenue Department under the government of Maharashtra."
                discription_p2 ="Having such a vast experience of Government Administration, he understood the limitations of the government machinery and it's resources and the pain that the citizens go through due to these limitations. This drove him in taking voluntary retirement and coming up with a private machinery which would help both the citizens and the government. He shared the idea with other co-founders which led to the formation of MakeMyDocument."
                discription_p3 ="He has been actively involved in social work with several NGOs and government led organisations. He believes in playing a part in the development and welfare of the society."
                />
                <MemberComponent
                logo={swetankgupta}
                title="Mr. Swetank Gupta"
                discription_p1 = " our co-founder, has also been working with the government since the last 20 years and has successfully helped the government in ideation and execution of services such as the Common Service Centre and Jan Dhan Yojana."
                discription_p2 ="He holds a masters degree from Masters of International Business Administration, BHU. He holds several awards and recognitions including National eGovernance Award, Mobile World award and Rajeev Gandhi Prashasakiya Gatimanta Abhiyan award. Mr. Gupta is also an active member of the Lions Club and has been recognized as &quot;The Best Vice President of the Multiple&quot;, by Lions Club Multiple 323 comprising of 6 states of India."
                discription_p3 ="Presently he is working as the CEO and co-founder of World’s First PDI led model on multi-brand retail called ezeelo.com. His desire for helping the government, its citizens and creating a better society for everyone led him to join our venture."
                />
                <MemberComponent
                logo={reenagupta}
                title="Mrs. Reena Gupta"
                discription_p1 = " adds a strong pillar to our company as our co-founder. Her education qualification includes MBA in finance. She has more than 19 years of experience in heading operations in IT and IT enabled service organizations."
                discription_p2 ="Currently she the co-founder of ezeelo.com and heading the backend operations, IT and technology department and accounts functioning of the organization. She is a result oriented person with adherence to the processes and strong eye on details."
                discription_p3 ="He has been actively involved in social work with several NGOs and government led organisations. He believes in playing a part in the development and welfare of the society."
                />
                <MemberComponent
                logo={moreshwarkakde}
                title="Mr. Moreshwar Kakde"
                discription_p1 = " who is our another co-founder, is an expert in the Real Estate world. He has a vast experience of more than 25 years in the business and has been working on several projects with the government. He has built several A class societies and undertaken both big and small budget projects from the common public and has received a lot of recognition for his work."
                discription_p2 ="He feels that the society has given him a lot and believes in giving back to the society. He has been involved in several social activities and has been supporting many economically backward families and communities and uplifting them to his best extent."
                discription_p3 ="Mr. Kakde understands the complexities in the government documentation that arises due to the several shortcomings, loopholes and unclear processes in each and every sector of the governmen-public relations, and hence is very keen in solving this problem and smoothening up the process for a common man."
                />
                
			</div>
		</div>
	</div>
    )
}

export default TeamAbout
