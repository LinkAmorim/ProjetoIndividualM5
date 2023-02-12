
const redlineSync = require("readline-sync");
//importação do readline sync
const lista = [];
let   resp = "";
//A constante que vai armazenar os itens
const adicionarNaLista = (prop) => {
  lista.push(prop);
};
//aqui é onde os itens do css serão armazenados, sendo adicionado cada novo item a lista
const ordenar = () => {
  lista.sort();
};
//Ele vai imprimir os itens em ordem alfabética
const listar = () => {
  
  lista.forEach((elemento)=> { console.log(elemento); }); //retorna ao terminal os itens de cada linha
};

while (true) {
  resp = redlineSync.question("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: ");
//while executa o input (entrada)
//redline fica responsável por cuidar da interface e leitura
//e tem a pergunta sobre qual item, enquanto o readline  cuida da interface e leitura
  if (resp.toLowerCase() == "sair") {
    //Uma condicional que intrrompe o laço repetitivo
    ordenar();
    listar();
    //Organiza e lista os itens
  break;
 
  } else if (resp.toLowerCase() !== "sair" && resp !=="") {
    adicionarNaLista(resp);
  }
}
//se o usuário não digitar "sair" e também não adicionar um registro vazio, o readline ainda irá ler itens adicionados