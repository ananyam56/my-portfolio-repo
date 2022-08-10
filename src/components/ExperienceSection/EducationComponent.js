import * as React from 'react'
import "./Experience.css"
import { Stack } from '@mui/material'

const ExperienceSection = () => (
    <div>
    <div class="experience_section">
        <div class="experience_content">
            <h1 class="experience_title">My Experience</h1>
            <div class="stacks_container">
            <Stack 
            spacing={4}
            sx={{borderRadius: 2 }}>
                <div class="stack_intern">
                    <h2 class="stack_heading">Internship at Spruce Technology</h2>
                    <h3 class="stack_subheading">Web Developer, June - August 2022</h3>
                    <ul class="stack_bullets">
                        <li>Created and updated webpages for clients using HTML, PHP, CSS, and JavaScript</li>
                        <li>Created and updated backend server code to develop functionality for clients</li>
                        <li>Used the content management system WordPress</li>
                    </ul>
                </div>
                <div class="stack_research">
                    <h2 class="stack_heading">Research under Indian Institute of Science Graduates</h2>
                        <h3 class="stack_subheading">September 2020 - August 2021</h3>
                        <ul class="stack_bullets">
                            <li>Engaged in a high school project about Bangalore’s water crisis under IISc graduates in the organization Seed2Sapling </li>
                            <li>Discussed with water conservation experts in the area </li>
                            <li>Studied rainwater harvesting and artificial recharge techniques </li>
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