const ROOT_URL = 'https://restcountries.eu/rest/v2'
import axios from 'axios';

export default {
  
    searchCountryByCode(code){
        return axios.get(`${ROOT_URL}/alpha/${code}`);
    },
    searchCountries(name){
        if(!name)
            return axios.get(`${ROOT_URL}/all`)
        else 
            return axios.get(`${ROOT_URL}/name/${name}`)
    },
    filterResult(region){
        return axios.get(`${ROOT_URL}/region/${region}`)
    }
}