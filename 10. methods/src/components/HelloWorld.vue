<template>
  <div class="hello">
    <!-- How to access data from a method -->
    <a @click="handleClick()">Click me!</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Nacho'
    }
  },
  methods: {
    handleClick: function() {
      //  We don't have to use this.data.name. It'll raise an error
      console.log(this.name);
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
