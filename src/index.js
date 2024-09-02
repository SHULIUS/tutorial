import { React, StrictMode } from 'react';
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

const firstBook = {
  author: ' Casey Means MD',
  title: 'Good Energy: The Surprising Connection Between Metabolism and Limitless Health',
  img: './images/book-1.jpg'
}
const secondBook = {
  author: 'Colleen Hoover',
  title: 'It Starts with Us: A Novel (It Ends with Us)',
  img: './images/book-2.jpg'
}
const thirdBook = {
  author: 'Colleen Hoover',
  title: 'It Ends with Us: A Novel (1)',
  img: './images/book-3.jpg'
}
function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  );
}
const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <StrictMode>
      <BookList />
    </StrictMode>
  </>

);
