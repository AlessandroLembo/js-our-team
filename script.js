/*
TRACCIA:

Utilizzando i dati forniti, creare un array di oggetti per rappresentare
i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe.

BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina 
gradevole (potete usare lo screen in allegato come spunto).
*/

// Recupero gli elementi dalla pagina
const infoMembers = document.getElementById('info-members');
const row = document.getElementById('row');


// Creare un array di oggetti con le informazioni fornite.
const team = [
    { fullName: 'Wayne Barnett', role: 'Founder & CEO', picture: 'Wayne-Barnett-Founder-CEO.jpg' },
    { fullName: 'Angela Caroll', role: 'Chief Editor', picture: 'Angela-Caroll-Chief-Editor.jpg' },
    { fullName: 'Walter Gordon', role: 'Office Manager', picture: 'Walter-Gordon-Office-Manager.jpg' },
    { fullName: 'Angela Lopez', role: 'Social Media Manager', picture: 'Angela-Lopez-Social-Media-Manager.jpg' },
    { fullName: 'Scott Estrada', role: 'Developer', picture: 'Scott-Estrada-Developer.jpg' },
    { fullName: 'Barbara Ramos', role: 'Graphic Designer', picture: 'Barbara-Ramos-Graphic-Designer.jpg' },

];

// Apertura ciclo for per caricare le informazioni nella variabile.
let printElement = '';

for (let i = 0; i < team.length; i++){
    
    printElement += `Full-name: ${team[i].fullName}; 
                     role: ${team[i].role}; 
                     picture: ${team[i].picture};
                     -------------------------
                     `;                           
}

// Stampa in pagina informazioni dei membri del team
infoMembers.innerText = printElement;
console.table(printElement);


// Creazione array con indirizzo immagini
const sources = [
    'img/wayne-barnett-founder-ceo.jpg',  
    'img/angela-caroll-chief-editor.jpg',  
    'img/walter-gordon-office-manager.jpg',  
    'img/angela-lopez-social-media-manager.jpg',
    'img/scott-estrada-developer.jpg',
    'img/barbara-ramos-graphic-designer.jpg',
      
 ];


// Creazione delle cards con ciclo for
let cards = '';

for (let i = 0; i < sources.length; i++){
   cards += `<div class="card">
                <img src="${sources[i]}" alt="profile ${i}">
                <div>
                   <h3 class="name">${team[i].fullName}</h3>
                   <h5 class="role">${team[i].role}</h5>
                </div>                     
             </div>` ;
}

// Stampa delle cards in pagina.
row.innerHTML = cards;





















