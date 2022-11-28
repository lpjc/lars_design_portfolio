
import './App.css';
import CardCover from '@mui/joy/CardCover';
import Card from '@mui/joy/Card';
import SimpleImageSlider from "react-simple-image-slider";

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
import catStill from "./Data/Web Applicaiton/Cat_App_still.png"
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

import { width } from '@mui/system';
import { AspectRatio } from '@mui/joy';
import React, { useRef, useState } from 'react';

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
 
  function underConstruction(){
    if (alertCount === 0) {
      alert("Under construction, this is live development!")
      setAlertCount(1)    
    }
  }

  return (
    <div className="wrapper">
      {underConstruction()}
      <div id="frontpage" className='outer-container fullscreen' style={{
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
      <div id="toolBanner" className='outer-container' style={{ position: "relative", width: "100%" }}>
        {populateLogos()}
        {logoDivs}
        <svg preserveAspectRatio="none">
          <path stroke="#fc7474" strokeWidth="220" strokeLinecap="round" fill="#0099ff" fill-opacity="0" d={svgPath}></path>
        </svg>
      </div>

      <Breaker height="1000px" />

      <div className='aboutSection'> 
        <div id='AboutHeader' className='header aboutheader'>
          ABOUT
        </div>


        <div className='outer-container sidebyside'>

          <div className='inner-container right-align'>
            <div className='test-content'> Tekst </div>
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
          <div className='inner-container left-align'>
            <div className='test-content'> Tekst </div>
          </div>
        </div>
        <Breaker height="600px" />
        <div className='outer-container sidebyside'>
          <div className='inner-container right-align'>
            <div className='test-content'> Tekst </div>
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
      <Breaker height="400px" />
      <div id='ProjectsHeader' className='header aboutheader'>
          PROJECTS
        </div>
      <div className='outer-container'>
        Project Card
      </div>
      <div className='outer-container sidebyside'>
        <div className='inner-container right-align'> Tekst </div>
        <div className='inner-container center-align'> Billde/video</div>
      </div>
      <Breaker height="100px" />
      <div className='outer-container sidebyside'>
        <div className='inner-container center-align'> Billde/video</div>
        <div className='inner-container center-align'> Billde/video</div>
        <div className='inner-container center-align'> Billde/video</div>
      </div>
      <Breaker height="100px" />
      <div className='outer-container'>
        Project Card
      </div>
      <Breaker height="100px" />
      <div id="scroll2me" className='outer-container sidebyside'>
        <div className='inner-container right-align'>Tekst </div>
        <div className='mosaic-container row'>
          <div className='mosaic-container column'>
            <div className='inner-container center-align'> Billde/video</div>
            <div className='inner-container center-align'> Billde/video</div>
            <div className='inner-container center-align'> Billde/video</div>
          </div>
          <div className='inner-container center-align'> Billde/video</div>
        </div>
      </div>
    </div>

  );
}

export default App;
