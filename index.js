const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

var myIndex = 0;
slideShow();

function slideShow() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideShow, 9000);
}

function jobFilter() {
    const selectedLocation = document.getElementById('locations').value;

    document.getElementById("job1").style.display = 'block';
    document.getElementById("job2").style.display = 'block';
    document.getElementById("job3").style.display = 'block';
    document.getElementById("job4").style.display = 'block';
    document.getElementById("job5").style.display = 'block';
    document.getElementById("job6").style.display = 'block';
    document.getElementById("job7").style.display = 'block';

    switch (selectedLocation) {
        case 'easton':
            document.getElementById("job1").style.display = 'none';
            document.getElementById("job7").style.display = 'none';
            break;
        case 'nazareth':
            document.getElementById("job2").style.display = 'none';
            document.getElementById("job3").style.display = 'none';
            break;
        case 'bethlehem':
            document.getElementById("job3").style.display = 'none';
            document.getElementById("job7").style.display = 'none';
            document.getElementById("job2").style.display = 'none';
            break;
    }
}
