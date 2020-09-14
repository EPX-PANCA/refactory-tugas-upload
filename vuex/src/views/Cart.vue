<template>
    <div class="cart">
        <div class="flex bg-gray-300">
            <ListCart/>
            <SidebarCart/>
        </div>
    </div>
</template>

<script>

    import ListCart from '@/components/Cart/ListCart.vue'
    import SidebarCart from '@/components/Cart/SidebarCart.vue'

export default {
    name: 'Cart',
  components: {
    ListCart,
    SidebarCart,
  },
}
</script>