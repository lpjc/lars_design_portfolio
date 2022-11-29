
import './App.css';
import CardCover from '@mui/joy/CardCover';
import Card from '@mui/joy/Card';
import SimpleImageSlider from "react-simple-image-slider";
import { UilLightbulbAlt } from '@iconscout/react-unicons'
import ReactCurvedText from "react-curved-text";

import logo from './Data/Lars_logo_no_border.png'
import larsPng1 from "./Data/Misc/Artboard 1.png"
import larsPng2 from "./Data/Misc/Artboard 1 copy.png"
import larsPng3 from "./Data/Misc/Artboard 1 copy 2.png"
import MomonaFigma from "./Data/Web Applicaiton/Momona Figma.png"
import cicada1 from "./Data/Phyical Prototyping/Cicada_renders/mouseCicada_skraa.png"
import cicada4 from './Data/Phyical Prototyping/Cicada_renders/cicada_gul_skraa.png'
import cicada3 from "./Data/Phyical Prototyping/Cicada_renders/mouseCicada_side.png"
import cicada2 from "./Data/Phyical Prototyping/Cicada_renders/cicada_gul_side.png"
import arduinoPicture from "./Data/Phyical Prototyping/Arduino bilelde.jpg"
import CNCscreenshot from "./Data/Phyical Prototyping/CNC_machining.png"
import physicalSkills from "./Data/Phyical Prototyping/PhysicalSkills.png"
import digitalSkills from "./Data/Web Applicaiton/digitalskills.png"
import WebcamWizard from "./Data/Web Applicaiton/WebcamWizard.mp4"
import cicadaBeam from "./Data/Phyical Prototyping/closeup_on_beam.JPG"
import catJourney from "./Data/Web Applicaiton/figma cat journey.png"
import kinect from "./Data/Web Applicaiton/Kinect.png"
import kinect2 from "./Data/Web Applicaiton/Kinect 2.png"
import catStill from "./Data/Web Applicaiton/catGif.gif"
import gitQR from "./Data/Web Applicaiton/GitHub_QR.png"
import PCB3dStill from "./Data/Phyical Prototyping/PCB_3d_still.png"
import PCBasGraphic from "./Data/Phyical Prototyping/PCB_nice_graphic.png"
import cicadaPrototype from "./Data/Phyical Prototyping/Prototype Cicada.png"
import PDFlogo from "./Data/PDFLogo.png"
import FigJam1 from "./Data/Web Applicaiton/FigJam_table.png"
import SeaWeed1 from "./Data/Web Applicaiton/Seaweed App.png"
import linkedInLogo from "./Data/linkedIn Logo.png"
import ITULogo from "./Data/Misc/ITU_logo_CPH_UK jpg.jpg"
import sketching from "./Data/Misc/Sketching.jpg"
import AdobeLogo from "./Data/Misc/Tool_logos/Adobe.png"
import ArduinoLogo from "./Data/Misc/Tool_logos/Arduino.png"
import CraftLogo from "./Data/Misc/Tool_logos/Craftsmanship.png"
import CSSLogo from "./Data/Misc/Tool_logos/CSS.png"
import FigmaLogo from "./Data/Misc/Tool_logos/Figma.png"
import FusionLogo from "./Data/Misc/Tool_logos/Fusion360.png"
import HTMLLogo from "./Data/Misc/Tool_logos/HTML.png"
import JavaScriptLogo from "./Data/Misc/Tool_logos/JavaScript.png"
import JiraLogo from "./Data/Misc/Tool_logos/Jira.png"
import ProcessingLogo from "./Data/Misc/Tool_logos/Processing.png"
import ReactLogo from "./Data/Misc/Tool_logos/React.png"
import ScancarFigma from "./Data/Web Applicaiton/ScanCar Prototype Hifi.png"
import WWGif from "./Data/Web Applicaiton/WWgif.gif";
import { width } from '@mui/system';
import { AspectRatio } from '@mui/joy';
import React, { useRef, useState } from 'react';
import zIndex from '@mui/material/styles/zIndex';
import AIPosing from "./Data/Web Applicaiton/AIPosing.png"
import ArcText from 'arc-text';


const svgPath = "M0.5 255C0.5 255 221 5.49972 406 0.999967C591 -3.49978 658.5 150 828 197C997.5 244 1357.81 262.662 1453 255C1614.5 242 1888.83 192.666 2059 161.5"


const toolLogos = [
    AdobeLogo,
    ArduinoLogo,
    CraftLogo,
    CSSLogo,
    FigmaLogo,
    FusionLogo,
    HTMLLogo,
    JavaScriptLogo,
    JiraLogo,
    ProcessingLogo,
    ReactLogo,
  ]

function Breaker(props) {
  return <div className='breaker' style={{ height: props.height }}> BREAKER </div>
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}





const logoDivs = []

function populateLogos(){

  for (let i = 0; i < toolLogos.length; i++) {
    const thisLogo = toolLogos[i];
    logoDivs.push( 
      <div className="motion-demo logo-container"> 
        <img class="tool-logo" src={thisLogo} alt="no logo loaded"/> 
      </div>
    );
  }
}

function App() {

  const [alertCount, setAlertCount] = useState(0)

  function bendtText(){
    const element = new ArcText(document.getElementById('bendyboi'));
  }
 
  function underConstruction(){
    if (alertCount === 0) {
      alert("Under construction, this is live development!")
      setAlertCount(1)    
    }
  }

  return (
    <div className="wrapper">
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
      
      {underConstruction()}   

      <div className='overlay'>
        
        <img className='small-logo' src={linkedInLogo} alt="linkedIn Logo no laoded" onClick={()=>window.open("https://www.linkedin.com/in/larsudraabstegn/", "_blank")}></img>
      
      </div>

      <div id="Frontpage" className='outer-container fullscreen' style={{
        justifyContent: "center"
      }}>
        <div className='inner-container' style={{
          maxHeight: "120px",
          maxWidth: "120px",
          margin: "4%",
          marginRight: "0",
        }}>
          <img className='basic-card graphic' src={logo} alt="logo not loaded"></img>
        </div>
        <div className='inner-container' style={{
          maxHeight: "120px",
          margin: "4%",
          marginLeft: "1%",
          padding: "5px",
          paddingBottom: "0",
          alignItems: "end",
        }}>
          Placeholder Name <br /> Placeholder Contact
        </div>
        <div className='outer-container sidebyside' style={{
          justifySelf: "center",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          height: "400px",
          top: "30%",
          minWidth: "350px",
        }}>
          <div className='inner-container center-align' style={{
            justifySelf: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "50%",
            height: "100%",
            minWidth: "350px",
          }}>
            <button className='test-content button light' onClick={() => scrollToSection("AboutHeader")}> Personality </button>
            <button className='test-content button dark' onClick={() => scrollToSection("ProjectsHeader")}> Projects </button>
          </div>
        </div>

        <div className='layer-image-container'>
          <img className='image image1' alt='no load' src={larsPng1}></img>
          <img className='image image2' alt='no load' src={larsPng2}></img>
          <img className='image image3' alt='no load' src={larsPng3}></img>
        </div>

      </div>

      <div id="Tool Banner" className='outer-container' style={{ position: "relative", width: "100%" }}>
        {populateLogos()}
        {logoDivs}
        <svg preserveAspectRatio="none">
          <path stroke="#fc7474" strokeWidth="220" strokeLinecap="round" fill="#0099ff" fill-opacity="0" d={svgPath}></path>
        </svg>
      </div>

      <Breaker height="1000px" />

      <div id="About Section" className='aboutSection'> 
        <div id='AboutHeader' className='header aboutheader'>
          ABOUT
        </div>
        <Breaker height="200px" />

        <div className='outer-container sidebyside'>

          <div className='inner-container right-align'>
            <div className='test-content text-card column'> 
            <h1> UX '22 </h1>
            <h2> Txt about ambition, adepting, knowledge, buzzwords</h2>
            </div>
          </div>
        
          <div className='inner-container bubble-container'>
            <div className='bubble large bubble-layer1' style={{left: "15%", bottom: "35%"}}> 
              <img className='bubble-image wide-image' alt='no load' src={ScancarFigma}/>
            </div>
            <div className='bubble medium bubble-layer2' style={{left: "40%", bottom: "-65%"}}>
              <img className='bubble-image' alt='no load' src={sketching}/>
            </div>
            <div className='bubble small bubble-layer3' style={{left: "60%", bottom: "10%"}}>
              <img className='bubble-image' style={{objectFit: "contain", backgroundColor:"black"}} 
              alt='no load' src={ITULogo}/>
            </div>
            <div className='bubble small bubble-layer4' style={{left: "0%", bottom: "-30%"}}>
              <img className='bubble-image side2side' alt='no load' src={SeaWeed1}/>
            </div>
          </div>

        </div>



        <Breaker height="600px" />
        <div className='outer-container sidebyside'>
        <div className='inner-container bubble-container'>
            <div className='bubble large bubble-layer1 overflowing' style={{left: "15%", bottom: "35%"}}> 
              <img className='bubble-image wide-image pulse' alt='no load' src={catStill}/>
            </div>
            <div className='bubble medium bubble-layer2' style={{left: "40%", bottom: "-65%"}}>
              <img className='bubble-image' alt='no load' src={catStill}/>
            </div>
            <div className='bubble small bubble-layer3' style={{left: "60%", bottom: "10%"}}>
              <img className='bubble-image' style={{objectFit: "contain", backgroundColor:"black"}} 
              alt='no load' src={ITULogo}/>
            </div>
            <div className='bubble small bubble-layer4' style={{left: "0%", bottom: "-30%"}}>
              <img className='bubble-image' alt='no load' src={kinect}/>
            </div>
          </div>
          <div className='inner-container left-align'>
            <div className='test-content text-card column'> 
              <h1> Unique Profile </h1>
              <h2> Philosphy, UX, UI, Front End programming</h2>
            </div>
          </div>
        </div>
        <Breaker height="600px" />
        <div className='outer-container sidebyside'>

          <div className='inner-container right-align'>
            <div className='test-content text-card column'> 
            <h1> UX '22 </h1>
            <h2> Txt about ambition, adepting, knowledge, buzzwords</h2>
            </div>
          </div>
        
          <div className='inner-container bubble-container'>
            <div className='bubble large bubble-layer1' style={{left: "15%", bottom: "35%"}}> 
              <img className='bubble-image wide-image' alt='no load' src={ScancarFigma}/>
            </div>
            <div className='bubble medium bubble-layer2' style={{left: "40%", bottom: "-65%"}}>
              <img className='bubble-image' alt='no load' src={sketching}/>
            </div>
            <div className='bubble small bubble-layer3' style={{left: "60%", bottom: "10%"}}>
              <img className='bubble-image' style={{objectFit: "contain", backgroundColor:"black"}} 
              alt='no load' src={ITULogo}/>
            </div>
            <div className='bubble small bubble-layer4' style={{left: "0%", bottom: "-30%"}}>
              <img className='bubble-image side2side' alt='no load' src={SeaWeed1}/>
            </div>
          </div>

        </div>
      </div>

      
      <Breaker height="800px" />
      <div id='ProjectsHeader' className='header aboutheader'>
          PROJECTS
        </div>
      <div className='outer-container sidebyside'>

        <div className='project-card-left column'>
          <h1>Webcam Wizard</h1>
          <div className='linebreaker'></div>
          <h2>Prototyping an AI-powered web application</h2>
        </div>

        <div className='inner-container center-align background'>
          <img className="shadow-image max-half" src={WWGif} alt="GIF not supported"></img>
        </div>
      </div>
      <Breaker height="400px" />
      <div className='outer-container sidebyside'>
        <div className='inner-container center-align bubble-container3'>
          <div className='bubble medium nofilter border' style={{top: "-40%"}}>
       
          </div>
        </div>

        
        <div className='inner-container center-align bubble-container3 '> 
          <div className='bubble medium nofilter border' style={{top: "30%"}}>
             Iterate
          </div>
        </div>
       
        <div className='inner-container center-align bubble-container3'> 
          <div className='bubble medium nofilter border' style={{top: "-40%", zIndex:"2"}}>
        
             Design Growth 
          </div>
          <div className='bubble large nofilter pulse' style={{top: "-60%", opacity:"60%"}}/>
          <div className='bubble x-large nofilter pulse' style={{top: "-90%", opacity:"30%"}}/>

        </div>
      </div>
      <Breaker height="400px" />
      <div className='outer-container'>
        <div className='project-card-left column'>
          <h1>Cicada</h1>
          <div className='linebreaker'></div>
          <h2>Opensource audio graffiti</h2>
        </div>
        <div className='inner-container center-align background'>
          <img className="shadow-image max-half" src={cicadaPrototype} alt="GIF not supported"></img>
        </div>
      </div>
      <Breaker height="200px" />
      <div className='outer-container'>
        Double Diamnd here
      </div>
      <Breaker height="100px" />
      <div className='outer-container sidebyside'>
        <div className='inner-container text-card right-align'>Tekst </div>
        <div className='mosaic-container row'>
          <div className='mosaic-container column'>
            <div className='inner-container center-align'> 
              <img src={cicada1} className="bubble-image"></img>
            </div>
            <div className='inner-container center-align'> 
              <img src={cicada4} className="bubble-image"></img>
            </div>
            <div className='inner-container center-align'>
              <img src={cicada2} className="bubble-image"></img>
            </div>
          </div>
          <div className='inner-container center-align'>
              <img src={cicadaBeam} className="bubble-image"></img>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
