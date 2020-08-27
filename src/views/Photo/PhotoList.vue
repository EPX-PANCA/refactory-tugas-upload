<template>
    <div class="p-10">
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <div class="pt-5 flex mx-auto"></div>
            <paginate
                name="photoData"
                :list="photoData"
                ref="paginator"
                class="paginate-list"
                :per="10">
                <div class="grid grid-cols-3 gap-5 p-10">
                    <div
                        v-for="list in paginated('photoData')"
                        :key="list.id"
                        :list="list"
                        class="max-w rounded border border-gray-300 shadow-lg p-5">
                        <a v-bind:href="list.url" target="blank">
                            <img class="w-full" v-bind:src="list.thumbnailUrl">
                                <div class="py-2">
                                    <p class="text-gray-800">
                                        {{list.title}}
                                    </p>
                                </div>
                            </a>
                            <div class="py-2">
                                <router-link :to="'/photo/detail/'+list.id">
                                    <button
                                        class="rounded bg-blue-500 text-lg text-white p-2 border hover:bg-blue-600 focus:outline-none focus:border-white">
                                        Detail
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </paginate>
                <hr class="pt-5"/>
                <paginate-links for="photoData" :show-step-links="true"></paginate-links>
                <span v-if="$refs.paginator" class="pb-5">
                    Viewing
                    {{$refs.paginator.pageItemsCount}}
                    results
                </span>
            </div>
        </div>
    </template>

    <script>
        // @ is an alias to /src
        import photoDataAll from '@/dummy/photoData'

        export default {
            name: 'PhotoList',
            components: {},

            data: () => ({
                photoData: photoDataAll,
                paginate:['photoData']
                })
        }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style lang="sass">

li
  display: inline-block
  color:#428df5
  cursor: pointer
  font-weight: normal
  margin: 0 10px


li.active
  font-weight: bold
  color:#426af5
  
li.disabled a
  color: #ccc
  cursor: no-drop

</style>