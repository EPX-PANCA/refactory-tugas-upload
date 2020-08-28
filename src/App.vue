<template>
    <div id="app">
        <div id="nav">
            <!-- <router-link to="/about">About</router-link> -->
            <NavBar/>
        </div>

        <router-view/>
        <Footer/>
    </div>
</template>

<script>

    import NavBar from './components/NavBar.vue'
    import Footer from './components/Footer.vue'

    export default {
        components: {
            NavBar,
            Footer
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: white;
    }

    #nav a:hover {
        color: gray;
    }
</style>