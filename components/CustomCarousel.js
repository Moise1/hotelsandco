import Carousel from "react-multi-carousel";

export default function CustomCarousel(props) {
  const { itemClass, containerClass, deviceType, children, responsive } = props;
  return (
    <Carousel
      itemClass={itemClass}
      containerClass={containerClass}
      responsive={responsive}
      swipeable={false}
      draggable={false}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      autoPlay={false}
      autoPlaySpeed={1000}
      customTransition="all .5"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
    >
      {children}
    </Carousel>
  );
}
