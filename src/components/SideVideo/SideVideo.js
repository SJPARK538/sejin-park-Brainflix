import React from "react";
import sideVideo from "../../data/videos.json";
import "./sidevideo.scss"

const Sidepage = (props) => {
    const handleClick = (id) =>{
        props.displayVideo(id)
    }

   const filteredVideos = sideVideo.filter(video => video.id !== props.mainDisplayId) 

    const SideContent = filteredVideos.map((side, index) => {
        return(
            <div key={side.id} onClick={()=> handleClick(side.id)} className="sidepage__content-container">
                <img src ={side.image} alt="video thumbnail" className="sidepage__image-container"></img>
                <div className="sidepage__text-container">
                    <div className="sidepage__text-container--title">{side.title}</div>
                    <div className="sidepage__text-container--author">{side.channel}</div>
                </div>
            </div>
        
        )
            
    })
    return (
    <div className="sidepage">
        <h4 className="sidepage__title">NEXT VIDEOS</h4>
        <div className="sidepage__container">{SideContent}</div>
    </div>
    )
}


export default Sidepage;

