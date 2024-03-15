import React from "react";
import ReactDOM from "react-dom";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "title will be discovered soon",
  author: "Talha ",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/914661eRCnL._AC_UY218_.jpg",
  title: "The Family Secret",
  author: "Kiersten Modglin ",
};

function BookList() {
  return (
    <section>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(
  <BookList />,

  document.getElementById("root")
);
