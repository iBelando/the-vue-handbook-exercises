<template>
  <div class="hello">
    <!-- Access the original event object -->
    <a @click="handleClick($event)">Click me!</a>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick: function (event) {
      console.log(event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
