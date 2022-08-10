import * as React from 'react'
import Header from '../Header/HeaderComponent'
import "./Jumbotron.css"
import { Button } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'
import resume from "./resume.pdf"

console.log(resume)
const Jumbotron = () => (
    <div class="jumbotron_div">
        <Header
        style={{
            gridArea: "3/1",
            display: "grid",
            position: "relative",
        }}></Header>
        <div class="jumbotron"
        style={{
          gridArea: "2/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}>
        <div class="test">
        <h1 class="jumbotron_title">Hi, I'm&nbsp; <span>Ananya</span></h1>
        </div>
        <h2 class="jumbotron_subtitle">I'm a sophomore at Texas A&M University majoring in Computer Science!</h2>
        <Button variant="outlined"
        size="medium"
        href={resume}
        rel="import"
        target="_blank"
        className={"resume_button"}
        style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: -180,
            color: "white",
            backgroundColor: "#F4A733"
        }}
        startIcon={<DescriptionIcon 
        style={{
            fontSize: 15,
        }}/>}>Resume</Button>
        </div>
    </div>
)

export default Jumbotron