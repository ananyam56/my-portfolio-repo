import * as React from 'react'
import "./skills.css"
import { StaticImage } from 'gatsby-plugin-image'

const SkillsComponent = () => (
    <div class="skills_section">
        <h1 class="skill_heading">My Skills</h1>
        <StaticImage 
        className={"graph_style"}
        src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\SkillsGraph\graph.png"></StaticImage>
    </div>
)

export default SkillsComponent