import { Menu, Row, Col, Button } from 'antd'
import styled from 'styled-components'

const StyleHeader = styled.div`
  background:#42B6D6;
  width:100%;
  height:89px;
  line-height:89px;
  color:#fff;
  padding:0 5%;
  .logo {
    font-size:18px;
  }
  .ant-menu-item-selected,.ant-menu-item-active,.ant-menu-item-selected,.ant-menu-item-active,.ant-menu-submenu-selected,.ant-menu-submenu-active{
    color:#fff!important;
    &::after{
      border-bottom:3px solid #fff!important;
    }
  }
  .ant-menu-light{
    .ant-menu-submenu-title{
      &:hover{
        color:#fff!important;
      }
    }
  }
  .ant-menu-horizontal{
    line-height:90px;
    border-bottom:none;
    &::hover{
      color:#fff;
    }
  }
  .ant-menu{
    color:#fff;
    background:#42B6D6;
    font-size:18px;
  }
`
const StyleDivider = styled.div`
  width:100%;
  border-bottom:1px solid rgba(255, 255, 255, .1);
`

export default function NavHeader(): JSX.Element {
  const { SubMenu } = Menu
  return (
    <>
    <StyleHeader>
      <Row>
        <Col span={5}>
          <div className="logo">TUSAMA</div>
        </Col>
        <Col span={9}></Col>
        <Col span={6}>
          <Menu mode="horizontal">
            <Menu.Item key="mail">Dashboard</Menu.Item>
            <SubMenu title="Apps" key="2">
              <Menu.Item key="setting:3">
                <Button>CREATE APP</Button>
              </Menu.Item>
              <Menu.Item key="setting:4">Yingyong</Menu.Item>
              <Menu.Item key="setting:5">YingYong2</Menu.Item>
            </SubMenu>
            <Menu.Item key="mail11">Composer</Menu.Item>
          </Menu>
        </Col>
        <Col span={2}></Col>
        <Col span={2}></Col>
      </Row>
    </StyleHeader>
    <StyleDivider/>
    </>
  )
}