import './App.css';
import { Layout, Menu } from 'antd';
import Start from "./components/Start"
import Dynmap from "./components/Dynmap"
import Status from "./components/Status"

const { Header, Content, Footer } = Layout;

function App () {
  return (
    <Layout className="layout">
      <Header style={{ height: "100px", position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo"><img style={{ padding: "10px" }} alt="Weetle Ruins" src="images/WeetleRuinsIconBlack.png" width="100px" height="100px" /></div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        </Menu>
      </Header>
      <Content>
        <Start />
        <Dynmap />
        <Status />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Made by Weetis :)</Footer>
    </Layout >
  );
}

export default App;
