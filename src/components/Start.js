import React from 'react';
import { Carousel, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

let carouselPlaySpeed = 16000
let carouselAnimationSpeed = 1500


const imgurls = ["Castle.png", "Statue.png"];
const img = [];

const buttonStyle = {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 0
}

for (const [index, value] of imgurls.entries()) {
    const url = "images/" + value
    img.push(
        <div >
            <img style={{ width: "100%", height: "auto", minHeight: "700px", overflow: 'auto' }} alt={value} src={url} />
        </div>
    );
    console.log(img)
}

class Start extends React.Component {
    render () {
        return (
            <div style={{ position: "relative" }}>
                <Carousel autoplay effect="fade" dotPosition="left" autoplaySpeed={carouselPlaySpeed} speed={carouselAnimationSpeed}>
                    {img}
                </Carousel>
                <Button style={buttonStyle} type="primary" icon={<DownOutlined style={{ fontSize: '2rem' }} />} size="large" />
            </div>
        );
    }
}

export default Start