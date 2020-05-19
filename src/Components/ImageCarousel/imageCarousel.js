import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles(theme => ({
    carouselImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    carousel: {
        maxHeight: "80vh",
        maxWidth: "80vh"
    }
}))

function ImageCarousel (props) {
    const {imageList} = props
    const classes = useStyles()
    return (
     
            <Carousel autoPlay>
                {
                    imageList.map((img,i) => (
                        <div >
                            <img src={img} />
                            <p className="legend">car</p>
                        </div>
                    ))
                }
            </Carousel>
     
    )
}

export default ImageCarousel;