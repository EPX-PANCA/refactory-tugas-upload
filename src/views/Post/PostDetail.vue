<template>
    <div>
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <div class="pt-5 flex mx-auto"></div>
            <p>Post Detail -  ID : {{$route.params.id}}</p>
            <div class="grid grid-cols-1 gap-5 p-10">
                <div
                    v-for="post in postData"
                    :key="post.id"
                    :list="post"
                    class="max-w rounded border border-gray-300 shadow-lg p-5">
                    <div class="p-5 bg-blue-200">
                        <p class="text-gray-800 ">
                            {{post.title}}
                        </p>
                    </div>
                     <div class="py-2">
                                <p class="text-gray-800">
                                    {{post.body}}
                                </p>
                            </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import postDataAll from '@/dummy/postData'

    export default {
        name: 'PostDetail',
        props:['id'],
        components: {},
        data: () => ({
            postData: []
            }),
        created() {
            return this.postData = postDataAll.filter(post => {
                return post.id == this.$route.params.id
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped"></style>