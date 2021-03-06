<template>
    <p :style="styling">Hi!</p>
</template>

<script>
export default {
    data() {
        return {
            textDecoration: 'underline',
            textWeight: 'bold'
        }
    },
    computed: {
        styling: function() {
            return {
                textDecoration: this.textDecoration,
                textWeight: this.textWeight
            }
        }
    }
}
</script>