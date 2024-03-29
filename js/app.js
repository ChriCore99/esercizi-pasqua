// CREO UN CONVERTITORE DI VALUTA DA EURO A ALTRO

const { createApp } = Vue

  createApp({
    data() {
      return {
        userInput: '',
        convertito: '',
        valutaEstera: ''
      }
    },

    mounted(){
        
    },

    methods:{
        converti(){
            const select = document.querySelector('#valuta').value;

            if(select === 'dollari') {
                valutaEstera = 1.08
            } else if (select === 'sterline') {
                valutaEstera = 0.85
            } else if (select === 'dobloni') {
                valutaEstera = 0.05
            }
            this.convertito = (this.userInput * valutaEstera).toFixed(2)
            this.userInput = ''
        }
    }

  }).mount('#app')

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------

// DATA UNA STRINGA, TRASFORMALA IN ALFABETO FARFALLINO

const stringa = 'luca';                                

const stringaArray = [];                               

for (let i = 0; i < stringa.length; i++){              
    const lettera = stringa[i];                        

    if(lettera === 'a'){                               
        stringaArray.push('afa')
    } else if (lettera === 'e') {
        stringaArray.push('efe')
    } else if (lettera === 'i') {
        stringaArray.push('ifi')
    } else if (lettera === 'o') {
        stringaArray.push('ofo')
    } else if (lettera === 'u') {
        stringaArray.push('ufu')
    } else {
        stringaArray.push(lettera)
    }

}

console.log(stringaArray.join('')) 

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// DATA UNA IPOTETICA STRINGA CHE SI RIPETE ALL'INFINITO, NE STAMPO SOLO UNA PARTE SPECIFICA TRA GLI INDICI 8 E 12 COMPRESI

const stringaInfinita = 'ABCDEABCDEABCDEABCDEABCDEABCDE';

const indexMax = 12;
const indexMin = 8;

const lettereArray = [];

for (let i = indexMin; i <= indexMax; i++){
    const leteraCorrente = stringaInfinita[i];
    lettereArray.push(leteraCorrente)
}

console.log(lettereArray.join(''))

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// DA UN ARRAY DI NUMERI FILTRO E STAMPO SOLO I NUMERI PARI

const arrayNumeriSnack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeriPari = arrayNumeriSnack.filter((num) => num % 2 === 0);

console.log(numeriPari);