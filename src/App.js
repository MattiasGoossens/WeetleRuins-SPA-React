import './App.css';
import { Layout, Menu } from 'antd';
import Start from "./components/Start"
import Dynmap from "./components/Dynmap"

const { Header, Content, Footer } = Layout;

function App () {
  return (
    <Layout className="layout">
      <Header style={{ height: "100px", position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        </Menu>
      </Header>
      <Content>
        <Start />
        <Dynmap />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Made by Weetis :)</Footer>
    </Layout >
  );
}

export default App;
