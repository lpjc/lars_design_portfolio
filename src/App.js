
import './App.css';
import CardCover from '@mui/joy/CardCover';
import Card from '@mui/joy/Card';
import SimpleImageSlider from "react-simple-image-slider";

import logo from './Data/Lars_logo_no_border.png'
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

const cicadaArray =[
  cicada1, cicada2, cicada3, cicada4
]
/* 
  <div className='small basic-card borderless no-background'style={{border: 'solid 5px '+ myColor}}>
    <Graphic graphic={CNCscreenshot}/>
  </div>
*/
const PDFLink = "https://secureservercdn.net/160.153.138.243/8z7.037.myftpupload.com/wp-content/uploads/2022/10/Portfolio2022-as-pdf-2022-HQ.pdf"
const linkedINLink = "https://www.linkedin.com/in/larsudraabstegn/"
const myColor = " #e576b1'"

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

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
          Logo
        </div>
        <div className='inner-container' style={{
          maxHeight: "120px",
          margin: "4%",
          marginLeft: "1%",
          padding: "5px"
        }}>
         Text
        </div>
        <div className='inner-container'style={{
            justifySelf: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "absolute",
            height: "400px",
            top: "30%",
            minWidth: "350px",
        }}>
        <button className='test-content button light' > Personality </button>
        <button className='test-content button dark' > Projects </button>
        </div>
      </div>
      <div className='banner'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" width="100%" height="100%">
          <path width="100%" height="100%" stroke="black" stroke-width="20" stroke-linecap="round" fill="#0099ff" fill-opacity="0" preserveAspectRatio="none" 
            d="M0,256L48,224C96,192,192,128,288,128C384,128,480,192,576,229.3C672,267,768,277,864,288C960,299,1056,309,1152,304C1248,299,1344,277,1392,266.7L1440,256 L1392Z"></path>
        </svg>
        
      </div>
      <div className='outer-container sidebyside'>
        <div className='inner-container right-align'>
          <div className='test-content'></div>
        </div>
        <div className='inner-container center-align'>
          <div className='test-content'></div>
        </div>
      </div>

      <div className='outer-container sidebyside'>
        <div className='inner-container center-align'>
          <div className='test-content'></div>
        </div>
        <div className='inner-container left-align'>
          <div className='test-content'></div>
        </div>
      </div>

      <div className='outer-container sidebyside'>
        <div className='inner-container right-align'>
          <div className='test-content'></div>
        </div>
        <div className='inner-container center-align'>
          <div className='test-content'></div>
        </div>
      </div>

      <div className='outer-container'></div>

    </div>

  );
}

export default App;
