<template>
    <div class="Widget">
        <div class="grid grid-cols-1 gap-5 p-10 bg-blue-200">
            <p class="text-blue-400">Widget Album</p>
            <div class="bg-gray-200">
                <a href="/album/detail/38">Trending</a>
            </div>
            <div class="bg-gray-200">
                <a href="/album/detail/29">Popular</a>
            </div>
            <div class="bg-gray-200">
                <a href="/album/detail/51">Most Visit</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WidgetAlbum'
        }
</script>