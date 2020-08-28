<template>
<div class="pb-10">
            <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <div
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                            <router-link :to="{name:'Home'}">Home</router-link>
                        </div>
                        <div
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                            <router-link :to="{name:'PostList'}">Post</router-link>
                        </div>
                        <div
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                            <router-link :to="{name:'PhotoList'}">Photo</router-link>
                        </div>
                        <div
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                            <router-link :to="{name:'AlbumList'}">Album</router-link>
                        </div>
                    </div>
                </div>
            </nav>
</div>
</template>

<script>
export default {
    name:'NavBar',
    
}
</script>