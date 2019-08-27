<template>
    <center>

        <div id="wrapper">
            <div class="fireworks"><p id="p">はいくゆう</p></div>

            <!--画面遷移アニメーション-->
            <transition name="page">
                <router-view/>
            </transition>
            <center>

                <div class="wrapper">
                    <img src="./assets/bom1.jpg" width="100%" height="100%">

                    <div class="container">
                        <ul class="bg-bubbles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </center>
        </div>


        <!--ナビゲーションバーのリンク先-->
        <div id="nav" class="fire">
            <!--Homeページ-->
            <router-link to="/touku" id="touku" class="touku">
                <button type="button"><img src="./assets/toukou＠2x.png" class="toukou"></button>
            </router-link>
            <!--<router-link to="/">Home</router-link> -->
            <!--aboutページを無効化-->
            <!-- <router-link to="/about">About</router-link> -->
            <!--Formページ-->
            <router-link to="/timeline" id="kukai" class="preview">
                <img src="./assets/kukai_off@2x.png" class="bar" id="gazo">
            </router-link>

            <!--Formページ-->
            <router-link to="/send" id="ginkou" class="ginkou">
                <img src="./assets/ginkou_off@2x.png" class="bar">

            </router-link>
        </div>

    </center>

</template>
<script>
</script>
<style>
    .toukou {
        width: 75px;
        height: 75px;
        position: absolute;
        z-index: 80;
        bottom: 20%;
        transform: translateX(-50%);
    }

    .bar {
        width: 60%;
        height: 60%;
        padding-top: 20%;
    }

    .preview {
        float: left;
        padding-left: 1%;
        margin-top: 8px;
    }

    .ginkou {
        float: right;
        padding-right: 1%;
    }

    #template {
        font-family: "Yu Mincho Light", "YuMincho", ‘Yu Mincho’, ‘游明朝体‘, ’ヒラギノ明朝 ProN’, ‘Hiragino Mincho ProN’, ‘游明朝体+36 ポかな’, ’YuMincho+36 p Kana’, ‘HanziPen TC’, cursive;

    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }

    #nav {
        padding: 0px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #FE2E64;
    }

    .page-enter-active, .page-leave-active {
        transition: opacity 1s, transform 1s;
    }

    .page-enter, .page-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }

    #wrapper {
        width: 100%;
        overflow: hidden;
    }

    .fire {
        color: #FE2E2E;
        font-size: 24px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        z-index: 80;
        height: 13%;
        font-size: 70px;
        background-color: #E7FBD4;
        font-family: "KouzanBrushFontSousyoOTF", "游明朝体+36ポかな", "游明朝体";
        background-color: rgba(255, 255, 255, 0.6);
        position: fixed;
    }

    .fireworks {
        width: 100%;
        height: 12%;
        background-color: rgba(255, 255, 255, 0.9);
        color: #000;
        font-size: 40px;
        font-family: "KouzanBrushFontSousyoOTF", "游明朝体+36ポかな", "游明朝体";
        text-shadow: 0 0 1px #000;
        margin: 0;
        padding: 0;
        overflow: hidden;
        position: fixed;
        z-index: 1;
    }

    #p {
        margin: 10px;
    }

    .wrapper {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        margin-top: 0px;
        overflow: hidden;
    }

    .wrapper.form-success .container h1 {
        -webkit-transform: translateY(85px);
        transform: translateY(85px);
    }

    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 0 0;
        height: 400px;
        text-align: center;
    }

    .container h1 {
        font-size: 40px;
        -webkit-transition-duration: 1s;
        transition-duration: 1s;
        -webkit-transition-timing-function: ease-in-put;
        transition-timing-function: ease-in-put;
        font-weight: 200;
    }

    .bg-bubbles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .bg-bubbles li {
        position: absolute;
        list-style: none;
        display: block;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        bottom: -160px;
        -webkit-animation: square 25s infinite;
        animation: square 25s infinite;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
    }

    .bg-bubbles li:nth-child(1) {
        left: 10%;
    }

    .bg-bubbles li:nth-child(2) {
        left: 20%;
        width: 80px;
        height: 80px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 17s;
        animation-duration: 17s;
    }

    .bg-bubbles li:nth-child(3) {
        left: 25%;
        -webkit-animation-delay: 4s;
        animation-delay: 4s;
    }

    .bg-bubbles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        -webkit-animation-duration: 22s;
        animation-duration: 22s;
        background-color: rgba(255, 255, 255, 0.25);
    }

    .bg-bubbles li:nth-child(5) {
        left: 70%;
    }

    .bg-bubbles li:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
    }

    .bg-bubbles li:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 7s;
        animation-delay: 7s;
    }

    .bg-bubbles li:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        -webkit-animation-delay: 15s;
        animation-delay: 15s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
    }

    .bg-bubbles li:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
        background-color: rgba(255, 255, 255, 0.3);
    }

    .bg-bubbles li:nth-child(10) {
        left: 90%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 11s;
        animation-delay: 11s;
    }

    @-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
        }
    }

    @keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
        }
    }

</style>
