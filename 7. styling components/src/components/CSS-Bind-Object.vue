<template>
    <p :class="paragraphClass">Hi!</p>
</template>

<script>
export default {
    data() {
        return {
            paragraphClass: 'underline'
        }
    },
}
</script>

<style>
    .underline {
        text-decoration: underline;
    }
</style>