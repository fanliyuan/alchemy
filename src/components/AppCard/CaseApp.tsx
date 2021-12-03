import styled from 'styled-components'
import CardItem from '../../components/AppCard/CardItem'
import Line from '../../components/Charts/Line'
import { Card } from 'antd'

const StyleTitle = styled.h5`
  color:rgba(0, 0, 0, 0.45);
  margin:0;
`
const StyleValue = styled.h3`
  color: rgba(0, 0, 0, 0.85);
  font-size:50px;
  margin:50px 0 0;
  font-family:'Rubik Light'
`
const StyleCardList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
`

export default function CaseApp() {
  const list = [
    {
      name:'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value:'0',
    },
    {
      name:'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value:'0',
    },
    {
      name:'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value:'0',
    },
    {
      name:'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value:'0',
    }
  ]
  return (
    <>
      <Card title="Card title" bordered={false} style={{ width: '100%' }}>
        <StyleCardList>
        {
          list.map((item,index) => {
            return (
              <CardItem key={index}>
                <StyleTitle>{item.name}</StyleTitle>
                <StyleValue>{item.value}</StyleValue>
              </CardItem>
            )
          })
        }
        </StyleCardList>
        <CardItem width="100%">
          <Line type='line' data={[12,15,23,54,3]} xData={['Nov1','Nov2','Nov3','Nov4','Nov5']}/>
        </CardItem>
      </Card>
    </>
  )
}