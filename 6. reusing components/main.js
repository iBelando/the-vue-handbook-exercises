Vue.component('user-name', {
    props: ['name'],
    template: '<p>Hi {{name}}</p>'
})

new Vue({
    el: '#app'
})