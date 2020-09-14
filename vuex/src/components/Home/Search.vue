<template>
    <div class="search">
           
                <div class="p-10">
                    <input
                        :value="searching"
                        @input="updateSearching"
                        class="flex mx-auto w-full font-sans text-lg p-1 rounded bg-gray-300 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500"
                        type="text"
                        placeholder="Search Here....">
                        <p class="pt-5 text-blue-300 font-bold">{{searching}}</p>
                    </div>
        </div>
    </template>

    <script>
    import {mapState} from 'vuex'
        export default {
            name: 'Search',
            // props: ['status'],
            // data: () => ({searching: ''}),

            // watch: {
            //     searching: function () {
            //         this.$emit('searching-data', this.searching)
            //     }
            // },

            computed: {
                ...mapState({
                    searching: state => state.keyword
                }),
                ...mapState(['keyword']),
            },

            methods: {
                updateSearching (e) {
                    this.$store.commit('updateSearching', e.target.value)
                    }
            },

        }
    </script>