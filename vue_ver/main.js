new Vue({
    el: '#app',
    data: {
        word: '',
        items: [],
    },
    methods: {
        search: function(){
            if(this.word.length !=0){
                var qstr = encodeURI(this.word);
                console.log(qstr);
                self = this;
                $.getJSON('https://qiita.com/api/v2/items', 'query=' + qstr, function(data){
                    console.log(data);
                    self.items = data;
                });
            }
        }
    }
});
