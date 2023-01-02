
import './App.css';
import CardCover from '@mui/joy/CardCover';
import Card from '@mui/joy/Card';
import SimpleImageSlider from "react-simple-image-slider";
import LeaderLine from 'leader-line-new';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { width } from '@mui/system';
import { AspectRatio } from '@mui/joy';
import React, { useRef, useState } from 'react';
import zIndex from '@mui/material/styles/zIndex';
import AIPosing from "./Data/Web Applicaiton/AIPosing.png"
import ArcText from 'arc-text';
import { Analytics } from '@vercel/analytics/react';

import seaweedMockups from "./Data/Web Applicaiton/Seaweed.png"
import umbraco10 from "./Data/Web Applicaiton/Umbraco10.png"
import adeccosite1 from "./Data/Web Applicaiton/Adeccosite1.png"
import cicadaOnStairs from "./Data/Phyical Prototyping/P1070048.JPG"
import cicadaOnPost from "./Data/Phyical Prototyping/DSCF1499.JPG"
import processWorkshop from "./Data/Misc/Process.jpg"
import fishProcess from "./Data/Misc/Process/Fish-Process.png"
import figmaThing from "./Data/Web Applicaiton/Momona Figma.png"
import larsChef from "./Data/Misc/Lars Final (1 of 1).jpg"
import neckerCube from './Data/Misc/Necker_cube.svg.png'
import logo from './Data/Lars_logo_no_border.png'
import larsSnakker from "./Data/Misc/Lars_taler.JPG"
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
import ideationProcess1 from "./Data/Misc/Process/Screenshot 2022-12-02 at 14.03.58.png"
import ideationProcess2 from "./Data/Misc/Process/Screenshot 2022-12-02 at 14.04.26.png"

const svgPath = "M0.5 255C0.5 255 221 5.49972 406 0.999967C591 -3.49978 658.5 150 828 197C997.5 244 1357.81 262.662 1453 255C1614.5 242 1888.83 192.666 2059 161.5"

function Slideshow(props) {
  console.log('content card loaded');
  return (
    <Card component="li" sx={{ "--Card-radius": "34px", minWidth: 350, flexGrow: props.flex }}>
      <CardCover>
        <SimpleImageSlider
          width={'100%'}
          height={'100%'}
          images={props.imageArray}
          autoPlay={true}
          autoPlayDelay={0.1}
          slideDuration={3}
        />
      </CardCover>
    </Card>
  )
}

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

const ideationPictures = [ideationProcess1, ideationProcess2,
]

function Breaker(props) {
  return <div className='breaker' style={{ height: props.height }}> BREAKER {props.height} </div>
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

const logoDivs = []

function populateLogos() {
  for (let i = 0; i < toolLogos.length; i++) {
    const thisLogo = toolLogos[i];
    logoDivs.push(
      <div className="motion-demo logo-container">
        <img class="tool-logo" src={thisLogo} alt="no logo loaded" />
      </div>
    );
  }
}

const larsLayers = {

}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var startElement = document.getElementById("startBubble"),
      middleElement = document.getElementById("middleBubble"),
      endElement = document.getElementById("endBubble");

    new LeaderLine(startElement, middleElement, { color: '#fc7474', size: 20, startSocket: 'bottom', endSocket: 'left', endPlug: 'arrow3', dash: { animation: true } })
    new LeaderLine(middleElement, startElement, { color: '#fc7474', size: 20, startSocket: 'top', endSocket: 'right', endPlug: 'arrow3', dash: { animation: true } })
    new LeaderLine(middleElement, endElement, { color: '#fc7474', size: 20, startSocket: 'right', endPlug: 'arrow3', dash: { animation: true } })
  }, 3000);

}, false);


function App() {

  const [alertCount, setAlertCount] = useState(0)
  function underConstruction() {
    if (alertCount === 0) {
      alert("This is a development-build: just a peak, and not mobile friendly just yet")
      setAlertCount(1)
    }
  }


  if(window.innerWidth < 900 || window.innerHeight < 800 ){
    return (
      <div>
        Not suited for mobile <br/>     
        Visit again on desktop, or find me on <a href='https://www.linkedin.com/in/larsudraabstegn/'>LinkedIn</a>.<br/>
        Mobile is in the works, ETA feb 2023. 
      </div>
    )
  }

  
  return (
    <div className="wrapper">
      <ParallaxProvider>
        <Analytics />

        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />

        {underConstruction()}

        <div className='overlay'>
          <img className='small-logo' src={linkedInLogo} style={{ backgroundColor: "white", borderRadius: "17%" }} alt="linkedIn Logo no laoded" onClick={() => window.open("https://www.linkedin.com/in/larsudraabstegn/", "_blank")}></img>
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
          }}><h1>
              Lars Clausen // placeholder font
            </h1>

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
            <img className='layer-image image1' alt='no load' src={larsPng1}></img>
            <img className='layer-image image2' alt='no load' src={larsPng2}></img>
            <img className='layer-image image3' alt='no load' src={larsPng3}></img>
          </div>

        </div>

        <div id="Tool Banner" className='outer-container' style={{ position: "relative", width: "100%" }}>
          {populateLogos()}
          {logoDivs}
          <svg preserveAspectRatio="none">
            <path stroke="#fc7474" strokeWidth="220" strokeLinecap="round" fill="#0099ff" fill-opacity="0" d={svgPath}></path>
          </svg>
        </div>
        <Breaker height="800px" />
        <div id="About Section" className='aboutSection'>
          <div id='AboutHeader' className='header aboutheader'>
            ABOUT
          </div>


          <div className='outer-container sidebyside'>

            <div className='inner-container right-align'>
              <div style={{ textAlign: "right", paddingRight: "15px" }}>
                <h1 style={{ color: "#FDE9D8" }}>
                  UX '22
                </h1>
                <h2>
                  Promoting modern Design Thinking <br />
                  by ideating, prototyping and testing creativly.
                </h2>
              </div>
            </div>

            <div className='inner-container reveal bubble-container'>
              <div className='bubble large bubble-layer1' style={{ left: "15%", bottom: "35%" }}>
                <img className='bubble-image wide-image' alt='no load' src={ScancarFigma} />
              </div>
              <div className='bubble medium bubble-layer2' style={{ left: "40%", bottom: "-65%" }}>
                <img className='bubble-image' alt='no load' src={sketching} />
              </div>
              <div className='bubble small bubble-layer3' style={{ left: "60%", bottom: "10%" }}>
                <img className='bubble-image'
                  alt='no load' src={ideationProcess1} />
              </div>
              <div className='bubble small bubble-layer4' style={{ left: "0%", bottom: "-30%" }}>
                <img className='bubble-image' style={{ objectFit: "contain", backgroundColor: "black" }}
                  alt='no load' src={ITULogo} />
              </div>
            </div>
          </div>

          <Breaker height="700px" />

          <div className='outer-container sidebyside'>

            <div className='inner-container bubble-container'>
              <div className='bubble large bubble-layer1 overflowing' style={{ left: "15%", bottom: "5%" }}>
                <img className='bubble-image wide-image ' alt='no load' src={catStill} />
              </div>
              <div className='bubble medium bubble-layer2 ' style={{ left: "45%", bottom: "-95%", zIndex: "10", overflow: "visible" }}>
                <img className='bubble-image pulse' alt='no load' src={PCB3dStill} />
              </div>
              <div className='bubble small bubble-layer3' style={{ left: "55%", bottom: "40%" }}>
                <img className='bubble-image wide-image' style={{ objectFit: "contain", backgroundColor: "#66e9bf", transform: "scaleX(-1)" }}
                  alt='no load' src={cicada1} />
              </div>
              <div className='bubble medium bubble-layer1 ' style={{ left: "5%", bottom: "115%", zIndex: "0" }}>
                <img className='bubble-image' alt='no load' src={cicadaPrototype} />
              </div>
              <div className='bubble small bubble-layer2 ' style={{ left: "75%", bottom: "-40%", zIndex: "0" }}>
                <img className='bubble-image' alt='no load' src={CNCscreenshot} />
              </div>
              <div className='bubble small bubble-layer3' style={{ left: "65%", bottom: "135%", zIndex: "0" }}>
                <img className='bubble-image wide-image ' alt='no load' src={figmaThing} />
              </div>
              <div className='bubble medium bubble-layer1' style={{ left: "10%", bottom: "-70%" }}>
                <img className='bubble-image' alt='no load' src={kinect} />
              </div>
            </div>
            <div className='inner-container left-align'>
              <div>
                <h1 style={{ color: "#5C3131" }}> Digital, Hybrid & Physical </h1>
                <h2>
                  Capable in mediums across the spectrum
                  <br />
                  Always looking to expand my pool of knowledge
                </h2>
              </div>
            </div>
          </div>
          <Breaker height="600px" />
          <div className='outer-container sidebyside'>

            <div className='inner-container right-align'>
              <div style={{ textAlign: "right" }}>
                <h1 >
                  Unique Profile
                </h1>
                <h2>
                  Design, philosophy and commuincation.
                </h2>
              </div>
            </div>

            <div className='inner-container bubble-container'>
              <div className='bubble medium ' style={{ height: "100%", left: "68%", bottom: "0%", zIndex: "10" }}>
                <img className='bubble-image' alt='no load' src={larsSnakker} />
              </div>
              <div className='bubble medium' style={{ height: "100%", left: "34%", bottom: "0%" }}>
                <img className='bubble-image' alt='no load' src={neckerCube} style={{ height: "85%" }} />
              </div>
              <div className='bubble medium ' style={{ height: "100%", left: "0%", bottom: "0%" }}>
                <img className='bubble-image' alt='no load' src={processWorkshop} />
              </div>
            </div>

          </div>
        </div>

        <Breaker height="800px" />

        <div id='ProjectsHeader' className='header projectsheader row'>
          Project<h1 style={{ textShadow: "none", marginLeft: "20px" }}> highlights</h1>
        </div>

        <Breaker height="50px" />

        <div className='project-row'>
          <div className='project-card'>

            <div>
              <h1> Webcam Wizard </h1>
              <div className='linebreaker'></div>
              <h2> Proof-of-concept: AI-powered web application </h2>
            </div>

            <div className='image-row'>
              <img className='full-project-image ' src={WWGif} alt="GIF not supported"></img>
            </div>

          </div>

          <div className='project-card'>

            <div>
              <h1> Cweed</h1>
              <div className='linebreaker'></div>
              <h2> High fidelity prototyping and user enagement </h2>
            </div>

            <div className='image-row'>
              <img className='full-project-image' src={seaweedMockups} alt="GIF not supported"></img>
            </div>

          </div>
        </div>

        <Breaker height="50px"/>

        <div className='project-row'>
        <div className='project-card'>
            <div>
              <h1>Cicada</h1>
              <div className='linebreaker'></div>
              <h2> Audio graffiti designed for open source manufacturing </h2>
            </div>

            <div className='image-row'>
              <img className='half-project-image' src={cicadaOnPost} alt="GIF not supported"></img>
              <img className='half-project-image' src={cicadaOnStairs} alt="GIF not supported" style={{}}></img>
            </div>
          </div>
          <div className='project-card'>
            <div>
              <h1> Adecco.dk CMS </h1>
              <div className='linebreaker'></div>
              <h2> Umbraco10, UX Writing and Design QC </h2>
            </div>

            <div className='image-row'>
              <img className='half-project-image' style={{translate:""}} src={adeccosite1} alt="GIF not supported"></img>
              <img className='half-project-image' src={umbraco10} alt="GIF not supported"></img>
            </div>
          </div>
        </div>
        <Breaker height="450px" />
 

 <div className='outer-container sidebyside'>
   <div className='inner-container center-align bubble-container3'>
     <div className='image-container'>
       <img className="standard-image" src={ideationProcess2} alt="GIF not supported"></img>
     </div>
     <div id="startBubble" className='text-bubble nofilter border' style={{ textAlign: "center", top: "-40%" }}>
       Ideate & <br /> Collaborate
     </div>
   </div>


   <div className='inner-container center-align bubble-container3'>
     <div className='image-container'>
       <img className="standard-image" src={cicadaPrototype} alt="GIF not supported"></img>
     </div>
     <div id="middleBubble" className='text-bubble nofilter border' style={{ textAlign: "center", top: "70%" }}>
       Prototype <br /> & Test
     </div>
   </div>

   <div className='inner-container center-align bubble-container3'>
     <div className='image-container'>
       <img className="standard-image" src={cicadaBeam} alt="GIF not supported"></img>
     </div>
     <div id="endBubble" className='text-bubble nofilter border' style={{ top: "-40%", zIndex: "2" }}>
       Design Growth
     </div>
     <div className='text-bubble nofilter pulse2' style={{ top: "-40%", zIndex: "1" }} />

   </div>
 </div>

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

      </ParallaxProvider>
    </div>
  );

}

export default App;
