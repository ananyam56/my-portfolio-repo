import * as React from 'react';
import Jumbotron from '../components/Jumbotron/JumbotronComponent';
import {CardComponent} from '../components/Card/CardComponent';
import EducationSection from '../components/EducationSection/EducationComponent';

export default function HomePage() {
    return (
        <div>
            <Jumbotron></Jumbotron>
            <h1 class="my_projects">My Projects</h1>
            <div class="cards_container">
                {CardComponent}
            </div>
            <EducationSection></EducationSection>
        </div>
    )
}