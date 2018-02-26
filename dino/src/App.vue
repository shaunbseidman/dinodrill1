<template>
<div id="app">
  <header-photo></header-photo>
  <main>
    <job-listing :listings="listings"></job-listing>
    <add-job :clickButton="clickButton"></add-job>
  </main>
  <footer-info></footer-info>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      apiURL: '../static/listings.json',
      listings: [],
    }
  },
  mounted() {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(response => {
        this.listings = response
      })
  },
  methods: {
    clickButton(listing) {
      this.listings.unshift(listing)
    }
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

body {
  margin: 0 30px 0 30px;
  padding: 0;
  font-family: sans-serif;
  color: #1B997A;
  display: grid;
  grid-template-rows: 15% 75% 10%;
}

main {
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 5% 42.5% 5% 42.5% 5%;
}

.side-bar {
  display: block;
}

main section {
  grid-column: 2/3;
}

main section h2 {
  margin: 0;
}

section {
  grid-column: 2/3;
}
</style>
