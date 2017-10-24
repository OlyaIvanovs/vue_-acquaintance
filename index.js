new Vue({
    el: '#app',
    data: {
        title: "Hello, world!"
    },
    methods: {
        changeTitle() {
            this.title = "New Title";
        }
    }
});

new Vue({
    el: '#app_class',
    data: {
        cssClass: ''
    }
});

new Vue({
    el: '#app_increment',
    data: {
        clicks: 0,
    },
    methods: {
        increment() {
            this.clicks++;
        }
    },
    computed: {
        counter: function() {
            return this.clicks * 2;
        }
    }
});

new Vue({
    el: "#show_hide_app",
    data: {
        show: true,
        persons: {
            {name: 'Olga', age: 29},
            {name: 'Ivan', age: 32},
            {name: 'Michael', age: 3},
            {name: 'Tim', age: 1},
        }
    },
    methods: {

    },

})

