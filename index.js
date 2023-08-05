const teamNames = {
  'asistenciasqr-team-names': [
    'Gonzáles Martínez Armando',
    'Grave Angulo Estefanía',
    'Juárez Torres Daniel Octavio',
    'Quiroz Osuna Luis Daniel',
    'Reyes Zamora Isabel Alejandra',
  ],
  'espressoft-team-names': [
    'Lerma Molina Karla Arleth',
    'Guevara Noriega Jesús Guadalupe',
    'ribe Cota Ramon Alejandro',
    'Nicanor Mojardin Isaac',
    'Marcor Obregón Iker Isaac',
    'Silva Camargo Mariana',
    'López Quintana Jorge Luis',
    'Navarrete Terán Miriana Fernanda',
    'Quirarte Agüero Alejandra',
    'Vázquez German Juan Luis',
    'Juárez Zazueta Jesús Ángel',
    'Kniffin Ortiz Joan Andrés',
    'Quiroz Osuna Luis Daniel',
    'Denogean Sanchez Julio Alfonso',
    'Machado Encinas German',
    'Gutiérrez Villa José Antonio',
    'Hernández López Luis Ernesto',
    'Moreno Laines Juan Pedro',
    'Núñez Gurrola David',
    'Vargas Mendívil Jesús Adrián',
  ],
  'vetcare-team-names': [
    'Gutiérrez Córdova Dulce Ramona',
    'Jimenez Ortega Issam Silverio',
    'Quiroz Osuna Luis Daniel',
  ],
};

document.querySelectorAll('.team-list-btn').forEach((teamListBtn) => {
  teamListBtn.addEventListener('click', (e) => {
    console.log(teamNames[teamListBtn.getAttribute('data-team-names-id')]);
  });
});
