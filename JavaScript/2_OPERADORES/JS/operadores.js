    // 1 - Number 

    console.log(typeof 2);

    // 2 Ops. Aritméticas

    console.log(2+4);
    console.log(2-4);
    console.log(2*4);
    console.log(2/4);

    console.log(5 + 4*2);

    // 3 - Especial Numbers

    console.log(typeof Infinity);

    console.log(typeof -Infinity);

    console.log(12 * "asd");
    // = NaN, Pois não tem como fazer uma operação com um number e uma string;

    console.log(typeof NaN);

    // 4 - Strings

    console.log( typeof "Um texo");
    console.log(typeof 'Mais um Teexo');
    console.log(`Outro Texto`);

    // 5 - Símbolos Especiais em String

    console.log("Texto \nDuas Linhas"); 
    // = Utilizar \n, se quisermos o texto em duas linhas (<br>)

    console.log("Espaçamento de \t Tab"); 
    //= Utilizar \t, se quisermos o texto com um espaçamento (TAB)


    // 6 - Concatenação

    console.log("Olá," + "Tudo" + " Bem?");

    // 7 - Template Strings - tem que ser feita utilizando CRASE

    console.log(`A soma de 2+2 é: ${2+2}`);

    // 8 - Boolean (True or False)

    console.log(true);

    console.log(5 > 20);

    // 9 - Comparações 
    /* 
    Maior = >
    Maior ou Igual = (>=)
    Menor = <
    Menor ou Igual (<=)
    Igual = (==)
    Diferente = (!=)
    Identico = (===)
    */

    //10 - Operadores Lógicos

    /* 
    && - AND - true apenas se os dois lados forem verdadeiros
    || - OR- true se apenas um lado for verdadeiro
    ! - NOT - este operador inverte a comparação = True == False, False == True
    */

    //11 - Praticando com Operadores Lógicos:
                        //&& (AND)
        console.log(true && true); //  true
        console.log(true && false); // false
        console.log(false && true); // false
        console.log(false && false); // false

                        // || (OR)
        console.log(true || true); //true
        console.log(true || false); //true
        console.log(false || true); //true
        console.log(false || false); //false

        console.log(5>5 && 4==4) // False,4 é igual a 4, mas 5 não é maior que 5
        console.log(6==6 && 4==4 && 5>=5 && 9>8 || 5>5 && 6<=9);

        //11 - Empty Values

            console.log(typeof null, typeof undefined);
            console.log(null === undefined);
            console.log(null == undefined);
            console.log(null == false);
            console.log(undefined == false);

        //12 - Mudança de tipos
        console.log(5*null);
        console.log("asd"*"asd");
        console.log("1" + 1); //Aqui ele faz uma concatenação, resultando em 11
        console.log("10" - 1); //Aqui ele usa um operador aritmetico, subtração
            


 
