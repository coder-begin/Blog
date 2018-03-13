function getCSRF() {
    var cookies = document.cookie.toString().split(';');
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].indexOf('csrftoken') > -1) {
            console.log(cookies[i])
            return cookies[i].substr(cookies[i].indexOf('=') + 1)
        }
    }
}