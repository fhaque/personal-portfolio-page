//menu animation, pure Javascript
document.getElementById('main-nav_burger').addEventListener('click', function(e) {
    document.getElementById('main-nav').classList.toggle('open');
    document.getElementById('main-nav_menu').classList.toggle('open');
    e.stopPropagation();
});

var body = document.body;
var html = document.documentElement;

//credit: https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
var doc_height = Math.max( body.scrollHeight, body.offsetHeight, 
               html.clientHeight, html.scrollHeight, html.offsetHeight );

//Scroll animation, pure Javascript
var main_nav_links = document.getElementById('main-nav_menu').getElementsByTagName('a');
for (key in main_nav_links) {
    if (!main_nav_links.hasOwnProperty(key)) continue;

    let element = main_nav_links[key];
    console.log(element);
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        var href = element.getAttribute('href');
        var target = document.getElementById(href.substr(1));
        scroll_To(target);
        console.log(target);
    });   

}

//Idea by: https://stackoverflow.com/questions/12102118/scrollintoview-animation
function scroll_To(element) {
    var y = body.scrollTop;
    var pos = element.offsetTop;
    y += (pos - y) * 0.1;
    if (Math.abs(y - pos) < 10 || window.scrollY + doc_height === body.scrollHeight) {
        body.scrollTop = pos;
        return;
    }

    body.scrollTop = y;
    setTimeout(scroll_To, 20, element);
}