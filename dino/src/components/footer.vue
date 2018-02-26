<template lang="html">
  <footer>
      <small>{{footerText}}</small>
    </footer>
</template>

<script>
export default {
  data: function() {
    return {
      footerText: 'Copyright 2018',
    }
  }
}
</script>

<style lang="css">
footer{
  position: absolute;
  bottom: "0";
  padding: "5px";
  margin: "0 auto";
  margin: 0 auto;
  }
small{
  margin: 0 auto;
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}
</style>
