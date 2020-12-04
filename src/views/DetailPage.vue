<template>
  <div>
    <Header/>
    <Detail/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Detail from '@/components/Detail.vue'

export default {
  name: 'Home',
  components: {
    Detail,
    Header
  
  }
}
</script>
