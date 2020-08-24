<template>
  <div id="app">
   
   <SearchBox @searching-data="searchingData" :status="status"></SearchBox>
   <PostList  :list-data="listData" v-show="enable"></PostList>
   <PostListUnfiltered  :lists-data="listsData"></PostListUnfiltered>
  </div>

</template>

<script>
import postlist from './db/postlist.js'
import SearchBox from './components/SearchBox.vue'
import PostList from './components/PostList.vue'
import PostListUnfiltered from './components/PostListUnfiltered.vue'

export default {
  name: 'App',
  components: {
    SearchBox,
    PostList,
    PostListUnfiltered
  },
      data: ()=> ({
        searching: "",
        status: "",
        listData: postlist,
        listsData: postlist,
        enable: false,
        }),

        methods: {
             searchingData(searching) {
          if(searching.length<3 && searching.length !==0){
            this.enable = false
            this.listData = postlist
            this.listsData = postlist
            this.status = `Buffer...` 
          }else if(searching.length>=3){
            this.enable = true
            this.listData = this.listData.filter(post => {
            return post.title.toLowerCase().includes(searching.toLowerCase())
          })
          this.listsData = this.listsData.filter(post => {
            return !post.title.toLowerCase().includes(searching.toLowerCase())
          })
            this.status = `Looking for : ${searching}` 
          }else{
            this.status = ""
          }
            
        },
        
        },
      
}
</script>

<style>
</style>
