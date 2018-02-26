<template lang="html">
  <header>
    <img src="../assets/g-dino.png" alt="">
    </header>
</template>

<script>
export default {
  data: function() {
    return {}
  },
  methods: {}

}
</script>

<style lang="css">
header {
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 25% 50% 15%;
  grid-template-rows: 50% 50%;
  padding-top: 10px;
}
img {
  grid-row: 1/3;
  grid-column: 1/2;
  height: 100px;
  width: auto;
}
header h1 {
  grid-row: 1/2;
  grid-column: 2/3;
  margin: 0;
  color: #C261CC;
  font-family: serif;
}
</style>
