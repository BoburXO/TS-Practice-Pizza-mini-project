import React, { FC } from "react";
import { Pizza } from "../types";
import SignlePizza from "./SignlePizza";

interface DisplayPizzasProps {
  pizzaList: Pizza[];
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzaList, deletePizza }) => {
  return (
    <>
      <div className="container">
        {pizzaList?.map((el) => {
          return (
            <SignlePizza deletePizza={deletePizza} key={el.id} pizza={el} />
          );
        })}
      </div>
    </>
  );
};

export default DisplayPizzas;
