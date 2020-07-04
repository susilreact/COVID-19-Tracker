import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { FetchData } from './api';

import coronaImage from './image/image.png';

class App extends Component {
   state = {
      data: {},
      country: '',
   };
   async componentDidMount() {
      const fetchedData = await FetchData();

      this.setState({
         data: fetchedData,
      });
   }
   handleCountryChange = async (country) => {
      const fetchedData = await FetchData(country);

      this.setState({
         data: fetchedData,
         country: country,
      });
   };
   render() {
      const { data, country } = this.state;

      return (
         <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt='COVID-19' />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
         </div>
      );
   }
}
export default App;
