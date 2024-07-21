document.querySelector('a[href="#header-sec"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#header-sec').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#about-info"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about-info').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#footer"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#footer').scrollIntoView({
        behavior: 'smooth'
    });
});

