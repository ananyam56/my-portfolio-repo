import * as React from 'react'
import "./Experience.css"
import { Stack } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'

const ExperienceSection = () => (
    <div class="container_3">
    <div id = "section2" class="experience_section">
        <div class="experience_content">
            <div class="experience_line">
        <StaticImage 
            className = {"experience_image"}
            src="../Card/Ananya Maddali-1 (1).png"></StaticImage>&nbsp;&nbsp;&nbsp;&nbsp;<h1 class="experience_title">My <span>&nbsp;Experience</span></h1>
            </div>
            <div class="stacks_container">
            <Stack 
            spacing={4}
            sx={{borderRadius: 2 }}>
                <div class="stack_intern">
                    <h2 class="stack_heading">Internship at Spruce Technology</h2>
                    <h3 class="stack_subheading">Web Developer, June - August 2022</h3>
                    <ul class="stack_bullets">
                        <li>Created and updated webpages for clients using <span>HTML, PHP, CSS, and JavaScript</span></li>
                        <li>Created and updated <span>backend server code</span> to develop functionality for clients</li>
                        <li>Used the content management system <span>WordPress</span></li>
                    </ul>
                </div>
                <div class="stack_research">
                    <h2 class="stack_heading">Research under Indian Institute of Science Graduates</h2>
                        <h3 class="stack_subheading">September 2020 - August 2021</h3>
                        <ul class="stack_bullets">
                            <li>Engaged in a high school project about <span>Bangalore’s water crisis</span> under IISc graduates in the organization Seed2Sapling </li>
                            <li>Discussed with water conservation experts in the area </li>
                            <li>Studied <span>rainwater harvesting</span> and <span>artificial recharge</span> techniques </li>
                            <li>Conducted surveys</li>
                        </ul>
                </div>
            </Stack>
            </div>
        </div>
    </div>
    </div>
)

export default ExperienceSection