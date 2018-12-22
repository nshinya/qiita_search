$('#search').on('click', function(){
    var word = $('#word').prop('value');
    
    if(word.length !=0){
        var qstr = encodeURI(word);
        console.log(qstr);
        $.getJSON('https://qiita.com/api/v2/items', 'query=' + qstr, function(data){
            console.log(data);
            for(var i=0;i<data.length;i++){
                $('<p>' + data[i].title + '</p>').appendTo('#items');
            }
        });
    }
});
