
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

// Create the observer
const observer = new IntersectionObserver(entries => {
// Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add(' pulse');
    }
  });
});

function Slideshow(props) {
  console.log('content card loaded');
  return (
    <Card component="li" sx={{"--Card-radius": "34px", minWidth: 350, flexGrow: props.flex }}>
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

function Videocard(props) {
  console.log('content card loaded');
  return (
    <Card component="li" sx={{"--Card-radius": "3px", minWidth: 350, flexGrow: 1}}>
      <CardCover>
        <video autoPlay loop muted>
          <source src={props.video} type="video/mp4" />
        </video>
      </CardCover>
    </Card>
  )
}

function Graphic(props){
  return(
    <img src={props.graphic} alt={'no load'} style={{display: 'flex', width: "inherit", height:"inherit"}}/>
  )
}

function App() {
  return (
    <div className="wrapper">

      <div className='small basic-card no-background borderless'>
        <img className="graphic" src={gitQR} alt={'no load'} onClick={() => openInNewTab('https://github.com/lpjc')} style={{cursor: "pointer"}}/>
      </div>

      <div className='large basic-card borderless no-background' style={{padding: "15%", display: "flex", flexDirection: "column"}}>
        <Graphic graphic={logo}/>
      </div>

      <div className='wide basic-card borderless'>
        <Videocard video={WebcamWizard}/>
      </div>

      <div className='cat high basic-card borderless pulse'>
        <img className="graphic" src={catStill} alt={'no load'}/>
      </div>
      
      <div className='high basic-card borderless no-background' style={{padding: "10%"}}>
        <img className="graphic" src={digitalSkills} alt={'no load'}/>
      </div>

      <div className='small basic-card ' style={{backgroundColor:"beige", perspective:"300px"}}>
        <div className='flip-container'  style={{fontSize: "40pt", textAlign:"center"}}>
          <div className='front'  style={{padding: "10%"}}>
            <Graphic graphic={PCB3dStill}/>
          </div>
          <div className='back'> 
           <Graphic graphic={PCBasGraphic}/>
          </div>
        </div>
      </div>

      <div className='wide basic-card ' style={{backgroundColor:"beige", perspective:"300px"}}>
           <Graphic graphic={kinect}/>
      </div>

      <div className='wide basic-card borderless'>
        <Slideshow imageArray={cicadaArray} flex={1}/>
      </div>

      <div className='large basic-card no-background borderless' style={{padding: "15%"}}>
        <Graphic graphic={physicalSkills}/>
      </div>

      <div className='small basic-card no-background hinge' style={{cursor: "pointer", zIndex: "10",overflow: "hidden"}}>
          <img className="graphic " src={PDFlogo} alt={'no load'} onClick={() => openInNewTab(PDFLink)}/>
      </div>

      <div className='wide basic-card borderless'>
        <img className= "kenburns" src={cicadaPrototype} alt={'no load'} style={{objectFit: "cover", flex: "1"}} />
      </div>

      <div className='small basic-card borderless wriggle'style={{border: 'solid 5px '+ myColor}}>
        <Graphic graphic={cicadaBeam}/>
      </div>

      <div className='small basic-card borderless pulsehover'>
        <Graphic  graphic={arduinoPicture}/>
      </div>

      <div className='wide basic-card borderless'>
        <img className='side2side' src={catJourney} alt={'no load'} style={{objectFit: "cover"}} />
      </div>

      <div className='overlay' style={{color: "#2d2222"}}> 
     
        lars.pjc@gmail.com <br></br>
        +45 4053 1848
      
        <div style={{height: "inherit", width: "inherit"}}>
          <img src={linkedInLogo} alt={'no load'} 
            style={{maxHeight: "50px", width: "auto", paddingLeft: "15px", cursor: "pointer",}} 
            onClick={() => openInNewTab(linkedINLink)}
          />
        </div>
      </div>

      to be continued ...

    </div>

  );
}

export default App;
