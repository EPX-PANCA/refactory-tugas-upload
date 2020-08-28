<template>
    <div>
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <div class="pt-5 flex mx-auto">
                <p>Photo Detail -  ID : {{$route.params.id}}</p>
            </div>
            <div class="grid grid-cols-1 gap-5 p-10">
                <div
                    v-for="list in photoData"
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
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
        // @ is an alias to /src
        import photoDataAll from '@/dummy/photoData'

        export default {
            name: 'PhotoDetail',
            components: {},

            data: () => ({photoData: []}),
            created() {
                return this.photoData = photoDataAll.filter(photo => {
                    return photo.id == this.$route.params.id
                })
            }
        }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped="scoped"></style>