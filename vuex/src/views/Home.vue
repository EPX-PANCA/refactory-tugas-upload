<template>
    <div class="home">
    <div class="bg-gray-100 p-5">
        <Search @searching-data="searchingData" :status="status"/>
        <List/>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Search from '@/components/Home/Search.vue'
    import List from '@/components/Home/List.vue'
    import {mapState} from 'vuex'

    export default {
  name: 'Home',
  components: {
    Search,
    List,
  },
      data: ()=> ({
        searching: "",
        status: "",
        // listSelect: [],
        // listData: postlist,
        // alert:"",
        // enable: false,
        }),

        methods: {
          ...mapState(['searching']),

          searchingData(searching) {
          if(searching.length<3 && searching.length !==0){
            this.status = `Buffer...` 
            //this.listData = postlist
          }else if(searching.length>=3){
            //this.listData = postlist.filter(post => {
            //return post.title.toLowerCase().includes(searching.toLowerCase())
          // })
            this.status = `Looking for : ${searching}` 
          }else{
            this.status = ""
          }
            
        },addCart(cart){
          this.listSelect.push(cart)
          this.alert = "Success add to cart"
          this.enable = true
          setTimeout(() => {
          this.enable = false
          }, 5000)
        },

        delCart(cart){
          this.listSelect = this.listSelect.filter(
          (postlist) => postlist.id != cart.id)
          this.alert = "Success delete from cart"
          this.enable = true
          setTimeout(() => {
          this.enable = false
          }, 5000)
        }
      },
      
}
</script>

