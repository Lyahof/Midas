import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem";
import Title from "./Title";
import SliderSaleBlock from "./SliderSaleBlock";

const menu = [
  {
    title: "Горячие блюда",
    link: "/slider-icons/hot.webp",
    foodCategory: "hot",
  },
  { title: "Супы", link: "/slider-icons/soups.webp", foodCategory: "soups" },
  {
    title: "Хинкали",
    link: "/slider-icons/hinkali.webp",
    foodCategory: "hinkali",
  },
  {
    title: "Холодные закуски",
    link: "/slider-icons/cold.webp",
    foodCategory: "cold",
  },
  {
    title: "Салаты",
    link: "/slider-icons/salads.webp",
    foodCategory: "salads",
  },
  { title: "Соусы", link: "/slider-icons/sauces.webp", foodCategory: "sauces" },
  {
    title: "Свежая выпечка",
    link: "/slider-icons/bakery.webp",
    foodCategory: "bakery",
  },
  {
    title: "Десерты",
    link: "/slider-icons/deserts.webp",
    foodCategory: "deserts",
  },
  {
    title: "Напитки",
    link: "/slider-icons/drinks.webp",
    foodCategory: "drinks",
  },
];

const StyledMenuSlider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 8rem;
`;

function MenuSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledMenuSlider>
      <Title align="center">Меню</Title>

      <Slider {...settings}>
        <SliderSaleBlock />
        {menu.map((item) => (
          <SliderItem item={item} key={item.link} />
        ))}
      </Slider>
    </StyledMenuSlider>
  );
}

export default MenuSlider;
