function getDataFromServer() {
    var currentData = '#!@$GGG';

    $.ajax({
        url: '/myUrl',
        success: function(response) {
        alert('Request ' + currentData + ' returned')
        }
    });
}