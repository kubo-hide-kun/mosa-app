<template>
<div id="haiku-show" class="haiku-show">
  <transition name="fade">
    <img :src="images[index]" :key="images[index]" height="213" class="haiku-list">
  </transition>
</div>
</template>

<script>
export default {
  name: 'recieve',
  data() {
    return{
      index: 0,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
        "https://cdn.worldvectorlogo.com/logos/react.svg",
        "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
      ]
    }
  },
  mounted() {
    setInterval(() => {
      this.index = this.index < this.images.length-1 ? this.index+1 : 0;
    },3000);
  },
}
</script>
<style scoped>
.haiku-list {
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  position: absolute;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>