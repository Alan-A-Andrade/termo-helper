import { HeaderStyled, AppTitle, ButtonHeader } from "./styled";

function Header(Props) {

  return (
    <HeaderStyled>
      <ButtonHeader onClick={() => Props.setHelp(!Props.helpState)}>
        ?
      </ButtonHeader>
      <AppTitle>TERMO HELPER</AppTitle>
      <ButtonHeader onClick={() => Props.setInfo(!Props.infoState)}>
        M
      </ButtonHeader>
    </HeaderStyled >
  )
}

export default Header