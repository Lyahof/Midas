import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import PhoneLink from "./PhoneLink";
import EmailLink from "./EmailLink";
import Line from "./Line";

const StyledFooter = styled.footer`
  background-color: #000;
`;

const Contacts = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  padding: 5rem 2rem 3rem 2rem;
  display: grid;
  grid-template-columns: 1.3fr 3fr 1.3fr 0.6fr;
  align-items: end;
  column-gap: 1.8rem;

  @media (max-width: 64em) {
    grid-template-columns: 1fr 2fr;
    row-gap: 3rem;
  }

  @media (max-width: 44em) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
`;

const StyledFooterList = styled.ul`
  display: flex;
  gap: 5rem;
  justify-content: ${(props) => props.justify};

  @media (max-width: 64em) {
    justify-content: flex-end;
  }

  @media (max-width: 44em) {
    gap: 1.6rem;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const StyledFooterLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 1.2rem;
    transition: all 0.3s;
    border-bottom: 1px solid #ffffffa9;
  }
  &:hover,
  &:active {
    color: var(--yellow-color);
    border-bottom: 1px solid transparent;
  }
`;

const Copyright = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  padding: 3rem 2rem 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  column-gap: 3rem;

  @media (max-width: 64em) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    justify-items: center;
  }
`;

const Name = styled.p`
  font-size: 1.2rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <Contacts>
        <Logo />
        <StyledFooterList>
          <StyledFooterLink to="feedback">Обратная связь</StyledFooterLink>
          <StyledFooterLink to="delivery">Доставка</StyledFooterLink>
          <StyledFooterLink to="payment">Оплата</StyledFooterLink>
          <StyledFooterLink to="contacts">Контакты</StyledFooterLink>
        </StyledFooterList>
        <PhoneLink href="tel:+7(499)841-67-29">+7 (499) 841-67-29</PhoneLink>
        <EmailLink href="delivery@midas.rest">delivery@midas.rest</EmailLink>
      </Contacts>

      <Line width="146rem" />

      <Copyright>
        <Name>© 2009–2024, «MIDAS», официальный сайт</Name>
        <StyledFooterList justify="flex-end">
          <StyledFooterLink to="policy">
            Политика конфиденциальности и оферта
          </StyledFooterLink>
          <StyledFooterLink to="terms">
            Пользовательское соглашение
          </StyledFooterLink>
        </StyledFooterList>
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;
