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


const books = [
  {
    author: ' Casey Means MD',
    title: 'Good Energy: The Surprising Connection Between Metabolism and Limitless Health',
    img: './images/book-1.jpg',
    id: 1
  },

  {
    author: 'Colleen Hoover',
    title: 'It Starts with Us: A Novel (It Ends with Us)',
    img: './images/book-2.jpg',
    id: 2
  },
  {
    author: 'Colleen Hoover',
    title: 'It Ends with Us: A Novel (1)',
    img: './images/book-3.jpg',
    id: 3
  }
]
const Book = (props) => {
  const { img, title, author  /* children */ } = props.book;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>

      {/* {children} */}
    </article>
  );
};
function BookList() {
  return (
    <section className='booklist'>

      {books.map((book) => {
        return <Book book={book} key={book.id} />
      })}
    </section>
  );
}

const EventExamples = () => {

  return (
    <div className="relative w-64 h-64 rounded-full bg-blue-500 animate-spin-slow flex items-center justify-center orbit">

      <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-white">1</div>
      <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white">2</div>
      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white">3</div>
      <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white">4</div>
      <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">5</div>
      <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white">6</div>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <StrictMode>
      <EventExamples />
      <BookList />
    </StrictMode>
  </>

);
