// var idade = 35;

// var maior20 = idade >= 20;
// var menor20 = !maior20;

// console.log('Maior que 20', maior20);
// console.log("Menor que 20", menor20);
// console.log(!true)

// var a = '3.5';

// var b = "5";

// var c = parseFloat(a) + parseInt(b);

// console.log("Valor da variavel A:", a)
// console.log("Valor da variavrl B:", b)
// console.log("Soma da variavel C:", c)


// var nome = prompt("What´s your name? ")
// var n = prompt("Put a number for plus: ")
// var n1 = prompt("Put another number for plus: ")

// var soma = parseFloat(n) + parseFloat(n1)

// alert(nome + " The answer for math: " + soma)


// var idade = 25


// if (idade < 18 || idade > 70){

//     console.log("Pode, Qual é o seu Pedido? ");
//     console
// }

// else{
//     console.log("Não Pode");
// }


// var idade = 8;

// var pode = idade >= 18 ? true : false 

// console.log(pode)


// var nota = 5.5;
// var nota1 = 1;
// var notalFinal = (nota + nota1) / 2;

// var passou = (nota + nota1) / 2 >= 7 ? "Passou de Ano com a Média: " + notalFinal + " :)" : "Não Passou de Ano por ter a Média: " + notalF inal + " :(" ;

// console.log(passou);


// var nota = 8;
// var nota1 = 10;

// var média = (nota + nota) / 2;
// conceito = "";

// if (média >= 8){

//     conceito = "Ótimo ";

// }

// else if (média >= 6){

//     conceito = "Bom ";
// }

// else{

//     conceito = "Regular ";

// }

// conceito = "Mais o menos"
// console.log(média)
// console.log(conceito);



// switch(conceito) {

//     case "Ótimo ":

//         console.log("Parabéns ");

//         break;

//     case "Bom ":

//         console.log("Poderia ser melhor ");

//         break

//     case "Regular ":

//         console.log("Bora estudar mais? ");

//         break

//     default: 
    
//     console.log("HOUVE ALGUM ERRO!! x(");

// };



// var numero = 7;

// for(var vez = 0; vez <= numero; vez++){


//  console.log("Executando o FOR, pela " + vez + " Vez")


// }


// console.log("Acabou")


// var number = parseInt(Math.random() * 100);

// var pergu = parseInt(prompt("Qual é o número que vai ser? "))

// var y = pergu == number ? "Parabéns, você acertou que o número escolhido foi: " + number : "você Errou, o número escolhido era: " + number + ", E o seu foi: " + pergu;

// alert(y)


// var number = parseInt(Math.random() * 100);

// while(number < 90){

//     console.log(number);
//     number = parseInt(Math.random() * 100);

// }
// console.log(number + " foi mal");

// console.log("FINISH")

// var alunos = ["Julia", "Virginia", "Clara", "Luiza", "Vetor"];

// for (var aluno of alunos){


//     console.log(aluno)


// };

// console.log("Funcionou?")

// function media(n1, n2){

//     var nota1 = n1;
//     var nota2 = n2;

//     var media = (nota1 + nota2)/2;

//     return media

// }

// var see0 = media(9, 10)
// var see1 = media(8, 7)

// console.log("Aluno Gustavo acertou: " + see0 + " na média " + "E Aluno João " + see1 + " na média ")

// var media = (n1, n2) => {

//     return (n1 + n2)/2;


// }

// var m = media(9, 5)

// console.log(m)


// var alunos = ["GUSTAVO", "FELIPE", "CLAUDIO", "LUIZA", "LUIZE", "MARINA", "MARIE"];

// var media = function(n1, n2){

//     return(n1+n2)/2;

// }

// var m = media(5, 6);
// var m1 = media(5, 9);

// for (aluno of alunos){ 

//     console.log("O aluno(a) " + aluno + " fechou com a média de: " + "",  m, m1);

// }



// var nomes = ["GUSTAVO", "FELIPE", "CLAUDIO", "LUIZA", "LUIZE", "MARINA", "MARIE"];
// var notasA = [10, 5, 8, 9, 4, 3, 9];
// var notasB = [7, 6, 5, 7, 8, 8, 9];

// var media = function(n1, n2){

//          return(n1+n2)/2;
// }


// function passou(media){

//     var resultado = "REPROVADO";

//     if (media >= 7){

//         resultado = "APROVADO";

//     }

//     return resultado;

// }

// for (var index in nomes){

//     var nota1 = notasA[index]
//     var nota2 = notasB[index]

//     var m = media(nota1, nota2)

//     console.log(nomes[index] + " - ", nota1 + " - " + nota2 + " - " + m + " - " + passou(m));


// }



// var aluno = {nome:"Gustavo", notas: [7.5, 10]}

// var nomedeumanovapropriedade = "MediumName";

// aluno.matricula = 4564655

// aluno[nomedeumanovapropriedade] = "Claudio"

// console.log(aluno)




// function calcMedia(){

//     return (this.notas[0] + this.notas[1]) / 2;

// };

// var aluno = {nome: "Gustavo", notas : [8, 9], media: calcMedia};
// var aluno1 = {nome: "Felipe", notas: [9, 4], media: calcMedia};

// console.log(aluno.nome)
// console.log(aluno.media())
// console.log(aluno1.nome)
// console.log(aluno1.media())


// function criarAluno(){

//     return (

//         nome = "GUstavo", nota = 9, nota1 = 10, media:
//         function calcmedia(){
    
//         return(this.nota + this.nota1) / 2;
        

//     )

// }



// function calcmedia(){

//     return(this.nota + this.nota1) / 2;

// }

// var turma = [   
    
//     {aluno: "Gustavo", nota: 9, nota1: 5, media : calcmedia},
//     {aluno1: "Thomas", nota: 8, nota1: 4, media : calcmedia},
//     {aluno2: "Tamires", nota: 10, nota1: 7, media : calcmedia},
//     {aluno3: "Felipe", nota: 1, nota1: 5, media : calcmedia},
//     {aluno4: "Bruno", nota: 9.9, nota1: 5.5, media : calcmedia},
//     {aluno5: "Marina", nota: 10, nota1: 9.5, media : calcmedia},


// ]

// var aluno = turma[0]
// console.log(aluno.aluno)
// console.log(aluno.aluno1)
// console.log(aluno.aluno2)
// console.log(aluno.aluno3)
// console.log(aluno.aluno4)
// console.log(aluno.aluno5)

// console.log(aluno.media());


// function criarAluno(nome, n1, n2){

//     return{nome: nome, nota: n1, nota1: n2,
//         media: function () {
//             return(this.nota + this.nota1) / 2 }
//         };
// };


function aluno(nome, n1, n2){

    this.aluno = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){

        return(this.nota1 + this.nota2) / 2;

    }
}

// var turma = [
    
//     criarAluno("Gustavo", 5, 9.9),
//     criarAluno("João", 5, 2),
//     criarAluno("Felipe", 7, 5)

// ]

// var aluno = turma[0]

// var a =  new aluno("Gustavo", 10, 7);
// var b =  new aluno("Mathues", 0, 7);

// // turma.forEach( function(elemento){

// //     console.log(elemento);

// // })

// // for(var aluno of turma){

// //     console.log(aluno.nome + " - " + aluno.media())


// // }

// console.log(a.aluno + " - " + a.media())
// console.log(b.aluno + " - " + b.media())

// var d = new Date(   );

// var dias = ["Domingo", "Segundo", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
// console.log(dias[4])
// console.log(dias[d.getDay()])

// {



//     var numero1 = 4
//     let numero2 = 5
//     const numero3 = true



// } 

// console.log(numero1)
// console.log(numero2)
// console.log(numero3)










