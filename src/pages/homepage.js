import * as React from 'react';
import Jumbotron from '../components/Jumbotron/JumbotronComponent';
import {CardComponent} from '../components/Card/CardComponent';
import ExperienceSection from '../components/ExperienceSection/EducationComponent';
import {SkillsComponent} from '../components/SkillsGraph/SkillsComponent';
import { ContactCard } from '../components/Contact/Contact';
import AboutMeComponent from '../components/AboutMe/AboutMeComponent';

export default function HomePage() {
    return (
        <div>
            <Jumbotron></Jumbotron>
            <AboutMeComponent></AboutMeComponent>
            <ExperienceSection></ExperienceSection>
            <h1 class="my_projects">My Projects</h1>
            <div class="cards_container">
                {CardComponent}
            </div>
            <div class="skills_section">
                <h1 class="skill_heading">My Skills</h1>
                <div class="skill_columns">
                {SkillsComponent}
                </div>
            </div>
            <div
            variant = "outline">{ContactCard}</div>
        </div>
    )
}