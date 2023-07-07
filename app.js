document.addEventListener('alpine:init', () => {



    Alpine.data('editor', () => ({
        data: '',
        init() {
           this.data = 'Hello' 
        },
        doSomething() {
            return '<i>' + this.data + '</i>';
        },
        getCharCount() {
            return this.data.length
        }
    }));





});