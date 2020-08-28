<template>

    <div class="Sidebar">
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg overflow-hidden shadow-lg bg-gray-200 p-5">
            <p>Sidebar Photo</p>
            <WidgetPhoto/>
        </div>
    </div>
</template>

<script>
    import WidgetPhoto from '@/components/Widget/WidgetPhoto'
    export default {
        name: 'SidebarPhoto',
        components:{
            WidgetPhoto
        }
        }
</script>