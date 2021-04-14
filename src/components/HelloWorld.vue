<template>
  <div class='hello'>
    
    <NavBar/>
    <div class="aside"> 
      <Menu/>
      <router-view/>
    </div>
  </div>
  
</template>


<style scoped>


.aside{
  display:flex;
  width:100%;

}
</style>
<script>
/*import Main from '@/components/main.vue'*/
import NavBar from './NavBar.vue'
import Menu from './Menu.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    
    Menu,
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

