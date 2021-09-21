import React, { Component } from "react"
import './VideoSequence.scss'

// import cover1 from '../../files/videos/COVER/cover (1).png';
// import cover2 from '../../files/videos/COVER/cover (2).png';
// import cover3 from '../../files/videos/COVER/cover (3).png';
// import cover4 from '../../files/videos/COVER/cover (4).png';
// import cover5 from '../../files/videos/COVER/cover (5).png';
// import cover6 from '../../files/videos/COVER/cover (6).png';
// import cover7 from '../../files/videos/COVER/cover (7).png';

import video1 from '../../files/videos/video (1).mp4';
import video2 from '../../files/videos/video (2).mp4';
import video3 from '../../files/videos/video (3).mp4';
import video4 from '../../files/videos/video (4).mp4';
import video5 from '../../files/videos/video (5).mp4';
import video6 from '../../files/videos/video (6).mp4';
import video7 from '../../files/videos/video (7).mp4';
import video8 from '../../files/videos/video (8).mp4';

import arrow from '../../files/videos/arrow.png';



class VideoSequence extends Component {

    playVid(vidToPlay, imgToHide) { 
        document.getElementById(vidToPlay).style.display = "block";
        document.getElementById(imgToHide).style.display = "none";
        document.getElementById(vidToPlay).play(); 
    }  

    render() {
        return (
            <div className="VideoSequenceContainer"> 

                <div className="arrowContain">
                    <img src={arrow} alt={"arrow"} />
                    <span>CLICK TO VIEW OUR STORY</span>
                    <img src={arrow} alt={"arrow"} />
                </div>
                <div className="videoSection">
                    <div className="videoContain">
                        {/* <img id="cover1" src={cover6} onClick={() => this.playVid("mvideo6", "cover6")} alt="i6" /> */}
                        <video id="mvideo6" controls><source src={video6} type="video/mp4"></source></video>
                    </div>
                    <div className="videoContain">
                        {/* <img id="cover2" src={cover2} onClick={() => this.playVid("mvideo2", "cover2")} alt="i2" /> */}
                        <video id="mvideo2" controls><source src={video2} type="video/mp4"></source></video>
                    </div>
                    <div className="videoContain">
                        {/* <img id="cover5" src={cover5} onClick={() => this.playVid("mvideo5", "cover5")} alt="i5" /> */}
                        <video id="mvideo5" controls><source src={video5} type="video/mp4"></source></video>
                    </div>
                    <div className="videoContain">
                        {/* <img id="cover3" src={cover3} onClick={() => this.playVid("mvideo3", "cover3")} alt="i3" /> */}
                        <video id="mvideo3" controls><source src={video3} type="video/mp4"></source></video>
                    </div>
               {/*  </div>
                <div className="videoSection"> */}
                    <div className="videoContain">
                        {/* <img id="cover8" src={cover8} onClick={() => this.playVid("mvideo8", "cover8")} alt="i8" /> */}
                        <video id="mvideo8" controls><source src={video8} type="video/mp4"></source></video>
                    </div>
                    <div className="videoContain">
                        {/* <img id="cover4" src={cover4} onClick={() => this.playVid("mvideo4", "cover4")} alt="i4" /> */}
                        <video id="mvideo4" controls><source src={video4} type="video/mp4"></source></video>
                    </div>
                    <div className="videoContain">
                        {/* <img id="cover1" src={cover1} onClick={() => this.playVid("mvideo1", "cover1")} alt="i1" /> */}
                        <video id="mvideo1" controls><source src={video1} type="video/mp4"></source></video>
                    </div>
                    <div className="videoContain">
                        {/* <img id="cover7" src={cover7} onClick={() => this.playVid("mvideo7", "cover7")} alt="i7" /> */}
                        <video id="mvideo7" controls><source src={video7} type="video/mp4"></source></video>
                    </div>
                </div>

            </div>
       );
    }
}

export default VideoSequence;