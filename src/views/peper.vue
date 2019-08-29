<template>
<div class=bg>
<!--<img :src="imageSrc">-->

<img src="../assets/head2.png" class="cart">
<img src="../assets/body1.png" class="cart">
<img src="../assets/leg1.png" class="cart">
<center>
<div class="select">

    <div class="menu">
    <label for="menu_bar01"><img src="../assets/head-logo-1.png" class="select1"></label>
    <input type="checkbox" id="menu_bar01" class="accordion" />
    <ul id="links01">
        <li><a href=""><img src="../assets/head-logo-1.png" class="select1"></a></li>
        <li><a href=""><img src="../assets/head-logo-2.png" class="select1"></a></li>
    </ul>
    <label for="menu_bar02"><img src="../assets/body-logo-1.png" class="select1">2</label>
    <input type="checkbox" id="menu_bar02" class="accordion" />
    <ul id="links02">
        <li><a href=""><img src="../assets/body-logo-1.png" class="select1"></a></li>
        <li><a href=""><img src="../assets/body-logo-2.png" class="select1"></a></li>
    </ul>
    <label for="menu_bar03"><img src="../assets/leg-logo-1.png" class="select1"></label>
    <input type="checkbox" id="menu_bar03" class="accordion" />
    <ul id="links03">
        <li><a href=""><img src="../assets/leg-logo-1.png" class="select1"></a></li>
        <li><a href=""><img src="../assets/leg-logo-2.png" class="select1"></a></li>
    </ul>

</div>

</div>

</center>
 <p class="yame">八女提灯</p>
 <p class="yame-sp">Yame&thinsp;Lantern</p>
 <p class="yame-JPY">50,000&thinsp;JPY</p>

            <router-link to="/form">
          
            <img src="../assets/sakura.png" class="sakura">
           <p class="decision">Decision</p>
  
            </router-link>
</div>
</template>

<script>
export default {
    name: "Form",
}
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

.decision{
    bottom:1%;
    text-align:right; 
    right: 20px;
    color:#AAAAAA;
    font-size: 20px;
    z-index: 90;
    position: absolute;
    font-weight: 600; 
}
.sakura{
    right:10px;
    padding-right: 0px;
    height: 100px;
    width: 100px;
    position: absolute;
    z-index: 90;
    bottom:4%;
}
.yame{
    bottom:10%;
    text-align:left; 
    padding-left: 20px;
    color:#000000;
    font-size: 30px;
    z-index: 90;
    position: absolute;
    font-weight: 600; 
}
.yame-sp{
    bottom:8%;
    text-align:left; 
    padding-left: 20px;
    color:#808080;
    font-size: 20px;
    z-index: 90;
    position: absolute;
    font-weight: 600; 
}
.yame-JPY{
    bottom:3%;
    text-align:left; 
    padding-left: 20px;
    color:#AAAAAA;
    font-size: 20px;
    z-index: 90;
    position: absolute;
    font-weight: 600; 
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