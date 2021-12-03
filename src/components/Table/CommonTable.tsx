import {Table} from 'antd'

export default function CommonTable({
  data,
  columns
}:{
  data:any,
  columns:any
}):JSX.Element{
  return (
    <Table columns={columns} dataSource={data} pagination={false}/> 
  )
}