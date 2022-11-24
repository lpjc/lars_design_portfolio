
import './App.css';
import CardCover from '@mui/joy/CardCover';
import Card from '@mui/joy/Card';
import SimpleImageSlider from "react-simple-image-slider";

import logo from './Data/Lars_logo_no_border.png'
import larsPng1 from "./Data/Misc/Artboard 1.png"
import larsPng2 from "./Data/Misc/Artboard 1 copy.png"
import larsPng3 from "./Data/Misc/Artboard 1 copy 2.png"
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
import linkedInLogo from "./Data/linkedIn Logo.png"
import { width } from '@mui/system';
import { AspectRatio } from '@mui/joy';

const PNGImages = [

]

const svgPath = "M0.5 255C0.5 255 221 5.49972 406 0.999967C591 -3.49978 658.5 150 828 197C997.5 244 1357.81 262.662 1453 255C1614.5 242 1888.83 192.666 2059 161.5"

const toolLogos = [
  linkedInLogo,
  PDFlogo,
]
const layeredImages = [


]

function App() {
  return (
    <div className="wrapper">

      <div className='outer-container fullscreen'style={{
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
          padding: "5px"
        }}>
         Her står der tekst
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
          <div className='inner-container center-align'style={{
              justifySelf: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "50%",
              height: "100%",

              minWidth: "350px",
          }}>
            <button className='test-content button light' > Personality </button>
            <button className='test-content button dark' > Projects </button>
          </div>
          <div className='inner-container center-align'style={{
              justifySelf: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "50%",
              height: "100%",
              top: "30%",
              minWidth: "350px",
          }}>

          </div>

        </div>
        <div className='layer-image-container'>
              <img className='image image1' alt='no load' src={larsPng1}></img>
              <img className='image image2' alt='no load' src={larsPng2}></img>
              <img className='image image3' alt='no load' src={larsPng3}></img>
            </div>

      </div>   
      <div className='outer-container' style={{position: "relative", width: "100%"}}>
          <div className="motion-demo"></div>
          <div className="motion-demo"></div>
          <div className="motion-demo"></div>
          <div className="motion-demo"></div>
         <svg preserveAspectRatio="none">
           <path stroke="black" stroke-width="220" stroke-linecap="round" fill="#0099ff" fill-opacity="0" d={svgPath}></path>
         </svg>
 
         </div>     

      <div className='outer-container'>
        Breaker
      </div>

      <div className='outer-container'>
        Header 
      </div>

      <div className='outer-container sidebyside'>
        <div className='inner-container right-align'>
          <div className='test-content'> Tekst </div>
        </div>
        <div className='inner-container center-align'>
          <div className='test-content'> Grafik </div>
        </div>
      </div>
      <div className='outer-container'>
        Breaker
      </div>
      <div className='outer-container sidebyside'>
        <div className='inner-container center-align'>
          <div className='test-content'> Grafi </div>
        </div>
        <div className='inner-container left-align'>
          <div className='test-content'> Tekst </div>
        </div>
      </div>
      <div className='outer-container'>
        Breaker
      </div>
      <div className='outer-container sidebyside'>
        <div className='inner-container right-align'>
          <div className='test-content'> Tekst </div>
        </div>
        <div className='inner-container center-align'>
          <div className='test-content'> Grafik </div>
        </div>
      </div>
      <div className='outer-container'>
        Breaker
      </div>
      <div className='outer-container'>
        Header
      </div>
      <div className='outer-container'>
        Project Card
      </div>
      <div className='outer-container sidebyside'>
        <div className='inner-container right-align'> Tekst </div>
        <div className='inner-container center-align'> Billde/video</div>
      </div>
      <div className='outer-container'>
        Breaker
      </div>
      <div className='outer-container sidebyside'>
        <div className='inner-container center-align'> Billde/video</div>
        <div className='inner-container center-align'> Billde/video</div>
        <div className='inner-container center-align'> Billde/video</div>
      </div>
      <div className='outer-container'>
        Breaker
      </div>
      <div className='outer-container'>
        Project Card
      </div>
      <div className='outer-container'>
        Breaker
      </div>
      <div className='outer-container sidebyside'>
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
