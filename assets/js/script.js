// Selecting screen items with Java Script - control the items

// selected the first item --- selecionando o primeiro item 

    let yourVoteFor = document.querySelector('.d-1-1 span');
    let role = document.querySelector('.d-1-2 span');
    let description = document.querySelector('.d-1-4');
    let warning = document.querySelector('.d-2');
    let side = document.querySelector('.d-1-right');
    let numbers = document.querySelector('.d-1-3');



// Creating the step variables---- Criando as variaveis de etapas

    let currentSteps = 0;
    let numberr = '';

    function startSteps() {
        let phase = phases[currentSteps];

        let numbeHtml = '';

        for(let j=0;j<phase.numbers;j++) {
            if(j ===0) {
                numbeHtml += '<div class="numero pisca"></div>';
        }
        else {
            numbeHtml += '<div class="numero"></div>';
        }
        
            }

        
        yourVoteFor.style.display = 'none';
        role.innerHTML = phase.titles;
        description.innerHTML = '';
        warning.style.display = 'none';
        side.innerHTML = '';
        numbers.innerHTML = numbeHtml;



        
    }



    function updateInterface() {
        alert("Finalizou de Digitar o voto");
    } 








// Create keyboard function --- criar função no teclado


    function clicou(n) {
        let elNumbers = document.querySelector('.numero.pisca');
        if(elNumbers !== null) {
            elNumbers.innerHTML = n;
            numberr = `${numberr}${n}`;

            elNumbers.classList.remove('pisca');
            if(elNumbers.nextElementSibling !== null) {          
            elNumbers.nextElementSibling.classList.add('pisca');
        }
        else {
            updateInterface();
        }

    }
}

    function branco() {
        alert("Clicou em Branco");
    }

    function corrige () {
        alert("Clicou em Corrige");
    }

    function confirma () {
        alert("Clicou em Confirma");
    }

    startSteps ();



