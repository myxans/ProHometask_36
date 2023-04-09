const openDialogueBtn = document.getElementById('open-dialogue');
const closeDialogueBtnY = document.getElementById('close-dialogue-y');
const closeDialogueBtnN = document.getElementById('close-dialogue-n');
const dialogueContainer = document.getElementById('dialogue-container');

openDialogueBtn.addEventListener('click', () => {
  dialogueContainer.style.display = 'block';
});

closeDialogueBtnY.addEventListener('click', () => {
  dialogueContainer.style.display = 'none';
});

closeDialogueBtnN.addEventListener('click', () => {
  dialogueContainer.style.display = 'none';
});

dialogueContainer.addEventListener('click', (event) => {
  if (event.target === dialogueContainer) {
    dialogueContainer.style.display = 'none';
  }
});