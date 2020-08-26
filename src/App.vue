<template>
  <div id="app">
   
   <SearchBox @searching-data="searchingData" :status="status"></SearchBox>
   <Slot v-show="enable">{{alert}}</Slot>
   <!-- <Alert v-show="enable" :alert="alert"></Alert> -->
   <PostList  :list-select="listSelect" :click="delCart"></PostList>
   <PostListData :list-data="listData" :click="addCart"></PostListData>
  </div>

</template>

<script>
import postlist from './db/postlist.js'
import SearchBox from './components/SearchBox.vue'
import PostList from './components/PostList.vue'
//import Alert from './components/Alert.vue'
import PostListData from './components/PostListData.vue'
import Slot from './components/Slot.vue'

export default {
  name: 'App',
  components: {
    SearchBox,
    PostList,
    PostListData,
    Slot,
   // Alert,
  },
      data: ()=> ({
        searching: "",
        status: "",
        listSelect: [],
        listData: postlist,
        alert:"",
        enable: false,
        }),

        methods: {
          searchingData(searching) {
          if(searching.length<3 && searching.length !==0){
            this.status = `Buffer...` 
            this.listData = postlist
          }else if(searching.length>=3){
            this.listData = postlist.filter(post => {
            return post.title.toLowerCase().includes(searching.toLowerCase())
          })
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

<style>
</style>
