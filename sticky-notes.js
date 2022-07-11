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
    const editbtn = note.querySelector('.edit');
    const deletebtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked.parse(text);
    deletebtn.addEventListener('click', () => {
        note.remove();
        saveList();
    });
    editbtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })
    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked.parse(value);
        saveList();
    })

    document.body.appendChild(note);
}


const saveList = () => {
    const notesText = document.querySelectorAll('textarea');

    const allNotes = []
    notesText.forEach(note => allNotes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(allNotes))
}
if (notes) {
    notes.forEach(noted => addNewNote(noted))
}