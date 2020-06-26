import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.round(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Novo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Descrição</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Informe uma descrição..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Valor <br />
            (<span>Negativo para saída</span>; Positivo para entrada)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Adicionar Transação</button>
      </form>
    </>
  );
};
