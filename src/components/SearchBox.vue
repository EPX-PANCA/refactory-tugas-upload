<template>
    <div class="p-10">
        <div
            class="mx-auto max-w-screen-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <div class="p-10">
                <input
                    v-model="searching"
                    class="flex mx-auto w-full font-sans text-lg p-1 rounded bg-gray-300 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    placeholder="Search Here....">
                    <p class="pt-5 text-blue-300 font-bold">{{status}}</p>

                </div>
            </div>
        </div>

    </template>

    <script>
        export default {
            name: 'SearchBox',
            props: ['status'],
            data: () => ({searching: ''}),

            watch: {
                searching: function () {
                    this.$emit('searching-data', this.searching)
                }
            }

        }
    </script>