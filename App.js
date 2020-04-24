import React from 'react';

import {Cards,Chart,CountryPicker} from './Component';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component{
  state ={
    data: {},
    country:'',
  }
 async componentDidMount(){
    const fetchedData = await fetchData();
   this.setState({data: fetchedData})
  }
  handleCountryChange = async (country) =>{
    console.log(country);
    // fetch the data
    // set the state
  }
render(){
  return (
    <div className={styles.container}>
     
     <Cards data={this.state.data} />
     <CountryPicker handleCountryChange={this.componentWillUnmounthandleCountryChange} />
     <Chart  />
     
    </div>
   )
 }
}
export default App;
