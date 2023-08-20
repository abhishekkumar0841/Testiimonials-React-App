import Card from "./Card";
import Heading from "./Heading";
import Buttons from "./Buttons";
import useTestimonial from "../hooks/useTestimonial";

const Testimonial = () => {
  const [index, data, leftHandler, rightHandler, surpriseHandler] =
    useTestimonial();

  return (
    <div className="bg-gray-50 w-[500px] min-h-[450px] flex items-center justify-center flex-col">
      <Heading />

      <Card
        image={data[index].image}
        name={data[index].name}
        job={data[index].job}
        text={data[index].text}
      />

      <Buttons
        data={data}
        leftHandler={leftHandler}
        rightHandler={rightHandler}
        surpriseHandler={surpriseHandler}
      />
    </div>
  );
};

export default Testimonial;
