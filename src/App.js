
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {
  pagesize = 5;
  apikey=process.env.REACT_APP_NEWS_API;
  state =
  {
    progress:0
  }
 setprogress=(progress)=>{
   this.setState({
     progress:progress
   })
 }

  render() {
    return(             
      
        <div>
            <BrowserRouter>
              <Navbar/> 
              <LoadingBar
              height={5}
        color='#f11946'
        progress={this.state.progress}
  
      />
               <Routes>
                <Route  path="/News_App" element={ <News  setprogress={this.setprogress} aplikey={this.apikey} key="general" pageSize={this.pagesize} country="in"  category="general"/>}/>
              <Route  path="/entertainment" element={ <News  setprogress={this.setprogress}aplikey={this.apikey}  key="entertainmentl" pageSize={this.pagesize} country="in"  category="entertainment"/>}/>
              <Route  path="/business" element={ <News  setprogress={this.setprogress}aplikey={this.apikey}  key="business" pageSize={this.pagesize} country="in"  category="business"/>}/>
              <Route  path="/eneral" element={ <News  setprogress={this.setprogress} aplikey={this.apikey} key="general" pageSize={this.pagesize} country="in"  category="general"/>}/>
              <Route  path="/health" element={ <News  setprogress={this.setprogress} aplikey={this.apikey} key="health" pageSize={this.pagesize} country="in"  category="health"/>}/>
              <Route  path="/sports" element={ <News  setprogress={this.setprogress}aplikey={this.apikey} key="sports"  pageSize={this.pagesize} country="in"  category="sports"/>}/>
              <Route  path="/technology" element={ <News  setprogress={this.setprogress}aplikey={this.apikey}  key="technology" pageSize={this.pagesize} country="in"  category="technology"/>}/>
              <Route  path="/science" element={ <News  setprogress={this.setprogress} aplikey={this.apikey}  key="science" pageSize={this.pagesize} country="in"  category="science"/>}/>
               </Routes>
                
             

              
            </BrowserRouter>

          </div>
        
        
        
        

    ) 
  }
}
