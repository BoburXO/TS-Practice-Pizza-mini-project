import { FC, useState } from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import DisplayPizzas from "./components/DisplayPizzas";
import { Pizza } from "./types";

//type
// type Order = {
//   title: string;
//   count?: number;
// };

//object
// const order:Order = {
//   title:"Margarita",
//   count:10
// }

//array
// const orders: Order[] = [
//   {
//     title: "Salami",
//   },
//   {
//     title: "Pepperoni",
//     count: 4,
//   },
// ];

//multi types
// let num: null | number = null;
// num = 77;

//function
// type PrintTxt = (title: string) => string;

// type PrintTxt = (title: string) => void;

// const printTxt: PrintTxt = (title) => {
//    return title;
//   console.log(title);
// }
// printTxt("hello");

//type to type
// type X = {
//   a:string,
//   b:number
// }

// type Y = X & {
//   c: string,
//   d: number
// }

// let alpa:Y = {
//   c:"test",
//   d:10,
//   a:"one",
//   b:4
// }

//interface to interface
// interface Auto {
//   model: string;
//   year: number;
// }

// interface BMW extends Auto {
//   type: string;
// }

// const bmw: BMW = {
//   model: "BMW",
//   year: 2018,
//   type: "M5",
// };

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  console.log(pizzasList);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList?.filter((el) => el.id !== id);
    setPizzasList(newPizzasList);
  };

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Our Pizza Menu</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzaList={pizzasList} deletePizza={deletePizza} />
      </div>
    </div>
  );
};

export default App;
