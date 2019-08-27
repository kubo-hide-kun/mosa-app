<template>
    <div class="preview">
        <center>
            <section class="tategaki" v-if="haiku !== null">

                <div class="farst">{{haiku.first}}</div>
                <div class="second">{{haiku.second}}</div>
                <div class="third">{{haiku.third}}</div>

            </section>

            <div id="haiku-show" class="haiku-show" v-if="haiku !== null">
                <transition name="fade">
                    <img :src="haiku.images[index]" :key="haiku.images[index]" height="213" class="haiku-list">
                </transition>
            </div>

        </center>

        <!--<button class="fab" type="submit" @click="onsubmit"><img src="../assets/hude.png" width="60" height="60"></button>-->

    </div>
</template>

<script>
    export default {
        name: 'recieve',
        data() {
            return {
                index: 0,
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
                    "https://cdn.worldvectorlogo.com/logos/react.svg",
                    "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
                ],
                haiku: null
            }
        },
        mounted() {

            fetch('http://127.0.0.1:5042/haiku/' + this.$route.params.id)
                .then(r => r.json()).then(j => this.haiku = j)

            setInterval(() => {
                this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
                console.log(this.haiku)
            }, 3000);
        },
    }
</script>
<style scoped>
    .farst {
        margin: 0px;
    }

    .second {
        margin: 0px;
    }

    .preview {
        top: 15%;
        left: 50%;
        height: 65%;
        width: 60%;
        transform: translateX(-50%);
        z-index: 60;
        position: absolute;
        background-color: #FFFFFF;
        border: solid 10px #1D5329;
        box-shadow: 5px 2px 0px 0px rgba(0, 0, 0, 0.8);
        margin: 0px;
    }

    .fab {
        position: fixed;
        right: -100px;

        transition: all 0.1s ease-in-out;
    }

    .fab:hover {
        box-shadow: 0 6px 14px 0 #666;
        transform: scale(1.05);
    }

    .tategaki {
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 60px;
        font-family:"YuMin-Medium";
        padding-top: 0px;
        z-index: 60;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.6);
        width: 100%;
        font-weight: bold;
    }

    .haiku-list {
        bottom: 30%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 50;
        position: absolute;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>
