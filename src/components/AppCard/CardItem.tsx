import { Card } from 'antd'
import React, { ReactNode } from 'react'
// import styled from 'styled-components'


export default function CardItem({ width='23%',children,bgcolor= 'transparent'}: { bgcolor?:string,width?:string,children?: ReactNode }) {

  return (
    <Card style={{ width: width,background:bgcolor,marginBottom:width === '100%' ? 0 :30 }}>
      {children}
    </Card>
  )
}