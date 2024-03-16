var title = $('input');
var description = $('textarea');
var result = $('.result');

$('button').click(function(event) {
    event.preventDefault();
    addItem(title.val(), description.val());
    title.val("");
    description.val("");
});

function addItem(title, description) {
    var div = document.createElement('div');
    div.innerHTML = `<h1>${title}</h1> <p>${description}</p> <span>delete</span>`;
    div.querySelector('span').addEventListener('click', function(){
        div.remove()
    })
    result.append(div);
}