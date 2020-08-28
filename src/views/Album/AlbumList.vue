<template>
    <div>
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <div class="pt-5 flex mx-auto"></div>
            <paginate
                name="albumData"
                :list="albumData"
                ref="paginator"
                class="paginate-list"
                :per="10">

                <div class="grid grid-cols-3 gap-5 p-10">
                    <div
                        v-for="album in paginated('albumData')"
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
            </paginate>
            <hr class="pt-5"/>
            <paginate-links for="albumData" :show-step-links="true"></paginate-links>
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
    import albumDataAll from '@/dummy/albumData'

    export default {
        name: 'AlbumList',
        components: {},

        data: () => ({
            albumData: albumDataAll, 
            paginate: ['albumData']})
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped"></style>