<template>
  <div>
    <Header/>
    <SearchResult/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchResult from '@/components/SearchResult.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    SearchResult,
    Header
  
  }
}
</script>
