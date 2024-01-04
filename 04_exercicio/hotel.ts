// let hotel : Hotel = new Hotel(2); 
// console.log(hotel.quantReservas); 
// Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo  quantReservas. 

class Hotel {
    quantReservas: number;
  
    constructor(quantReservasInicial: number) {
      this.quantReservas = quantReservasInicial;
    }
  
    adicionarReserva(): void {
      this.quantReservas++;
    }
}
  
let hotel: Hotel = new Hotel(2);
console.log(hotel.quantReservas);
  