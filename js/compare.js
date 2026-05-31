// car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// verifica se o carro está no array e retorna a posição
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            if (carArr.length >= 2) {
                alert("Você só pode comparar 2 carros por vez!");
                el.checked = false;
                return;
            }
            carArr.push(carClass);
            UpdateCompareTable();
        } else {
            const index = GetCarArrPosition(carArr, carClass);
            if (index !== -1) {
                carArr.splice(index, 1);
            }
            UpdateCompareTable();
        }
    }
}

// mostra o pop-up de comparação
function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    } else {
        UpdateCompareTable();
        document.getElementById("compare").style.display = "block";
    }
}

// oculta o pop-up de comparação
function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

// insere as informacoes na tabela
function UpdateCompareTable() {
    const atributos = [
        { id: 'modelo', prop: 'nome' },
        { id: 'alturacacamba', prop: 'alturaCacamba' },
        { id: 'alturaveiculo', prop: 'alturaVeiculo' },
        { id: 'alturasolo', prop: 'alturaSolo' },
        { id: 'capacidadecarga', prop: 'capacidadeCarga' },
        { id: 'motor', prop: 'motor' },
        { id: 'potencia', prop: 'potencia' },
        { id: 'volumecacamba', prop: 'volumeCacamba' },
        { id: 'roda', prop: 'roda' },
        { id: 'preco', prop: 'preco' }
    ];

    for (let i = 0; i < 2; i++) {
        const car = carArr[i] ? carArr[i] : null;

        // atualiza a imagem do carro
        const imageCell = document.getElementById(`compare_image_${i}`);
        if (imageCell) {
            imageCell.innerHTML = car ? `<img src="${car.image}" alt="${car.nome}" class="photocar">` : "";
        }

        // atualiza as informações
        atributos.forEach(({ id, prop }) => {
            const cell = document.getElementById(`compare_${id}_${i}`);
            if (cell) {

                if (car) {
                    // converte o preco para real
                    if (prop === 'preco') {
                        cell.innerText = new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(car[prop]);
                    } else {
                        cell.innerText = car[prop];
                    }
                } else {
                    cell.innerText = "";
                }
            }
        });
    }
}