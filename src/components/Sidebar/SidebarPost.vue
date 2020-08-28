<template>

    <div class="Sidebar">
        <div
            class="flex grid grid-cols-1 mx-auto max-w-screen-lg overflow-hidden shadow-lg bg-gray-200 p-5">
            <p>Sidebar Post</p>
            <WidgetPost/>
        </div>
    </div>
</template>

<script>
import WidgetPost from '@/components/Widget/WidgetPost' 
    export default {
        name: 'SidebarPost',
        components:{
            WidgetPost
        }
        }
</script>