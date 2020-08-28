<template>

    <div class="Sidebar">
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg overflow-hidden shadow-lg bg-gray-200 p-5">
            <p>Sidebar Album</p>
            <WidgetAlbum/>
        </div>
    </div>
</template>

<script>
    import WidgetAlbum from '@/components/Widget/WidgetAlbum'
    export default {
        name: 'SidebarAlbum', 
        components: {
            WidgetAlbum
        }
    }
</script>