

var app = new Vue({
    el: '#app',

    data: {
        inputText : "",
        response : "",
        show : false,
        words : []

        
    },

    methods: {
        
        saveWords: function():void
        {
            this.words.push(this.inputText)
            this.response = "Added '" + this.inputText + "' to list"
        },
        showWords: function():void
        {
            this.show = !this.show
            
        },
        clearWords: function():void
        {
            if(confirm("Are you sure you want to clear the list?"))
            {
                this.words = []
                this.show = false
                this.response ="Cleared word list"
            }
        }
    }
})