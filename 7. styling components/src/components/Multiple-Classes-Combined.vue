<template>
    <p :class="[decoration, {weight: isBold}]">Hi!</p>
</template>

<script>
export default {
    data() {
        return {
            decoration: true,
            isBold: true
        }
    },
}
</script>

<style>
.underline {
    text-decoration: underline;
}

.weight {
    font-weight: bold;
}
</style>