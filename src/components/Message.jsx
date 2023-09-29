import React from 'react';
import './Message.css';

const Message = () => {
  return (
    <div className="container-message">
      <img
        src="/public/img/icon-complete.svg"
        alt="icone de confirmação de envio"
      />
      <h1>Obrigado!</h1>
      <p>Adicionamos os detalhes do seu cartão.</p>
      <button>Continue</button>
    </div>
  );
};

export default Message;
