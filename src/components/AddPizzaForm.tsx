import { ChangeEvent, FC, FormEvent, useState } from "react";
import { NewPizza, Pizza } from "../types";
import "./styles.css";

interface AddPizzaFormProps {
  addPizza: (NewPizza: Pizza) => void;
}

const initialState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [pizza, setPizza] = useState<NewPizza>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPizza({
      ...pizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = pizza;

    if (title && price && img) {
      addPizza({
        title,
        price: Number(price),
        img,
        id: Date.now(),
      });
      setPizza(initialState);
    } else {
      alert("Enter something for all inputs...");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
          value={pizza.title}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          onChange={handleChange}
          value={pizza.price}
        />
        <input
          list="images"
          name="img"
          type="text"
          placeholder="Image"
          onChange={handleChange}
          value={pizza.img}
        />
        <datalist id="images">
          <option value="pizza-1.jpg" />
          <option value="pizza-2.jpg" />
          <option value="pizza-3.jpg" />
          <option value="pizza-4.jpg" />
          <option value="pizza-5.jpg" />
          <option value="pizza-6.jpg" />
        </datalist>

        <button type="submit">+ Add to menu</button>
      </form>
    </>
  );
};

export default AddPizzaForm;
