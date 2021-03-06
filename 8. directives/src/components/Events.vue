<template>

    <!-- v-on allows you to listen the DOM events -->
    <a v-on:click="handleClick">Click me!</a>

    <!-- Pass parameters to any event -->
    <a v-on:click="handleClick2('test')">Click me!</a>

    <!-- Single expression directly in the template -->
    <a v-on:click="counter = counter + 1">{{ counter }}</a>

    <!-- Shorthand syntax -->
    <a v-on:click="handleClick">Click me!</a>
    <a @:click="handleClcik">Click me!</a>

    <!-- SHOW or HIDE | v-show = display: none; -->
    <p v-show="isTrue">Something</p>

    <!-- DIRECTIVE MODIFIERS -->
    <!-- In this case, the form doesn't cause the page reloaded, which is the default behavior -->
    <form v-on:submit.prevent="formSubmitted"></form>

    <!-- 
        Other modifiers are:
                - .stop
                - .capture
                - .self
                - .once
                - .passive
    -->

</template>

<scrip>
export default {
    data: function() {
        return {
            counter: 0,
            isTrue: true
        }
    },
    methods: {
        handleClick: function() {
            alert('test');
        },
        handleClick2: function(value) {
            alert(value);
        }
    },
}
</scrip>