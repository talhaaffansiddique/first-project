import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "title will be discovered soon",
    author: "Talha ",
  },

  {
    img: "https://m.media-amazon.com/images/I/914661eRCnL._AC_UY218_.jpg",
    title: "The Family Secret",
    author: "Kiersten Modglin ",
  },
];
const names = ["john", "peter", "susan"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});

function BookList() {
  return <section className="booklist">{newName}</section>;
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
