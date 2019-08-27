<template>
    <div class="outer">
        <!--        <div class="input-word">-->
        <!--            単語: <input v-model="kigo"/>-->
        <!--        </div>-->

        <!--        <div class="input-img">-->
        <!--            <label class="input-item__label" v-show="!uploadedImage">-->
        <!--                画像を選択-->
        <!--                <input type="file" @change="onFileChange"/>-->
        <!--            </label>-->
        <!--        </div>-->

        <!--&lt;!&ndash;        <div class="show-img" v-show="uploadedImage">&ndash;&gt;-->
        <!--&lt;!&ndash;            <img :src="uploadedImage"/>&ndash;&gt;-->
        <!--&lt;!&ndash;        </div>&ndash;&gt;-->


        <!--        <div v-show="uploadedImage" @click="remove" key="send-img"><p>{{img_name}} x </p></div>-->
        <!--        <div v-show="uploadedImage && kigo">-->
        <!--            <button>投句</button>-->
        <!--        </div>-->
        <button class="ginko" @click="upload">吟行</button>

        <div class="send">


            <div class="input-kigo">
                <input v-model="kigo">
            </div>
            <div class="input-image">
                <div>
                    <input type="file" @change="onFileChange">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "send",
        data() {
            return {
                uploadedImage: false,
                img_name: '',
                kigo: '',
                image: null
            };
        },
        methods: {
            onFileChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                // this.createImage(files[0]);
                // this.img_name = files[0].name;
                this.image = files[0]
            },
            // createImage(file) {
            //     let reader = new FileReader();
            //     reader.onload = e => {
            //         this.uploadedImage = e.target.result;
            //
            //     };
            //     reader.readAsDataURL(file);
            // },
            upload() {
                let formdata = new FormData()
                formdata.append('image', this.image)

                let params = new URLSearchParams()
                params.append('kigo', this.kigo)

                fetch('http://127.0.0.1:5042/upload' + '?' + params.toString(), {
                    method: 'POST',
                    body: formdata
                }).then(r => r.json()).then(j => console.log(j))

                this.$router.push('/timeline')

            },
            remove() {
                this.uploadedImage = '';
            }
        }
    };
</script>
<style scoped>
    /*.send {*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    height: 100%;*/
    /*    border:solid 10px black;*/


    /*}*/

    .outer {
        /*position: fixed;*/

    }

    .ginko {
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


    .send {
        top: 12%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 60;
        position: absolute;
        height: 75%;
        width: 100%;

        display: flex;
        flex-direction: column;
    }


    .input-kigo {
        color: red;
        height: 50%;
        display: flex;
        align-items: center;
    }

    .input-kigo > input {
        width: 100%;
        height: 80%;
        /*background-color: rgba( 204, 255, 204, 0 );*/

        text-align: center;
        font-size: 20px;
    }

    .input-image {
        height: 50%;
        display: flex;
        align-items: center;
    }

    .input-image > div {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column; /* 子要素をflexboxにより縦方向に揃える */
        justify-content: center; /* 子要素をflexboxにより中央に配置する */
        align-items: center; /* 子要素をflexboxにより中央に配置する */
        background-color: #FFFFFF;
    }

    .input-image > div > input {
        width: 100%;
        height: 100%;
        background: url(../assets/ginkou_on.png) center no-repeat;

    }

    /*.input-image >*/


    /*label > input {*/
    /*    display: none;*/
    /*}*/
</style>
