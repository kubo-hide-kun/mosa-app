<template>
    <div>
        <button class="touku" @click="touku">投句
        </button>
        <textarea class="paper" v-model="haiku"/>
    </div>
</template>

<script>
    export default {
        name: "touku",
        data() {
            return {
                haiku: "",
            };
        },
        methods: {
            touku() {
                let h = this.haiku.split(/\r\n|\r|\n/)


                fetch('http://127.0.0.1:5042/haiku', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "first": h[0],
                        "second": h[1],
                        "third": h[2]
                    })
                }).then(r => r.json()).then(j => console.log(j))

                this.$router.push('/timeline')
            }
        }
    };
</script>
<style scoped>
    .paper {
        top: 15%;
        left: 50%;
        height: 60%;
        width: 80%;
        transform: translateX(-50%);
        z-index: 60;
        position: absolute;
        padding: 4%;
        background-color: #FFFFFF;
        border: solid 10px #1D5329;
        box-shadow: 5px 2px 0px 0px rgba(0, 0, 0, 0.8);
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-size: 40px;
        font-family:"YuMin-Medium";
    }

    .touku {
        top: 4%;
        right: 5%;
        position: absolute;
        z-index: 60;
        background: #FFF; /*ボタン色*/
        color: #222;
        border-radius: 3px;
        padding: 4px;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        font-family:"YuMin-Medium";
        font-size: 20px;
        border-radius: 40% 40% 40% 40%;
        box-shadow: 2px 1px 0px 0px rgba(0, 0, 0, 0.8);
    }
</style>
