// const readB = document.getElementById('readbook');
const submit = document.getElementById('submit');
const bookForm = document.querySelector('#form-display');
const formBtn = document.querySelector('#form-btn');
const forminput = document.querySelectorAll('input');
// let books = [];

function localstorage(){
  let books = [];

  if(localStorage.getItem('library')) {
      books = JSON.parse(localStorage.library);
  }
return books
}

function displayForm() {
  if (bookForm.classList.contains('d-none')) {
    bookForm.classList.remove('d-none');
  } else {
    bookForm.classList.add('d-none');
  }
}

class Createbook {

          constructor (book,author,pages,read) {
            this.book = book;
            this.author = author;
            this.pages = pages;
            this.read = read;
            }

          displaybooks()

          {  let books = localstorage(); 
            
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

          }


const addtoArray = (e) => {
  let books = localstorage();
  //  e.preventDefault();
  let book1 = new Createbook(book.value, author.value, pages.value, readRadios1.checked);
  books.push(book1);
  localStorage.setItem("library", JSON.stringify(books));

  // for (let i = 0; i < forminput.length; i += 1) {
  //   forminput[i].value = '';
  //   forminput[i].checked = false;
  // }
  // Createbook.prototype.displaybooks();
}



document.querySelector('#tbody').addEventListener('click',(event) => {
 let books = localstorage(); 
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
    localStorage.setItem("library", JSON.stringify(books));

}
});


document.querySelector('#tbody').addEventListener('click',(event) => {
 let books = localstorage(); 
if (event.target.id === 'remove')
{ e = event.target;
  // console.log(e.parentElement.parentElement.id);

  // event.target.innerHTML === 'Read' ?  event.target.innerHTML = 'Yet to Read' : event.target.innerHTML = 'Read';
    books.splice([e.parentElement.parentElement.id],1);
    localStorage.setItem("library", JSON.stringify(books));
  Createbook.prototype.displaybooks();
}
});


formBtn.addEventListener('click', displayForm);

submit.addEventListener('click',addtoArray);

Createbook.prototype.displaybooks();
