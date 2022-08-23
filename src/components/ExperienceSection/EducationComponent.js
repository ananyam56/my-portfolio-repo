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
                        <li>Transformed <span>Invision</span> prototypes into reusable <span>WordPress</span> page templates</li>
                        <li>Troubleshooted web applications, diagnosed, and fixed bugs </li>
                        <li>Created reusable components for the Spruce website using <span>Divi, React, PHP, and JavaScript</span> for admin interfaces</li>
                        <li>Used <span>Material UI</span> to design responsive components such as buttons and cards</li>
                        <li>Developed web components in an agile environment</li>
                        <li>Participated in daily stand-ups, bi-weekly sprint retrospectives and plannings</li>
                        <li>Created a news blog website, real estate website, blog website, and a corporate website as part of training</li>
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