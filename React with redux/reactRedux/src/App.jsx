import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header'
import CounterValue from './Components/CounterValue'
import Buttons from './Components/Buttons'

const App = () => {
  return (
    
      <div class="px-4 py-5 my-5 text-center">
        <Header/>
         <div class="col-lg-6 mx-auto"> 
          <CounterValue/> 
            <div class=" d-sm-flex justify-content-sm-center">
              <Buttons/>
               </div> </div> </div>
   
  )
}

export default App
