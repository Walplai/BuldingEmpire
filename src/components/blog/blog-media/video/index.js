import React from 'react'
import { FiPlay } from "react-icons/fi";
import Img from 'gatsby-image';
import Image from '../../../image';
import {VideoThumbWrapper, VideoPoster, VideoVerlay, VideoButton} from './video.stc';

const VideoThumb = ({poster, title, onClick, layout}) => {
    const imageSrc = poster?.childImageSharp;
    let blogImage;
    if (imageSrc?.fixed && typeof imageSrc?.fixed !== 'function') {
        blogImage = <Img fixed={imageSrc.fixed} alt={title} />;
    } else if (imageSrc?.fluid) {
        blogImage = <Image fluid={imageSrc.fluid} alt={title} />
    } else {
        blogImage = <img src={imageSrc} alt={title} />
    }
    return (
        <VideoThumbWrapper onClick={onClick} layout={layout}>
            <VideoPoster>
                {blogImage}				
            </VideoPoster>
            <VideoVerlay>
                <VideoButton>
                    <FiPlay/>
                </VideoButton>
            </VideoVerlay>
        </VideoThumbWrapper>
    )
} 

export default VideoThumb;