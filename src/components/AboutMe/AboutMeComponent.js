import * as React from 'react'
import "./aboutme.css"
import { StaticImage } from 'gatsby-plugin-image'

const AboutMeComponent = () => (
    <div>
    <div class="education_section">
    <div class="education_content">
            <h1 class="education_title">About Me</h1>
                <ul class="education_bullets">
                    <li>Major in Computer Science at Texas A&M University</li> 
                    <li>Cumulative GPR: 4.0/4.0</li>
                    <li>Dean's List 2021-2022</li>
                    <li>1st rank in AS & A Levels in international school in Bangalore, India</li>
                    <li>6/8 A*s in IGCSE Curriculum</li>           
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