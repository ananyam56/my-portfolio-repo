import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import "./Jumbotron.css"

const Jumbotron = () => (
    <div class="jumbotron_div">
        <StaticImage 
        src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\Jumbotron\back.avif"
        style={{
            gridArea: "1/1",
            maxHeight: 900,
        }}
        layout="fullWidth"
        />
        <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}>
        <h1 class="jumbotron_title">Hi, I'm Ananya</h1>
        <h2 class="jumbotron_subtitle">I'm a sophomore at Texas A&M University majoring in Computer Science!</h2>
        </div>
    </div>
)

export default Jumbotron