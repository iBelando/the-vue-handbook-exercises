<template>
    <p :class="{underline: isUnderlined}">Hi!</p>
</template>

<script>
export default {
    data() {
        return {
            isUnderlined: true
        }
    },
}
</script>

<style>
.underline {
    text-decoration: underline;
}
</style>