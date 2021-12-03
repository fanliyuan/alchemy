import React,{ Suspense } from 'react';
// import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'

import NavHeader from '../components/Header/NavHeader'
const DashBoard = React.lazy(() => import('./dashboard'))
const Apps = React.lazy(() => import("./apps"))

function App() {
  return (
    <Suspense fallback={null}>
      <div>
        <NavHeader></NavHeader>
        <Switch>
          <Route exact strict path="/" component={DashBoard}/>
          <Route exact strict path="/apps" component={Apps}/>
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
