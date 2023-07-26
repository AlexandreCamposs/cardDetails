import { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  // const [form, setForm] = useState({
  //   nome: '',
  //   card: {
  //     mes: 0,
  //     ano: 0,
  //     codSecury: 0,
  //   },
  // });
  const [form, setForm] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, firstName: e.target.value });
  };

  const handleClick = () => {
    console.log('sdad');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <div className="photo">
        <div className="front-card">
          <span> 1234 5678 9014 4567</span>
          <img
            src="./img/card-logo.svg"
            alt="image card front"
            className="logo-card"
          />
          <img src="./img/bg-card-front.png" alt="" />
          <div className="card-description">
            <div className="user-card">Alexandre campos</div>
            <div className="valid-card">00/00</div>
          </div>
        </div>
        <div className="back-card">
          <span>000</span>
          <img src="./img/bg-card-back.png" alt="image card back" />
        </div>
      </div>
      <div className="layout-background"></div>
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <label>
            TÍTULAR DO CARTÃO
            <Input
              type="text"
              name="name"
              value={form.nome}
              placeholder="ex: Jane Almeida"
              onChange={(e) => {
                setForm({
                  ...form,
                  firstName: e.target.value,
                });
              }}
            />
          </label>
          <label>
            NÚMERO DO CARTÃO
            <Input
              type="number"
              name="number"
              value={form.card}
              placeholder="Ex: 1234 5678 9123 0000"
              onChange={handleChange}
            />
          </label>
          <div className="date-card">
            <label className="mes">
              <span>EXP. DATE</span>
              <Input
                type="number"
                name="mes"
                placeholder="MM"
                onChange={handleChange}
              />
            </label>
            <label className="dia">
              <span>(MM/YY)</span>
              <Input
                type="number"
                name="dia"
                placeholder="YY"
                onChange={handleChange}
              />
            </label>
            <label className="cod">
              <span>CVC</span>
              <Input
                type="number"
                name="cod"
                placeholder="EX: 123"
                onClick={handleChange}
              />
            </label>
          </div>
          <div className="container-submit">
            <Input
              type="submit"
              name="cod"
              placeholder="EX: 123"
              onClick={() => {
                handleClick;
              }}
            />
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
