//ADDING TODOS

//getting a reference to the form
const addForm = document.querySelector('.add');

//getting a reference to the entire ul (list)
const list = document.querySelector('.todos');

//making our own function so the value on the form is added to the ul list
const generateTemplate = todo => {

    //creating the html varible in a template string with the text added in the todo variable below (what is typed in by the user)
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    //appends the list instead of completely replacing it because of +=
    list.innerHTML += html;
};

//adds an event listener to the form so the form can be submitted by just pressing enter
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }      
});

//DELETING TODOS

//attaching an event listener to the already referenced ul list for a click and then targeting the class delete with classList.contains the removing the parent element with is the li of that delete class (the trash can icon)
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
   
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));

};

//keyup event
const search = document.querySelector('.search input')

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})