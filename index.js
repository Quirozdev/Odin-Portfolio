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

const teamMembersModal = document.getElementById('team-members-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const teamMembersList = document.querySelector('.team-members-list');

document.querySelectorAll('.team-list-btn').forEach((teamListBtn) => {
  teamListBtn.addEventListener('click', (e) => {
    loadModalWithTeamNames(
      teamNames[teamListBtn.getAttribute('data-team-names-id')]
    );
    showModal();
  });
});

closeModalBtn.addEventListener('click', () => {
  hideModal();
});

// to close the modal when the key Escape is pressed
document.addEventListener('keyup', (e) => {
  if (e.key.toLocaleLowerCase() === 'escape') {
    hideModal();
  }
});

function showModal() {
  teamMembersModal.classList.add('visible');
}

function hideModal() {
  teamMembersModal.classList.remove('visible');
}

function loadModalWithTeamNames(teamMembersArr) {
  teamMembersList.textContent = '';
  teamMembersArr.forEach((teamMemberName) => {
    const liElement = document.createElement('li');
    liElement.textContent = teamMemberName;
    teamMembersList.appendChild(liElement);
  });
}
