import * as React from 'react'
import "./aboutme.css"
import { StaticImage } from 'gatsby-plugin-image'

const AboutMeComponent = () => (
    <div>
    <div class="education_section">
    <div class="education_content">
        <div class="aboutme_line">
            <StaticImage 
            className = {"aboutme_image"}
            src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\AboutMe\Ananya Maddali-1 (1).png"></StaticImage>&nbsp;&nbsp;&nbsp;&nbsp;<h1 class="education_title">About <span>&nbsp;Me</span></h1>
            </div> 
                <ul class="education_bullets">
                    <li>Major in <span>Computer Science</span> at Texas A&M University</li> 
                    <li>Cumulative GPR: <span>4.0/4.0</span></li>
                    <li>Dean's List 2021-2022</li>
                    <li><span>1st rank</span> in AS & A Levels in international school in Bangalore, India</li>
                    <li><span>6/8 A*s</span> in IGCSE Curriculum</li>           
                </ul>
        </div>
        <div>
            <StaticImage className={"aboutme_icon"} 
            src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\AboutMe\DSC_0559 (1).JPG" alt="me"></StaticImage>
        </div>
        <div class="education_image">
            <StaticImage className = {"texasam_image"}
            src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\AboutMe\texas_am.avif"
            ></StaticImage>
        </div>
    </div>
    </div>
)

export default AboutMeComponent