import { StaticImage } from "gatsby-plugin-image"
import * as React from 'react'

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
        image: <StaticImage src="./Capture1.png" className="project_image"></StaticImage>,
    },
    {
        id: 3,
        title: "Spruce Technology Website",
        date: "June - August 2022",
        content: "I worked on a few components for the Spruce Technology website https://www.sprucetech.com/ through my internship. I used React, JavaScript, HTML, and CSS for these modules.",
        image: <StaticImage  src="./Capture2.jpg" className = "project_image"></StaticImage>,
    }
]

export default cardcontent