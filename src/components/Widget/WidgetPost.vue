<template>
    <div class="Widget">
        <div class="grid grid-cols-1 gap-5 p-10 bg-blue-200">
            <p class="text-blue-400">Widget Post</p>
            <div class="bg-gray-200">
                <a href="/post/detail/48">Trending</a>
            </div>
            <div class="bg-gray-200">
                <a href="/post/detail/19">Popular</a>
            </div>
            <div class="bg-gray-200">
                <a href="/post/detail/4">Most Read</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {name: 'WidgetPost'}
</script>