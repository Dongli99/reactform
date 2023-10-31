import { useState } from 'react'
import './App.css'
import ReactHookForm from './components/ReactHookForm/rhf'

const App = () => {
  return (
    <div>
      <h1>New Product</h1>
      <div>
        <ReactHookForm />
      </div>
    </div>
  )
}

export default App