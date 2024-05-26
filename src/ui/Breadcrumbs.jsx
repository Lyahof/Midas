import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const pathLabels = {
  main: "Главная",
  hot: "Горячие блюда",
  soups: "Супы",
  hinkali: "Хинкали",
  cold: "Холодные закуски",
  deserts: "Десерты",
  sauces: "Соусы",
  drinks: "Напитки",
  bakery: "Свежая выпечка",
  salads: "Салаты",
  login: "Вход в личный кабинет",
  cart: "Корзина",
  placingOrder: "Оформление заказа",
  feedback: "Обратная связь",
  contacts: "Контакты",
  policy: "Политика конфиденциальности и оферта",
  terms: "Пользовательское соглашение",
  promotions: "Акции",
};

const StyledBreadcrumbs = styled.div`
  margin-top: 1.5rem;
  font-size: 1.4rem;
  margin-bottom: 5rem;

  @media (max-width: 28em) {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
`;

const StyledLink = styled(Link)`
  transition: all 0.3s;
  &:hover {
    color: var(--yellow-color);
  }
`;

const LastCrumb = styled.span`
  opacity: 70%;
`;

const CrumbSeparator = styled.span`
  margin: 0 1.2rem;
`;

function Breadcrumbs({ foodName }) {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  if (paths.length <= 1) return null;

  return (
    <StyledBreadcrumbs>
      {paths.map((path, index) => (
        <span key={path}>
          {index > 0 && <CrumbSeparator>/</CrumbSeparator>}

          {index === paths.length - 1 ? (
            <LastCrumb>{foodName ? foodName : pathLabels[path]}</LastCrumb>
          ) : (
            <StyledLink to={"/" + paths.slice(0, index + 1).join("/")}>
              {index === 0 ? pathLabels.main : pathLabels[path]}
            </StyledLink>
          )}
        </span>
      ))}
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;
