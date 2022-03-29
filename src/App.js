
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';



const App= ()=>{
 const pagesize = 5;
 const apikey="67n8eepdgVBDP5G3rlEewV8oSJLbL3Kiyz5x9otR";
 const [progress, setprogress] = useState(0)


  
    return(             
      
        <div>
            <BrowserRouter>
              <Navbar/> 
              <LoadingBar
              height={5}
           color='#f11946'
            progress={progress}
  
      />
               <Routes>
                <Route  path="/" element={ <News  setprogress={setprogress} aplikey={apikey} key="general" pageSize={pagesize} country="in"  category="general"/>}/>
              <Route  path="/entertainment" element={ <News  setprogress={setprogress}aplikey={apikey}  key="entertainmentl" pageSize={pagesize} country="in"  category="entertainment"/>}/>
              <Route  path="/business" element={ <News  setprogress={setprogress}aplikey={apikey}  key="business" pageSize={pagesize} country="in"  category="business"/>}/>
              <Route  path="/eneral" element={ <News  setprogress={setprogress} aplikey={apikey} key="general" pageSize={pagesize} country="in"  category="general"/>}/>
              <Route  path="/health" element={ <News  setprogress={setprogress} aplikey={apikey} key="health" pageSize={pagesize} country="in"  category="health"/>}/>
              <Route  path="/sports" element={ <News  setprogress={setprogress}aplikey={apikey} key="sports"  pageSize={pagesize} country="in"  category="sports"/>}/>
              <Route  path="/technology" element={ <News  setprogress={setprogress}aplikey={apikey}  key="technology" pageSize={pagesize} country="in"  category="technology"/>}/>
              <Route  path="/science" element={ <News  setprogress={setprogress} aplikey={apikey}  key="science" pageSize={pagesize} country="in"  category="science"/>}/>
               </Routes>
                
             

              
            </BrowserRouter>

          </div>
        
        
        
        

    ) 
  
}

export default App;
