<template>
  <div class="flex flex-col">
      <div>
            <img class="bg-red-500 object-cover  w-full  h-32 object-center" :src="`${country.flag}`"/>
            </div>
            <h3 class="mt-4 px-4 text-sm font-semibold text-white">{{country.name}}</h3>
            <ul class="py-4 px-4">
                <!-- <li class="mt-1">Native Name: {{country.nativeName}}</li> -->
                <li class="text-xs mt-2"><span class="text-white"> Population: </span><span class="ml-1 text-dark-gray">{{country.population}}</span></li>
                <li class="text-xs mt-2"><span class="text-white"> Region: </span> <span class="ml-1 text-dark-gray">{{country.region}}</span> </li>
                <!-- <li class="mt-1">Sub Region: {{country.subregion}}</li> -->
                <li class="text-xs mt-2"><span class="text-white"> Capital: </span><span class="ml-1 text-dark-gray">{{country.capital}}</span></li>

            </ul>
            <!-- <ul class="mt-4">
                <li class="mt-1 flex">
                   <p>Top Level Domain:</p> 
                    <div class="flex spaxe-x-2">
                        <p v-for="(domain, index) in country.topLevelDomain" :key="index">{{domain}}</p>
                    </div>
                </li>
                 <li class="mt-1 flex">
                   <p>Currencies:</p> 
                    <div class="flex spaxe-x-2">
                        <p v-for="(currency, index) in country.currencies" :key="index">{{currency.name}}</p>
                    </div>
                </li>
            </ul> -->
    
  </div>
</template>

<script>


export default {
  props: {
      country: Object,
  },
  components: {
    
  
  }
}
</script>
