import * as React from 'react';
import Jumbotron from '../components/Jumbotron/JumbotronComponent';
import {CardComponent} from '../components/Card/CardComponent';
import ExperienceSection from '../components/ExperienceSection/EducationComponent';
import {SkillsComponent} from '../components/SkillsGraph/SkillsComponent';
import { ContactCard } from '../components/Contact/Contact';
import AboutMeComponent from '../components/AboutMe/AboutMeComponent';
import { StaticImage } from 'gatsby-plugin-image';

export default function HomePage() {
    return (
        <div>
            <Jumbotron></Jumbotron>
            <AboutMeComponent></AboutMeComponent>
            <ExperienceSection></ExperienceSection>
            <div class="projects_line">
            <StaticImage 
            className = {"projects_image"}
            src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\Card\Ananya Maddali-1 (1).png"></StaticImage>&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 class="my_projects">My <span>&nbsp;Projects</span></h1>
            </div>
            <div class="cards_container">
                {CardComponent}
            </div>
            <div class="skills_section">
            <div class="skills_line">
            <StaticImage 
            className = {"skills_image"}
            src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\SkillsGraph\Ananya Maddali-1 (2) (1).png"></StaticImage>&nbsp;&nbsp;&nbsp;&nbsp;
                <h1 class="skill_heading">My <span>&nbsp;Skills</span></h1>
                </div>
                <div class="skill_columns">
                {SkillsComponent}
                </div>
            </div>
            <div
            variant = "outline">{ContactCard}</div>
        </div>
    )
}