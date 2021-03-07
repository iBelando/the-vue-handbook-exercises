<template>
    <!-- If you already pass a variable -->
    <a @click="handleClick('something', $event)">Click me!</a>
</template>

<script>
export default {
    methods: {
        handleClick: function (text, event) {
            console.log(text);
            console.log(event);
        }
    }
}
</script>