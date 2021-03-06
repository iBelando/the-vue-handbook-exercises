<template>
    <p :class="{underline: isUnderlined, weight: isBold}">Hi!</p>
</template>

<script>
export default {
    data() {
        return {
            isUnderlined: true,
            isBold: true
        }
    },
}
</script>

<style>
.underline { text-decoration: underline; }
.weight { font-weight: bold; }
</style>