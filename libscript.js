// const readB = document.getElementById('readbook');
const submit = document.getElementById('submit');
const bookForm = document.querySelector('#form-display');
const formBtn = document.querySelector('#form-btn');
const forminput = document.querySelectorAll('input');
let books = []

// const Person = (name) => {
//   const sayName = () => console.log(`my name is ${name}`)
//   return {sayName}
// }

// const Nerd = (name) => {
//   // simply create a person and pull out the sayName function with destructuring assignment syntax!
//   const {sayName} = Person(name)
//   const doSomethingNerdy = () => console.log('nerd stuff')
//   return {sayName, doSomethingNerdy}
// }

// const jeff = Nerd('jeff')

// jeff.sayName() //my name is jeff
// jeff.doSomethingNerdy() // nerd stuff


//modular pattern

const moduledisplay = (() => {

  
      const displaybooks = () => {  
        
                const table = document.querySelector('#tbody');

                while(table.lastElementChild)
                {
                  table.removeChild(table.lastChild);
                }

                for(let i=0;i<books.length;i+=1)
                {
                  const read = books[i].read === true ? 'Read' : 'Yet to Read' ;
                  let tablerow = document.createElement('tr');
                  tablerow.setAttribute('id',i);
                  tablerow.innerHTML = `
                        <td scope="row">${i+1}</td>
                        <td>${books[i].book}</td>
                        <td>${books[i].author}</td>
                        <td>${books[i].pages}</td>
                        <td><button class="btn btn-success" id="readbook">${read}</button></td>
                        <td><button class="btn btn-danger" id="remove">Delete</button></td> 

                        `
                  table.appendChild(tablerow);
                }
      }

      return {displaybooks};

})();

//factory

const displayForm = () => {
  if (bookForm.classList.contains('d-none')) {
    bookForm.classList.remove('d-none');
  } else {
    bookForm.classList.add('d-none');
  }
}


const createBook = (book,author,pages,read) => {
return {book,author,pages,read};
}


const addtoArray = (e) =>
{ 
  
 e.preventDefault();
  const book1 = createBook(book.value,author.value,pages.value,readRadios1.checked)
  books.push(book1);
  for(let i=0;i<forminput.length;i+=1){
      forminput[i].value='';
      forminput[i].checked=false;
  }
  moduledisplay.displaybooks();
}




document.querySelector('#tbody').addEventListener('click',(event) => {
 
if (event.target.id === 'readbook')
{ e = event.target;

  // event.target.innerHTML === 'Read' ?  event.target.innerHTML = 'Yet to Read' : event.target.innerHTML = 'Read';
    if (event.target.innerHTML === 'Read') {
    event.target.innerHTML = 'Yet to Read';
    books[e.parentElement.parentElement.id].read = !books[e.parentElement.parentElement.id].read;
  } 
  
  else if (event.target.innerHTML === 'Yet to Read'){
    event.target.innerHTML = 'Read';
    books[e.parentElement.parentElement.id].read = !books[e.parentElement.parentElement.id].read;
  }
}
});


document.querySelector('#tbody').addEventListener('click',(event) => {
 
if (event.target.id === 'remove')
{ e = event.target;
  // console.log(e.parentElement.parentElement.id);

  // event.target.innerHTML === 'Read' ?  event.target.innerHTML = 'Yet to Read' : event.target.innerHTML = 'Read';
    books.splice([e.parentElement.parentElement.id],1);
  moduledisplay.displaybooks();
}
});


formBtn.addEventListener('click', displayForm);

submit.addEventListener('click',addtoArray);