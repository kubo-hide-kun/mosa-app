<template>
    <div id="app">
        <div class="bg">
            <img src="./assets/ULOCO.png" width="100%" height="100%">
        </div>
        <div id="nav" class="nav-bg">
            <router-link to="/peper">
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
* {
    margin: 0px;
    padding: 0px;
}
.bg{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        margin-top: 0px;
        overflow: hidden;
        z-index: 1;
}
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
   
    }

    #nav {
        padding:10px;
        background-color:white;
        position:fixed;
        z-index: 50;
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
