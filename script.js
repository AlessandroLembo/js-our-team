console.log('JS OK');

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

// Creare un array di oggetti con le informazioni fornite.
const team = [
    { fullName: 'Wayne Barnett', role: 'Founder & CEO', picture: 'img' },
    { fullName: 'Angela Caroll', role: 'Chief Editor', picture: 'img' },
    { fullName: 'Walter Gordon', role: 'Office Manager', picture: 'img' },
    { fullName: 'Angela Lopez', role: 'Social Media Manager', picture: 'img' },
    { fullName: 'Scott Estrada', role: 'Developer', picture: 'img' },
    { fullName: 'Barbara Ramos', role: 'Graphic Designer', picture: 'img' },

];

console.log(team[3].fullName);
console.log(team[1]['role']);