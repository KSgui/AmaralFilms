var btn = document.querySelector('#esconder');
var agenda = document.querySelector('.agenda')
var body = document.querySelector('.principal')

btn.addEventListener('click', function() {
    if(agenda.style.display === 'block') {
        agenda.style.display = 'none';
    } else {
        agenda.style.display = 'block';
        body.style.filter= 'blur(5px)';
    }
});

agenda.addEventListener('click', function() {
    if(agenda.style.display = 'none') {
        body.style.filter= 'blur(0)';
    }
});

// agenda.addEventListener('click', function(){
//     if(body.style.filter= 'blur(5px)');
// } )