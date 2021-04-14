<template>
  <div class='hello'>
    <div>{{this.$store.state.city}}</div>
    
 </div>
</template>

<script>
/*import Main from '@/components/main.vue'*/


export default {
  name: 'Right',
  components:{
    
    
    
  },
  data(){
    return {
     
    }
  },

  methods:{
     getUser(){
       let api = '/api/city.json'
       this.$http.get(api).then(
         res=>{
          
           console.log(res)
         }   
       )
     }

  },
  mounted(){
    this.getUser()
  }

}
</script>