import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledImg = styled(Link)`
  background-image: url(${(props) => props.link});
  background-repeat: no-repeat;
  background-size: 100% auto;
  max-width: 23rem;
  height: 31rem;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #09234e;
    & p {
      border-bottom: 1px solid #fff;
    }
  }
  @media (max-width: 30em) {
    max-width: 15rem;
    height: 20rem;
  }
`;

const StyledTitle = styled.p`
  font-size: 2rem;
  text-align: center;
  width: 12rem;
  transition: all 0.3s;
  @media (max-width: 30em) {
    font-size: 1.6rem;
  }
`;

function SliderItem({ item }) {
  const { title, link, foodCategory } = item;

  return (
    <StyledImg link={link} to={`${foodCategory}`}>
      <StyledTitle>{title}</StyledTitle>
    </StyledImg>
  );
}

export default SliderItem;
