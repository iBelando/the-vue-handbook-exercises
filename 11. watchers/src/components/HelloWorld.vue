<template>
  <div class="hello">
    <p>My name is {{ name }}</p>
    <button @click="changeName()">Change my name!</button>
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
    changeName: function() {
      this.name = 'Nachus'
    }
  },
  watch: {
    name: function(newValue, oldValue) {
      console.log(newValue, oldValue);
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
