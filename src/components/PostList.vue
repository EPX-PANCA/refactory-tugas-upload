<template>
    <div class="p-10">
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <div class="pt-5 flex mx-auto">
                <p class="text-lg font-sans font-bold text-blue-600">Filtered List Result</p>
            </div>
            <div v-if="listData.length !==0">
                <div class="grid grid-cols-3 gap-5 p-10">
                    <div
                        v-for="list in listData"
                        :key="list.id"
                        :list="list"
                        class="max-w rounded border border-gray-300 transform transition duration-200 hover:scale-95 hover:bg-gray-100 shadow-lg p-5">
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
                <div v-else>
                    <div class="mx-auto max-w-screen-lg pt-5 pl-10 pr-10 pb-10">
                        <p class="text-gray-500 font-bold text-center text-2xl">Data Not Found</p>
                    </div>
                </div>
            </div>
        </div>

    </template>

    <script>
        export default {name: 'PostList', props: ['list-data']}
    </script>