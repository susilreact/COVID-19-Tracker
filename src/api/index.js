import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const FetchData = async (country) => {
   let changebleUrl = url;
   if (country) {
      changebleUrl = `${url}/countries/${country}`;
   }
   try {
      const {
         data: { confirmed, deaths, recovered, lastUpdate },
      } = await axios.get(changebleUrl);
      return {
         confirmed,
         deaths,
         recovered,
         lastUpdate,
      };
   } catch (error) {
      console.log(error);
   }
};

export const fetchDailydata = async () => {
   try {
      const { data } = await axios.get(`${url}/daily`);
      const modifiedData = data.map((dailyData) => ({
         confirmed: dailyData.confirmed.total,
         deaths: dailyData.deaths.total,
         date: dailyData.reportDate,
      }));
      return modifiedData;
   } catch (error) {}
};

export const fetchCountries = async () => {
   try {
      const {
         data: { countries },
      } = await axios.get(`${url}/countries`);
      return countries.map((country) => country.name);
   } catch (error) {}
};
