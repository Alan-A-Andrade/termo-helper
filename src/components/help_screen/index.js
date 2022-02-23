import { HelpStyled } from "./style";
import tutorial from "../../assets/tutorial.gif"
import { useState } from "react";

function HelpBox(Props) {



  return (
    <HelpStyled show={Props.state} onClick={() => Props.setState(false)}>
      <div className="help-text-box">
        <div>
          <h1>Tutorial</h1>
          <p>A intenção desse App é somente ser um auxílio para ajudar a achar palavras na lista de opções validas{<br />}</p>
          <p>1 - Utilize qualquer palavra inicial no Term.ooo, inclusive suas favoritas, ou use a sugestão da lista {<br />}</p>
          <p>2 - Preencha o helper como você preencheria o termo {<br />}</p>
          <p>3 - Clique em cima da letra para alterar sua resposta (verde, amarelo, marrom), igual foi o resultado no Term.ooo {<br />}</p>
          <p>4 - Pronto! Uma nova lista de sugestões será gerada automaticamente com as informações passadas! {<br />}</p>
        </div>
        <img src={tutorial} alt="Tutorial" />
      </div>
    </HelpStyled>
  )
}

export default HelpBox