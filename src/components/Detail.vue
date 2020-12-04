<template>
<transition enter-active-class="transition-all transition-fastest ease-out-quad
" leave-active-class="transition-all transition-fastest ease-out-quad" 
enter-class="opacity-0 scale-70"
enter-to-class="opacity-100 scale-100"
leave-class="opacity-100 scale-100"
leave-to-class="opacity-0 scale-70">

  <div class="h-screen bg-dark-blue px-6 py-10">
   <button @click="goBack" class="bg-very-dark-blue px-6 rounded-sm py-2 text-gray-400"><span class="mr-2 fas fa-arrow-left text-white"></span>Back</button>
   <div class="mt-10 flex flex-col lg:flex-row lg:items-center md:space-x-20 md:px-20 md:justify-center">
    
           <div><img class="w-full md:w-72 bg-red-500 object-cover h-48 object-center" :src="`${country.flag}`"/></div>
           <div>
             <h3 class="mt-4 text-sm font-semibold text-white">{{country.name}}</h3>
            <ul class="py-4 ">
                <li class="text-xs mt-1"><span class="text-white">Native Name:</span> <span class="ml-1 text-dark-gray">{{country.nativeName}}</span></li>
                <li class="text-xs mt-2"><span class="text-white"> Population: </span><span class="ml-1 text-dark-gray">{{country.population}}</span></li>
                <li class="text-xs mt-2"><span class="text-white"> Region: </span> <span class="ml-1 text-dark-gray">{{country.region}}</span> </li>
                <li class="text-xs mt-2"><span class="text-white">Sub Region:</span><span class="ml-1 text-dark-gray"> {{country.subregion}}</span></li>
                <li class="text-xs mt-2"><span class="text-white"> Capital: </span><span class="ml-1 text-dark-gray">{{country.capital}}</span></li>

            </ul>
            </div> 
            <div>
            <ul class="mt-4">
                <li class="mt-1 flex">
                   <span class="text-sm text-white">Top Level Domain:</span> 
                    <div class="flex spaxe-x-2">
                        <span class="text-sm text-dark-gray" v-for="(domain, index) in country.topLevelDomain" :key="index"><span class="ml-1 text-sm text-dark-gray">{{domain}}</span></span>
                    </div>
                </li>
                 <li class="mt-1 flex">
                   <span class="text-sm text-white">Currencies:</span> 
                    <div class="flex spaxe-x-2">
                        <span class=" text-dark-gray" v-for="(currency, index) in country.currencies" :key="index"><span class="ml-1 text-sm text-dark-gray">{{currency.name}}</span></span>
                    </div>
                </li>
            </ul>
            </div>
            <!-- <div class="mt-6">
                <h4 class="text-white text-lg">Border Countries:</h4>
                <span v-for="(border, index) in bordersCountries" :key="index">{{border}}</span>
            </div> -->
            </div>
  </div>
</transition>
</template>

<script>
// @ is an alias to /src
// import api from '../services/api.js'



export default {
  data(){
      return {
        bordersCountries: []
      }
  },

  computed: {
      country(){
          return this.$route.params.countryDetail
      }
  },

  methods: {
      goBack(){
          this.$router.go(-1)
      }
    //   async searchCountryByCode(code){
          
    //      const response = await api.searchCountryByCode(code);
    //       const output = await response.data.name;
    //       this.bordersCountries.push(output);
    //       }
           
      
  },
 

//   created(){
//       this.country.borders.forEach(function(el){
//           this.searchCountryByCode(el)
//       }
//       )
//   },  


 
}
</script>
