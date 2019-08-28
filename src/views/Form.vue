<template>
    <div>
        <div class="form">
            <br><br><br><br><br>
            <p class="custom-cart">カスタム&thinsp;＞カート&thinsp; </p>
            <br>
            <p class="cart">カート</p>
            <br><br>
            <div class="peper">
            </div>
            <div class="border">
            subtotal  &emsp;&emsp;&emsp;&emsp;50,000&thinsp; JPY
            </div>
            <div class="border-1">
            postage  &emsp;&emsp;&emsp;&emsp;500&thinsp; JPY
            </div>
            <div class="border-2">
            total  &emsp;&emsp;&emsp;&emsp;&emsp;50,500&thinsp; JPY
            </div>
            <div class="border-3">
            Ships&thinsp;by&thinsp;order&thinsp;within&thinsp;3&thinsp;hours&thinsp;by&thinsp;September&thinsp;4th
            </div>
            <button class="purchase">Purchase</button>

        </div>                                       
    </div>
</template>

<script>
    export default {
        name: "Form",
        data: function () {
            return {
                name: '',
                dedLine: '',
                difficulty: 0,
                usingTime: 0,
                times: [],
                place: [],
                feeling: 'Good',
                start: '',
                end: '',
                tmpPlace: '',
            };
        },
    }
</script>

<style scoped>
    .border{
   border-top: 1px solid #555555;    /* 上側の1本線 */
   border-bottom: 1px solid #555555; /* 下側の1本線 */
   margin-left: 20px;
   margin-right: 20px;
   font-size: 24px;
   color:#AAAAAA;
   text-align:left; 
   padding:5px;
    }
    .border-1{
   border-bottom: 1px solid #555555; /* 下側の1本線 */
   margin-left: 20px;
   margin-right: 20px;
   font-size: 24px;
   color:#AAAAAA;
   text-align:left; 
   padding:5px;
    }
    .border-2{
   margin-left: 20px;
   margin-right: 20px;
   font-size: 24px;
   color:#777777;
   text-align:left; 
   padding:5px;
   font-weight: bold;
    }
    .border-3{

   font-size: 13px;
   color:#777777;
   text-align:center; 
   padding:5px;
   font-weight: bold;
    }
    .border-JPY1{
        text-align:right; 
    }
    .custom-cart{
        text-align:left; 
        padding-left: 20px;
        color:#AAAAAA;
    }
    .form {
        height: 100vh;
        background:white;
    }
    .cart{
        text-align:left; 
        padding-left: 20px;
        color:#AAAAAA;
        width: 100%;
    }
    .peper{
        height:40%;
        width: 100%;
        background:white; /*色*/
    }
    .purchase{
        padding: .1em 1em;
        color: #FFF;
        background:#F4C822; /*色*/
        opacity:0.9;
        border-radius: 4px;
        text-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
        font-size: 27px;
        box-shadow: 2px 2px #AAAAAA;
        margin-top: 30px;
    }
</style>