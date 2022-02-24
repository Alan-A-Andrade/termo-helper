import { HelpStyled } from "./style";
import tutorial from "../../assets/tutorial.gif"
import { useState } from "react";

function MoreInformation(Props) {

  return (
    <HelpStyled show={Props.state} onClick={() => Props.setState(false)}>
      <div className="help-text-box">
        <div>
          <h1>Mais informações</h1>
          <p>Prazer, me chamo Alan! Caso queria me conhecer mais, pode me achar no <a href="https://www.linkedin.com/in/alan-de-andrade/">LinkedIn</a> {<br />}</p>
          <p><a href="https://term.ooo/">Termo</a> foi criado por <a href="https://twitter.com/fserb">Fernando Serboncini</a>{<br />}</p>
        </div>
      </div>
    </HelpStyled>
  )
}

export default MoreInformation