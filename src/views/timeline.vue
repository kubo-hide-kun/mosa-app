<template>
    <div class="timeline">
        <div class="yokonaga" v-for="haiku in haikus" :key="haiku.id">
            <router-link :to="{ name : 'preview', params : { id: haiku.id }}">
                <div>{{haiku.first}}</div>
                <div>{{haiku.second}}</div>
                <div>{{haiku.third}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'recieve',
        data() {
            return {
                haikus: null,
            }
        },
        mounted() {
            fetch('http://127.0.0.1:5042/haiku')
                .then(r => r.json()).then(j => this.haikus = j)

        }


    }
</script>
<style scoped>

    .timeline {
        top: 15%;
        left: 50%;
        width: 70%;
        z-index: 60;
        position: fixed;
    }

    .yokonaga {
        transform: translateX(-50%);
        font-family: "KouzanBrushFontSousyoOTF", "游明朝体+36ポかな", "游明朝体";
        padding: 10px;
        margin-bottom: 10px;
        z-index: 20;
        background-color: rgba(255, 255, 255, 0.6);
        width: 100%;
        font-weight: bold;
        background-color: #FFFFFF;
        border: solid 10px #1D5329;
        box-shadow: 5px 2px 0px 0px rgba(0, 0, 0, 0.8);
    }

</style>
