import { Row, Col, Typography, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const { Title } = Typography;

const url = "http://155.94.210.195:8123/"

function Dynmap (props) {
    return <div style={{ backgroundColor: "#fff" }}>
        <Row justify="center"><Title strong>Dynmap</Title></Row>
        <Row justify="center">
            <Col xs={0} md={12} xl={20}><iframe height="600" width="100%" title="Weetle Ruins Dynmap" src={url} /></Col>
        </Row>
        <Row justify="center"><Button style={{ marginTop: "32px", padding: "32px", display: "flex", justifyContent: "center", alignItems: "center" }} size="large" target="_blank" shape="round" type="primary" href={url} icon={<GlobalOutlined />}>Open Map</Button></Row>
    </div>
}

export default Dynmap