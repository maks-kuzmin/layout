document.addEventListener("DOMContentLoaded", () => {

    //show catalog
    document.getElementById('burger-menu').addEventListener('click', function (){
        document.querySelector('.header-menu').style.display = 'block';
    })

    //show submenu
    let mainlinks = document.querySelectorAll('.link-active');
    mainlinks.forEach( function (link) {
        link.addEventListener('click', function (e) {
            document.querySelectorAll('.hide-menu').forEach(function (element) {
                element.style.display = 'none';
            })

            for (child of e.target.parentNode.children) {
                if (child.classList.contains('hide-menu')) {
                    child.style.display = 'block';
                }
            }
        })
    })

    document.addEventListener('click', function(event) {

        //close catalog
        if(!event.target.closest('.header-menu__main-list')) {
            if(!event.target.classList.contains('bottom__catalog-name')) {
                document.querySelector('.header-menu').style.display = 'none';
            }
        }

        //close submenu
        if(!event.target.classList.contains('link-active')) {
            if(!event.target.classList.contains('hide-menu') || !event.target.parentNode.classList.contains('hide-menu')) {
                document.querySelectorAll('.hide-menu').forEach(function (element) {
                    element.style.display = 'none';
                })
            }
        }

        //close left menu
        if(!event.target.closest('.left-menu__list')) {
            document.querySelectorAll('.left-menu__sub-list').forEach(element => {
                element.classList.remove('active');
            })
            document.querySelectorAll('.left-menu__icon').forEach(element => {
                element.classList.remove('active');
            })
        }

        //close modal 'Запрос отправлен'
        if(event.target.id !== 'callback-button') {
            if(event.target.closest('.modal-answer__close') || !event.target.closest('.modal-answer')) {
                document.querySelector('.form-callback__fon').style.display = 'none';
            }
        }
    })

    //only numbers for form in main page
    if (document.querySelector('.form-callback__input')) {
        document.querySelector('.form-callback__input').addEventListener('input', function() {
            this.value = input.value.replace(/\D/g, '');
        });
    }

    $(".form-callback__input").mask("+7 (999)-999-99-99");

    //slider on the main page
    $('.main-slider__body').slick({
        dots: true,
    });

    //show and close tabs
    document.querySelectorAll('.catalog-tabs__tab').forEach(tab => {
        tab.addEventListener('click', function (element) {
            document.querySelectorAll('.catalog-tabs__tab').forEach(otherTab => {
                otherTab.classList.remove('active');
            });
            element.target.classList.add('active');

            document.querySelectorAll('.catalog-tabs__products').forEach(product => {
                console.log(product.id);
                if(element.target.textContent === product.id) {
                    product.classList.add('active');
                } else {
                    product.classList.remove('active');
                }
            })
        })
    })

    //open and close left menu
    document.querySelectorAll('.left-menu__element').forEach(e => {
        e.addEventListener('click', function (category) {
            document.querySelectorAll('.left-menu__sub-list').forEach(otherCategory => {
                if (category.target.classList.contains('left-menu__name')) {
                    otherCategory.classList.remove('active');
                }
            });
            document.querySelectorAll('.left-menu__icon').forEach(otherIcon => {
                if (category.target.classList.contains('left-menu__name')) {
                    otherIcon.classList.remove('active');
                }
            });

            category.target.nextElementSibling.classList.add('active');
            category.target.previousElementSibling.classList.add('active');
        })
    })

    // callback form
    document.getElementById('callback-button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.form-callback__fon').style.display = 'flex';
    })
});