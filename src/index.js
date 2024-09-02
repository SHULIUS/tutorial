import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

/* 
function Greeting() {
  return (
    <>
      <div className='someValue'>
        <h3>hello people</h3>
        <ul>
          <li>
            <a href='{}'>hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type='text' name='' id='' />
      <button></button>
    </>
  );
}
 */

/* function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;

const Message = () => {
  return <p>this is my message</p>;
};

 */

const FirstBook = {
  author: ' Casey Means MD',
  title: 'Good Energy: The Surprising Connection Between Metabolism and Limitless Health',
  img: './images/book-1.jpg'
}
const SecondBook = {
  author: 'Colleen Hoover',
  title: 'It Starts with Us: A Novel (It Ends with Us)',
  img: './images/book-2.jpg'
}
function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={FirstBook.author}
        title={FirstBook.title}
        img={FirstBook.img}
      />
      <Book
        author={SecondBook.author}
        title={SecondBook.title}
        img={SecondBook.img}
      />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>

  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
