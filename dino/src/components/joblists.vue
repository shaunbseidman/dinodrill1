<template lang="html">
  <section id = 'joblists'>
        <h2>Job Listings</h2>
        <ul id="job-listings" v-for="listing in listings" :key="listing.title">
          <li>
            <h4>{{listing.title}}</h4>
            <small>{{listing.pay}}</small>
            <p>{{listing.description}}</p>
            <small>{{listing.interested.length}} dinos are interested in this job</small>
     </li>
        </ul>
      </section>
</template>


<script>
export default {
  name: 'joblists',
  props: {
    listings: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      jobHeadingText: 'Job Listings',
    }
  },
  methods: {}
}
</script>

<style lang="css">
#job-listings li {
  display: flex;
  flex-flow: column;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  padding: 10px;
}
h2{
  margin: 0;
  color: #61CCB1;
}
ul {
  list-style: none;
}
h4 {
  margin: 0;
}
small {
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}

p {
  font-size: .8rem;
}
</style>
