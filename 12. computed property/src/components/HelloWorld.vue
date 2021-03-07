<template>
  <p>{{ count }}</p>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3]
    }
  },
  computed: {
    count: function() {
      return 'The count is ' + this.items.length * 10
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
