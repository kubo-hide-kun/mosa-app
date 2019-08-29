<template>
<div class=bg>
<!--<img :src="imageSrc">-->

<img :src="img1[index1]" class="cart">
<img :src="img2[index2]"  class="cart">
<img :src="img3[index3]"  class="cart">
<center>
<div class="select">

    <div class="menu">
    <label for="menu_bar01"><img src="../assets/head-logo-1.png" class="select1"></label>
    <input type="checkbox" id="menu_bar01" class="accordion" />
    <ul id="links01">
        <li><img src="../assets/head-logo-1.png" class="select1" @click="head21"></li>
        <li><img src="../assets/head-logo-2.png" class="select1" @click="head20"></li>
    </ul>
    <label for="menu_bar02"><img src="../assets/body-logo-1.png" class="select1">2</label>
    <input type="checkbox" id="menu_bar02" class="accordion" />
    <ul id="links02">
        <li><img src="../assets/body-logo-1.png" class="select1" @click="body21"></li>
        <li><img src="../assets/body-logo-2.png" class="select1" @click="body20"></li>
    </ul>
    <label for="menu_bar03"><img src="../assets/leg-logo-1.png" class="select1"></label>
    <input type="checkbox" id="menu_bar03" class="accordion" />
    <ul id="links03">
        <li><img src="../assets/leg-logo-1.png" class="select1" @click="leg21"></li>
        <li><img src="../assets/leg-logo-2.png" class="select1" @click="leg20"></li>
    </ul>

</div>

</div>
</center>

</div>
</template>

<script>
export default {
    name: "Form",
    data: function(){
        return {
            index1: 0,
            index2: 0,
            index3: 0,
            img1: [require("../assets/head1.png"), require("../assets/head2.png")],
            img2: [require("../assets/body1.png"), require("../assets/body2.png")],
            img3: [require("../assets/leg1.png"), require("../assets/leg2.png")],
        };
    },
    methods: {
        head20(){
            this.index1 = 0;
        },
        head21(){
            this.index1 = 1;
        },
        body20(){
            this.index2 = 0;
        },
        body21(){
            this.index2 = 1;
        },
        leg20(){
            this.index3 = 0;
        },
        leg21(){
            this.index3 = 1;
        },
    }

}

</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}
.head{
margin-top: 50px;
background-color: white;
height:70px;
width: 100%;
border-radius: 10px 10px 10px 10px;
}
.bg{
    z-index: 20;
     position: absolute;
}
.cart{
    top:10%;
    height: 600px;
    width: 350px;
    position: absolute;
    transform: translateX(-40%);
    
}
.select {
top:20%;
height: 500px;
width: 80px;
float: left;
background-color: blanchedalmond;
position: absolute;
     border : solid 1px #333 ; 
}
.select1{
height: 100%;
width: 100%;
position:relative;
margin-left:0px;
margin-right:0px;
margin-top:0;
transform: translateX(-0%);
}




.menu {
    max-width: 400px;
    margin: 0 auto;
    padding: 0;
}

.menu a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #000;
    line-height: 1;
}

label {
    display: block;
    margin: 12px 0 2px 0;
    padding :12px;
    line-height: 1;
    color :#fff;
    background :white;
    cursor :pointer;
    border : solid 1px #333 ; 
    border-radius: 20px 20px 20px 20px;
}

input {
    display: none;
   
}

.menu ul {
    margin: 0;
    padding: 0;
    background :#f4f4f4;
    list-style: none;
    
    
}

.menu li {
    max-height: 0;
    overflow-y: hidden;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;

}

#menu_bar01:checked ~ #links01 li,
#menu_bar02:checked ~ #links02 li,
#menu_bar03:checked ~ #links03 li {
    max-height: 100px;
    opacity: 1;
}
</style>