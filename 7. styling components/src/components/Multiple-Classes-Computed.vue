<template>
    <p :class="paragraphClasses">Hi!</p>
</template>

<script>
export default {
    data() {
        return {
            isUnderlined: true,
            isBold: true
        }
    },
    computed: {
        paragraphClasses: function() {
            return {
                underlined: this.underlined,
                bold: this.bold
            }
        }
    },
}
</script>

<style>
.underlined {
    text-decoration: underline;
}

.bold {
    font-weight: bold;
}
</style>