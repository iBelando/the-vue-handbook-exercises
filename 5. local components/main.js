const Sidebar = {
    template: '<aside>Sidebar</aside>'
}

new Vue({
    el: '#app',
    components: {
        Sidebar
    }
})

//  Another method is the next
//  import Sidebar from './Sidebar'
// export default {
//     el: '#app',
//     components: {
//         Sidebar
//     }
// }