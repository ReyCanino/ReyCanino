import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        textAlign: 'center',
        position: 'center',
        marginTop: "-48px"
    }
});

class Example extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div >
                <Carousel
                    className={classes.root}
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    swipeable={false}
                    interval={6000}
                >
                    <div>
                        <img src="slide1.png" alt="" />
                    </div>
                    <div>
                        <img src="slide2.png" alt="" />
                    </div>
                    <div>
                        <img src="slide3.jpg" alt="" />
                    </div>
                    <div>
                        <img src="slide4.jpg" alt="" />
                    </div>
                </Carousel>
            </div>

        );
    }
};
export default withStyles(useStyles)(Example);