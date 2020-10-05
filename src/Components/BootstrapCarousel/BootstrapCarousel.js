import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Carousel} from 'react-bootstrap'
const useStyles = makeStyles(theme => ({
    
}))

function BootstrapCarousel (props) {
    const classes = useStyles()
    const { imagelist } = props;
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagelist[0]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagelist[1]}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagelist[2]}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default BootstrapCarousel;