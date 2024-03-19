import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "title will be discovered soon",
    author: "Talha ",
    id: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/914661eRCnL._AC_UY218_.jpg",
    title: "The Family Secret",
    author: "Kiersten Modglin ",
    id: 2,
  },
];
const names = ["john", "peter", "susan"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});

function BookList() {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me </button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  //console.log(props);
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
