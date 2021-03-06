<template>
    <p :style="{'text-decoration': decoration}">Hi!</p>
</template>

<script>
export default {
    data() {
        return {
            decoration: 'underline'
        }
    },
}
</script>