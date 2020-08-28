<template>
    <div>
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <div class="pt-5 flex mx-auto"></div>
            
            <div class="grid grid-cols-3 gap-5 p-10">
                <div
                    v-for="album in albumData"
                    :key="album.id"
                    :list="album"
                    class="max-w rounded border border-gray-300 transform transition duration-200 hover:scale-95 hover:bg-gray-100 shadow-lg p-5">
                    <div class="p-5 bg-blue-200">
                    <p class="text-gray-800 ">
                        {{album.title}}
                    </p>
                    </div>
                    <div class="py-2">
                    <router-link :to="'/album/detail/'+album.id">
                    <button
                            class="rounded bg-blue-500 text-lg text-white p-2 border hover:bg-blue-600 focus:outline-none focus:border-white">
                            Detail
                        </button>
                    </router-link>
                        
                    </div>
                </div>
            </div>
      
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import albumDataAll from '@/dummy/albumData'


export default {
  name: 'AlbumList',
  components: {
   

  },

  data:()=>({
    albumData:albumDataAll,
    paginate:['albumData']
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped"></style>