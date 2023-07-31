import { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [form, setForm] = useState({
    name: '',
    card: {
      numberCard: '',
      month: '',
      year: '',
      codSecury: '',
    },
  });

  function handleChangeName(e) {
    setForm({
      ...form,
      name: e.target.value,
    });
  }

  const handleChangeNumberCard = (e) => {
    const value = e.target.value;
    const formattedValue = value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();

    setForm({
      ...form,
      card: {
        ...form.card,
        numberCard: formattedValue,
      },
    });
  };

  const handleChangeValidityMonth = (e) => {
    setForm({
      ...form,
      card: {
        ...form.card,
        month: e.target.value,
      },
    });
  };

  const handleChangeValidityYear = (e) => {
    setForm({
      ...form,
      card: {
        ...form.card,
        year: e.target.value,
      },
    });
  };

  const handleChangeValiditySecury = (e) => {
    setForm({
      ...form,
      card: {
        ...form.card,
        codSecury: e.target.value,
      },
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Clicou');
  };

  return (
    <main>
      <div className="photo hide">
        <div className="front-card">
          {form.card.numberCard !== '' ? (
            <span>{form.card.numberCard}</span>
          ) : (
            <span> 1234 5678 9014 4567</span>
          )}
          <img
            src="./img/card-logo.svg"
            alt="image card front"
            className="logo-card"
          />
          <img src="./img/bg-card-front.png" alt="" className="card-front" />
          <div className="card-description">
            <div className="user-card">
              {form.name !== '' ? <p>{form.name}</p> : <p>Jane Almeida</p>}
            </div>
            <div className="valid-card">
              {form.card.month !== '' ? <> {form.card.month}</> : '00'} /
              {form.card.year !== '' ? <> {form.card.year}</> : ' 00'}
            </div>
          </div>
        </div>
        <div className="back-card">
          {form.card.codSecury !== '' ? (
            <span>{form.card.codSecury}</span>
          ) : (
            <span>000</span>
          )}

          <img src="./img/bg-card-back.png" alt="image card back" />
        </div>
      </div>
      <div className="layout-background"></div>
      <div className="container-form">
        <form>
          <label>
            TÍTULAR DO CARTÃO
            <Input
              type="text"
              name="name"
              value={form.name}
              placeholder="ex: Jane Almeida"
              maxLength={19}
              required={true}
              onChange={handleChangeName}
            />
          </label>
          <label>
            NÚMERO DO CARTÃO
            <Input
              type="text"
              name="numberCard"
              value={form.card.numberCard}
              placeholder="Ex: 1234 5678 9123 0000"
              maxLength={19}
              required={true}
              onChange={handleChangeNumberCard}
            />
          </label>
          <div className="date-card">
            <label className="mes">
              <span>EXP. DATE</span>
              <Input
                type="text"
                name="month"
                value={form.card.month}
                placeholder="MM"
                required={true}
                maxLength={2}
                onChange={handleChangeValidityMonth}
              />
            </label>
            <label className="dia">
              <span>(MM/YY)</span>
              <Input
                type="text"
                name="year"
                value={form.card.year}
                placeholder="YY"
                required={true}
                maxLength={2}
                onChange={handleChangeValidityYear}
              />
            </label>
            <label className="cod">
              <span>CVC</span>
              <Input
                type="text"
                name="codSecury"
                value={form.card.codSecury}
                placeholder="EX: 123"
                required={true}
                maxLength={3}
                onChange={handleChangeValiditySecury}
              />
            </label>
          </div>
          <button className="submit" type="submit" onClick={handleClick}>
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
