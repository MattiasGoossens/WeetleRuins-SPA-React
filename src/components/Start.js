import { Carousel, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';


let carouselPlaySpeed = 16000
let carouselAnimationSpeed = 1500

const imgurls = ["Castle.png", "Statue.png"];
const img = [];

const buttonStyle = {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 0
}

for (const [index, value] of imgurls.entries()) {
    const url = "images/" + value
    img.push(
        <img style={{ width: "auto" }} alt={value} src={url} />
    );
}

function Start (props) {
    return (
        <div style={{ position: "relative", backgroundColor: '#fff', overflow: 'hidden', paddingTop: '100px', height: "115vh" }}>
            <Carousel autoplay effect="fade" dotPosition="left" autoplaySpeed={carouselPlaySpeed} speed={carouselAnimationSpeed}>
                {img}
            </Carousel>
            <svg class="whitemountains" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100" />
                <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
            </svg>
            <Button style={buttonStyle} type="primary" icon={<DownOutlined style={{ fontSize: '2rem' }} />} size="large" />
        </div >
    );
}


export default Start