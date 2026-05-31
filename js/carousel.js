//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(imagem, titulo, link) {
        this._imagem = imagem;
        this._titulo = titulo;
        this._link = link;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._itens = arr;

                Carousel._ImagemCarousel = document.getElementById('carousel');
                Carousel._TituloCarousel = document.getElementById('carousel-title');
                Carousel._dots = document.querySelectorAll('.dot');

                Carousel._sequence = 0;
                Carousel._size = arr.length;

                Carousel._dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        Carousel._sequence = index;
                        Carousel.Render();

                        // reseta o temporizador ao ser clicado
                        clearInterval(Carousel._interval);
                        Carousel._interval = setInterval(function () { Carousel.Next(); }, 3000);
                    });
                });

                Carousel.Render();
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 3000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        Carousel._sequence++

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Render();
    }

    static Render() {
        const carouselAtual = Carousel._itens[Carousel._sequence];

        Carousel._ImagemCarousel.innerHTML = `
            <img src="img/${carouselAtual._imagem}" alt="${carouselAtual._titulo}" class="fade-in">
        `;

        Carousel._TituloCarousel.innerHTML = `
        <h2><a href="${carouselAtual._link}">${carouselAtual._titulo}</a></h2>
        `;

        Carousel._dots.forEach((dot, index) => {
            if (index === Carousel._sequence) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
};