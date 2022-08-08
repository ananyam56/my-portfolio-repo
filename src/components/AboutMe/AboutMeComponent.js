import * as React from 'react'
import "./aboutme.css"
import { StaticImage } from 'gatsby-plugin-image'

const AboutMeComponent = () => (
    <div>
    <div class="education_section">
    <div class="education_content">
            <h1 class="education_title">About Me</h1>
                <ul class="education_bullets">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> 
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>           
                </ul>
        </div>
        <div class="education_image">
            <StaticImage className = {"texasam_image"}
            src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\EducationSection\texasam.avif"
            ></StaticImage>
        </div>
    </div>
    </div>
)

export default AboutMeComponent