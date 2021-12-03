import React from 'react'
import Tusama from './Tusama'
import CaseApp from '../../components/AppCard/CaseApp'


import styled from 'styled-components'

const StyleCase = styled.div`
  background:#FAFCFD;
  padding:100px 10%;
  .ant-card-head{
    line-height:76px;
    background:#42B6D6;
    color:#fff;
    font-size:24px;
  }
`
export default function Dashboard() {
  return (
    <>
      <Tusama />
      <StyleCase>
        <CaseApp />
        
      </StyleCase>
    </>
  )
}