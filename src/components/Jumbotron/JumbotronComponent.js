import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Jumbotron = () => (
    <div style={{display: "grid"}}>
        <StaticImage 
        style={{
            gridArea: "1/1",
        }}
        layout="fullwidth"
        formats={["auto", "webp", "avif"]}
        src="C:\Users\shant\portfolio\gatsby-starter-default\src\images\filler-backdrop.jpeg"
        />
    </div>
)

export default Jumbotron