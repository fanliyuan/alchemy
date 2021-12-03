import { Tabs } from 'antd'
import Styled from 'styled-components'

const { TabPane } = Tabs

const StyleTabCon = Styled.div`
  .ant-tabs-nav-list{
    flex:1 1;
  }
  .ant-tabs-tab{
    width:33.33%;
    border-radius:5px!important;
    background:#fff!important;
    line-height:50px;
    &.ant-tabs-tab-active{
      background:#42B6D6!important;
      .ant-tabs-tab-btn{
        color:#fff!important;
      }
    }
  }
  .ant-tabs-tab + .ant-tabs-tab{
    margin-left:0.5%!important;
  }
`
export default function AppTabs() {
  const callback = () => {

  }
  return (
    <StyleTabCon>
    <Tabs onChange={callback} type="card">
      hello
      <TabPane tab="Recent Requests" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
    </StyleTabCon>
  )
}