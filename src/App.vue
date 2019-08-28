<template>
    <div id="app">


        <div id="nav" class="nav-bg">
            <router-link to="/home">
            <img src="./assets/paper.png" class="cart">
            </router-link>
            <img src="./assets/logo.png" class="logo">
            
            <!--      <router-link to="/about">About</router-link> |-->
            <router-link to="/form">
            <img src="./assets/cart.png" class="paper">
            </router-link>
        </div>

        <transition name="page">
            <router-view/>
        </transition>
    </div>
</template>

<style>
    .logo{
        height: 15%;
        width: 15%;
    }
    .cart{
        height: 11%;
        width: 11%;
        float: left;
    }
    .paper{
        height: 11%;
        width: 11%;
        float: right;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background: url('./assets/ULOCO.png');
        height:100%;
        width: 100%;
    }

    #nav {
        padding:10px;
        background-color:white;
        position:fixed;
    }
    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .page-enter-active, .page-leave-active {
        transition: opacity 1s, transform 1s;
    }
    .page-enter, .page-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }
</style>
