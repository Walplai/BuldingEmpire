import React from 'react'
import Img from 'gatsby-image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from '../../../image'
import { GalleryWrap } from './gallery.stc'

const Gallery = ({ images, title, sliderSettings }) => {
	return (
		<GalleryWrap>
			<Slider {...sliderSettings}>
				{images && images.map((image, i) => {
					const imageSrc = image.childImageSharp;
					if (imageSrc.fixed && typeof imageSrc.fixed !== 'function') {
						return (
							<div className="item" key={`gallery-${i}`}>
								<Img fixed={imageSrc.fixed} alt={title} />
							</div>
						)
					} else if (imageSrc.fluid) {
						return (
							<div className="item" key={`gallery-${i}`}>
								<Image fluid={imageSrc.fluid} alt={title} />
							</div>
						)
					} else {
						return (
							<div className="item" key={`gallery-${i}`}>
								<img src={imageSrc} alt={title} />
							</div>
						)
					}
				})}
			</Slider>
		</GalleryWrap>
	)
}


Gallery.defaultProps = {
	sliderSettings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		dots: false,
		autoplay: true
	},
	title: 'Gallery'
}

export default Gallery
