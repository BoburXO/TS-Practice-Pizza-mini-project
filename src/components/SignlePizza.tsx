import { FC } from "react";
import { Pizza } from "../types";
import { AiFillDelete } from "react-icons/ai";

interface SinglePizzaProps {
  pizza: Pizza;
  deletePizza: (id: number) => void;
}

const SignlePizza: FC<SinglePizzaProps> = ({ pizza, deletePizza }) => {
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} ₽</span>

      <div className="pizza-controls">
        <AiFillDelete
          onClick={() => {
            alert("Are you shure man?");
            deletePizza(pizza.id);
          }}
        />
      </div>
    </div>
  );
};

export default SignlePizza;
