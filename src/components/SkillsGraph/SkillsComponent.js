import * as React from 'react'
import "./skills.css"
import skillscontent from './SkillsContent' 

export const SkillsComponent = skillscontent.map((skill) => 
    <div class="skill_style">
    {skill.image}
    <h1 class="skill_title">{skill.title}</h1>
    <p class="skill_content">{skill.content}</p>
    </div>
)
