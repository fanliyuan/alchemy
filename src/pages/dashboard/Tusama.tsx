import styled from 'styled-components'
import CommonTable from '../../components/Table/CommonTable'
import { Tag,Button } from 'antd'

const StyledTusama = styled.div`
  width:100%;
  background:#42B6D6;
  padding:100px 10%;
`

export default function Tusama():JSX.Element{
  const columns = [
    {
      title:'APP',
      dataIndex:'app',
      key:'app',
      render:(text:string,obj:any) =>{
        const Jsxd = function ({demo}:{demo:boolean}):JSX.Element{
          return (
            <>
              <a href="/">{text}</a>
              {demo && <Tag color={'#EBCB57'} key={text}>Demo</Tag>}
              <Button>VIEW DETAILS</Button>
            </>
          )
        }
        return (
          <Jsxd demo={obj.key===1}/>
        )
      }
    },
    {
      title:'ENVIRRONMENT',
      dataIndex:'envirronment',
      key:'envirronment'
    },
    {
      title:'NETWORK',
      dataIndex:'network',
      key:'network'
    },
    {
      title:'MEDIAN RESPONSE(5MIN)',
      dataIndex:'median',
      key:'median',
      render:(text:string) => {
        return (
          text ? text : '-'
        )
      }
    },
    {
      title:'REQUESTS(24H)',
      dataIndex:'requests',
      key:'requests'
    },
    {
      title:'RATE LIMTED(24H)',
      dataIndex:'rate',
      key:'rate'
    },
    {
      title:'DAYS ON ALCHEMY',
      dataIndex:'alchemy',
      key:'alchemy'
    }
]
const data = [
  {
    key:1,
    app:'Demo App',
    envirronment:'Development',
    network:'Rinkeby',
    median:'',
    requests:36,
    rate:0,
    alchemy:'Less than a day'
  },
  {
    key:2,
    app:'Demo App2',
    envirronment:'staging',
    network:'Rinkeby',
    median:'',
    requests:0,
    rate:0,
    alchemy:'Less than a day'
  }
]
  return (
      <StyledTusama>
        <CommonTable data={data} columns={columns}/>
      </StyledTusama>
  )
}