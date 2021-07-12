import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from 'components/ProductItem';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 2
  },
};



const CarouselProducts = ({products}) => {
  return (
  <Carousel
    swipeable={false}
    draggable={true}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    customTransition="all 3.0"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
     {products.map((product) => (
                <ProductItem name={product.name} price={product.price} picture={product.picture[0].url || ""} key={product.id}/>
    )) }       
  </Carousel>
  )
};

export default CarouselProducts