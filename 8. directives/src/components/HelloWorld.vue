<template>
  <div class="hello">
    
    <!-- Instead of using interpolation -->
    <span v-text="name"></span>

    <!-- Not update the component data every time -->
    <span v-once>{{ name }}</span>

    <!-- Output HTML and make the browser interpret it -->
    <span v-html="someHtml"></span>

    <!-- Bind Data -->
    <a v-bind:href="url">{{ linkText }}</a>
    <!-- Short Way to Bind Data -->
    <a :href="url">{{ linkText }}</a>

    <!-- Bind a Form Input Element | #Example1 -->
    <input v-model="message" placeholder="Enter a message">
    <p>Message is: {{ message }}</p>

    <!-- Bind a Form Input Element | #Example2 -->
    <select v-model="selected">
      <option disabled value="">Choose a fruit</option>
      <option>Apple</option>
      <option>Banana</option>
      <option>Strawberry</option>
    </select>

    <span>Fruit chosen: {{ selected }}</span>

    <!-- Using Expressions -->
    <span v-text="'Hi, ' + name + '!'"></span>
    <a :href="'https://' + domain + path">{{ linkText }}</a>

    <!-- Conditionals -->
    <span v-if="shouldShowThis">Hey!</span>

    <!-- Loops | Simple Array -->
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>

    <!-- Loops | Array of Objects -->
    <div>
      <!-- Usign interpolations -->
      <ul>
        <li v-for="todo in todos">{{ todo.title }}</li>
      </ul>

      <!-- Using v-text -->
      <ul>
        <li v-for="todo in todos" v-text="todo.title"></li>
      </ul>
    </div>

    <!-- v-for can give you the index -->
    <ul>
      <li v-for="(todo, index) in todos"></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      linkText: 'Test',
      shouldShowThis: true,
      items: ['car','bike','dog'],
      todos: [
        { id: 1, title: 'Do something' },
        { id: 2, title: 'Do something else' }
      ]
    }
  },
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
