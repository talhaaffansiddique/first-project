import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

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
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          hic nulla fugit quibusdam! Odio inventore molestias, vel iste tenetur
          repudiandae quasi blanditiis ducimus totam nobis ipsa voluptate illum,
          quis quos?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

ReactDOM.render(
  <BookList />,

  document.getElementById("root")
);
