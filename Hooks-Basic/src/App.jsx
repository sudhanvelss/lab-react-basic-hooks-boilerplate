import React,{useState} from 'react'
import './App.css'
import Context from './Component/Context'
import Content from './Component/Content'

function App() {

  return (
    <>
      <Context>
        <Content/>
      </Context>
    </>
  )
}

export default App