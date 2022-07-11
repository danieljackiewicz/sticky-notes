const addbtn = document.getElementById('add');
const notes = JSON.parse(localStorage.getItem('notes'))

addbtn.addEventListener('click', () => addNewNote())
const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.className = 'note';

    note.innerHTML = `
    <div class="controls">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash"></i></button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
        <textarea ${text ? "hidden" : ""}></textarea>`
}