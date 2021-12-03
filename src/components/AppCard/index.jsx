import CardItem from './CardItem'

import styled from 'styled-components'

const StyleTitle = styled.h5`
  color:#fff;
  margin:0;
`
const StyleValue = styled.h3`
  color:#fff;
  font-size:50px;
  margin:50px 0 0;
  font-family:'Rubik Light'
`
const StyleCardList = styled.div`
  padding:100px 10% 70px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  background:#42B6D6;
  color:#fff;
`


export default function AppCard() {
  const list = [
    {
      name: 'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value: '0'
    },
    {
      name: 'INVALID QEQUESTS (LAST 24 H)',
    },
    {
      name: 'COMPUTE UNITS / SEC (LAST 5 MIN)',
    },
    {
      name: 'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value: '0',
    },
    {
      name: 'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value: '0'
    },
    {
      name: 'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value: '0'
    },
    {
      name: 'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value: '0'
    },
    {
      name: 'COMPUTE UNITS / SEC (LAST 5 MIN)',
      value: 0
    }
  ]
  return (
    <>
      <StyleCardList>
        {
          list.map((item, index) => {
            return (
              <CardItem key={index}>
                <StyleTitle>
                  {item.name}
                </StyleTitle>
                <StyleValue>
                  {item.value || '--'}
                </StyleValue>
              </CardItem>
            )
          })
        }
      </StyleCardList>
    </>
  )
}