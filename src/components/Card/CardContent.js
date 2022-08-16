import { StaticImage } from "gatsby-plugin-image"
import * as React from 'react'
import slides from "./slides.pdf"
import { Icon } from '@iconify/react';

const cardcontent = [
    {
        id: 1,
        title: "Python Project",
        date: "December 2021",
        content: "I performed an engineering analysis of energy consumption around the world using various python packages such as Numpy and Matplotlib as a final project during my freshman year!",
        image: <StaticImage src="./Capture.PNG" className="project_image"></StaticImage>,
    },
    {
        id: 2,
        title: "Stanford's Inspirit AI",
        date: "July - August 2020",
        content: "I have programming experience utilizing linear regression, natural language processing, and neural networks through this summer workshop. The final project involved combining criminal justice and AI to predict the probability of defendants recommitting crimes; analyzed models involving Random Forests, Logistic Regression, and SQL ",
        image: <StaticImage src="./Capture1.PNG" className="project_image"></StaticImage>,
        link: slides,
    },
    {
        id: 3,
        title: "Spruce Technology Website",
        date: "June - August 2022",
        content: "I worked on a few components for the Spruce Technology website through my internship. I used React, JavaScript, HTML, CSS, and Divi for these modules.",
        image: <StaticImage  src="./Capture2.jpg" className = "project_image"></StaticImage>,
        icon1: <Icon className="project_icon" icon="bxl:invision" color="#f4a733" width="35" height="35" />,
        icon2: <Icon className="project_icon" icon="la:stripe-s" color="#f4a733" width="35" height="35" />,
        icon1link: "https://projects.invisionapp.com/d/main?origin=v7#/projects/prototypes/21353026",
        icon2link: "https://www.sprucetech.com/",
    },
    {
        id: 4,
        title: "Training Website - News Blog",
        date: "June - August 2022",
        content: "I used WordPress, Divi, CSS, and HTML for this website.",
        image: <StaticImage src="./Capture3.PNG" className = "project_image"></StaticImage>,
        link: "http://sprucetech.dev.sprucetech.com/",
    },
    {
        id: 5,
        title: "Real Estate Website",
        date: "June - August 2022",
        content: "I used WordPress, HTML, and CSS for this website.",
        image: <StaticImage src="./realestatewebsite.PNG" className="project_image"></StaticImage>,
        link: "https://github.com/ananyam56/realestatewebsite",
    },
    {
        id: 6,
        title: "Blog Website",
        date: "June - August 2022",
        content: "I used WordPress, HTML, and CSS for this website.",
        image: <StaticImage src="./blogwebsite.PNG" className="project_image"></StaticImage>,
        link: "https://github.com/ananyam56/blogwebsite",
    },
    {
        id: 7,
        title: "Corporate Website",
        date: "June - August 2022",
        content: "I used WordPress, HTML, and CSS for this website.",
        image: <StaticImage src="./corporatewebsite.PNG" className="project_image"></StaticImage>,
        link: "https://github.com/ananyam56/corporatewebsite",
    }
]

export default cardcontent