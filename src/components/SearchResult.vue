<template>

  <div class="px-10 py-10 md:px-16 bg-dark-blue">
      <button v-if="isOpen" @click="isOpen=false" class="h-full w-full fixed inset-0"></button>
      <div class="flex flex-col md:flex-row md:items-center justify-between"> 
         <div class="w-full md:w-96 overflow-hidden rounded-md h-12 flex  md:flex-row md:justify-center md:items:center bg-very-dark-blue">
             <span class="h-full flex justify-center items-center px-6 text-white fas fa-search"></span>
             <input @input="searchCountries" v-model="searchTerm" class="py-2 text-white bg-very-dark-blue placeholder-white text-sm font-medium w-full " type="text" placeholder="Search for a country..."  >
         </div>

         <div>
             <div class="">

  <div class="inline-block relative mt-4 md:mt-0 h-12">
    <button @click="isOpen=!isOpen" class="w-40 bg-very-dark-blue focus:outline-none  text-white text-sm py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">Filter by Region</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul @click="filterResult" v-if="isOpen" class="absolute  text-white pt-1">
      <li class="w-40"><a class="rounded-t text-sm bg-very-dark-blue hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Africa</a></li>
      <li class="w-40"><a class="bg-very-dark-blue text-sm hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Americas</a></li>
      <li class="w-40"><a class="rounded-b bg-very-dark-blue text-sm hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Asia</a></li>
      <li class="w-40"><a class="rounded-b bg-very-dark-blue text-sm hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Europe</a></li>
      <li class="w-40"><a class="rounded-b bg-very-dark-blue text-sm hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Oceania</a></li>
    </ul>
  </div>

</div>
         </div>
      </div>
      <div v-if="!countries" class="text-white text-lg mt-10 text-center">Loading...</div>
      <div v-else-if="countries==='empty'" class="text-white text-lg mt-10 text-center">No Result</div>
    <ul v-else class="mt-10 grid px-8 md:px-0  gap-y-15 grid-cols-auto-fill sm:gap-x-15">
        <li class="flex max-w-20 flex-col overflow-hidden rounded-md bg-very-dark-blue" v-for="(country, index) in countries" :key="index">
         <router-link :to="{name: 'Detail',  params:{countryDetail: country, country:country.name }}"> <Card :country="country"></Card></router-link>
         </li>
    </ul>
  </div>
</template>

<script>

import api from '../services/api.js'
import Card from './Card.vue'

export default {
components: {
    Card,
},
data(){
    return {
        countries: null,
        searchTerm: '',
        isOpen: false,
    }
},
  methods: {
    //   async searchCountries(){
    //       const response = await api.searchCountries();
    //       this.countries = await response.data;
      showDropDown(){
          this.isOpen = true;
      },
      async filterResult(el){
          this.isOpen = false;
          this.countries = null;
          const response = await api.filterResult(el.target.textContent);
          this.countries = await response.data;
      },
      async searchCountries(){
          this.countries = null;
          try {
              
            const response = await api.searchCountries(this.searchTerm);
             this.countries = await response.data;
         } catch(err) {

             if(err.response.status === 404){
                 this.countries = 'empty'
             }
         }

      }
  },
  created(){
      this.searchCountries();
  }
}
</script>

