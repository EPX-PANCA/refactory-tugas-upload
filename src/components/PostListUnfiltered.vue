<template>
    <div class="p-10">
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <div class="pt-5 flex mx-auto">
                <p class="text-lg font-sans font-bold text-blue-600">List Data (Unfiltered)</p>
            </div>
            <div class="grid grid-cols-3 gap-5 p-10">
                <div
                    v-for="list in listsData"
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
        </div>

    </template>

    <script>
        export default {name: 'PostListUnfiltered', props: ['lists-data']}
    </script>