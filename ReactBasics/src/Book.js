import React from 'react';

const Book = (props) => {
    const { img, title, author } = props;
    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target);
      alert("Hello world");
    };
    const complexExample = (e) => {
      alert("Author is: " + e);
    };
    return (
      <article className="book" onMouseOver={() => {
        console.log(author);
      }}>
        <img src={img} alt="" />
        <h1 onClick={() => alert("You clicked: " + title)}>{title}</h1>
        <h4>{author.toUpperCase()}</h4>
        <button type="button" onClick={clickHandler}>
          Hello, world!
        </button>
        <button type="button" onClick={() => complexExample(author)}>
          More complex
        </button>
        {/* {props.children} */}
      </article>
    );
  };

export default Book;