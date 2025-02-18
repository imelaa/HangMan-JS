import image0 from '../assets/0.png';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';

let images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,]


export function HangImage( props) {
    let imageNumber = props.imageNumber;

    if (imageNumber < 0) {
        imageNumber = 0;
    } else if (imageNumber > 9) {
        imageNumber= 9;
    }
    
    return(
        <img
            src={images[imageNumber]}
            alt="Hang" 
            style={{
                width: '300px',
                height: '300px',
                margin: 'auto',
                display: 'block'}}    
        />
    );
    }