// const search_field = document.querySelector('.search-field');

// search_field.onclick 

const delete_button = document.querySelectorAll('.delete_button');
function deleteNumber() {
    console.log('Delete');
};
delete_button.forEach(buttonItem => {
    buttonItem.addEventListener("click", deleteNumber);
});


const heart = document.querySelectorAll('.heart');
function importantNumber() {
    console.log('Heart')
};
heart.forEach(buttonItem =>{
    buttonItem.addEventListener('click', importantNumber);
})
