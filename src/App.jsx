import './App.css';

function App() {
  return (
    <main>
      <div className="photo">
        <div className="front-card">
          <span> 1234 5678 9014 4567</span>
          <img
            src="../public/img/card-logo.svg"
            alt="image card front"
            className="logo-card"
          />
          <img src="../public/img/bg-card-front.png" alt="" />
          <div className="card-description">
            <div className="user-card">Alexandre campos</div>
            <div className="valid-card">00/00</div>
          </div>
        </div>
        <div className="back-card">
          <span>000</span>
          <img src="../public/img/bg-card-back.png" alt="image card back" />
        </div>
      </div>
      <div className="box1"></div>
      <div className="box2">
        <form>
          <label>
            TÍTULAR DO CARTÃO
            <input type="text" name="name" placeholder="ex: Jane Almeida" />
          </label>
          <label>
            NÚMERO DO CARTÃO
            <input
              type="number"
              name="number"
              placeholder="Ex: 1234 5678 9123 0000"
            />
          </label>
          <div className="date-card">
            <label className="mes">
              <span>EXP. DATE</span>
              <input type="number" name="mes" placeholder="MM" />
            </label>
            <label className="dia">
              <span>(MM/YY)</span>
              <input type="number" name="dia" placeholder="YY" />
            </label>
            <label className="cod">
              <span>CVC</span>
              <input type="number" name="cod" placeholder="EX: 123" />
            </label>
          </div>
          <input className="submit" type="submit" value="Confirm" />
        </form>
      </div>
    </main>
  );
}

export default App;
