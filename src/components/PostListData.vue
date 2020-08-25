<template>
    <div class="p-10">
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <div class="pt-5 flex mx-auto">
                <p class="text-lg font-sans font-bold text-blue-600">List Item</p>
            </div>
            <div class="grid grid-cols-3 gap-5 p-10">
                <div
                    v-for="list in listData"
                    :key="list.id"
                    :list="list"
                    :click="click"
                    class="max-w rounded border border-gray-300 transform transition duration-200 hover:scale-95 hover:bg-gray-100 shadow-lg p-5">
                     <a v-bind:href="list.url" target="blank">
                        <img class="w-full" v-bind:src="list.thumbnailUrl">
                            <div class="py-2">
                                <p class="text-gray-800">
                                    {{list.title}}
                                </p>
                            </div>
                            </a>
                            <div class="py-2 text-blue-400 font-bold ">
                                {{list.price | currency }}
                            </div>
                            <div class="py-2">
                                <button @click="click(list)" class="rounded bg-blue-500 text-lg text-white p-2 border hover:bg-blue-600 focus:outline-none focus:border-white">
                                Add To Cart
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    </template>

    <script>
        export default {
            name: 'PostListData', 
            props: ['list-data', 'click'],

}
    </script>