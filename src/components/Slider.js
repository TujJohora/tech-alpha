import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3910545/pexels-photo-3910545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: " Get stunning photos with our DSLR cameras!",
    body: "Our selection of DSLR cameras offers a range of features and capabilities to help you take professional-grade photos. From high megapixel counts to advanced autofocus systems, you'll find the perfect camera for your needs.",
    cta: "Shop DSLR cameras now",
    category: "cameras",
  },
  {
    id: 2,
    src: "https://i.ibb.co/mtc8v16/tv.jpg",
    headline: "Upgrade your home entertainment with a new TV",
    body: "A new TV can enhance your home entertainment experience like nothing else. With stunning picture quality and a range of sizes and features to choose from, you can find the perfect TV for your home. From streaming movies and shows to watching live sports, a new TV is a must-have for any home.",
    cta: "Shop TVs now",
    category: "tvs",
  },
  {
    id: 3,
    src: "https://i.ibb.co/kmr5qQv/headphones.jpg",
    headline: "Experience superior sound",
    body: "Whether you're at home, on a plane, or out and about, a good pair of headphones can make a big difference in your listening experience. From wired to wireless, noise-canceling to in-ear, there's a wide range of headphones to choose from to suit your needs and preferences. Upgrade your audio with a new pair today.",
    cta: "Shop headphones now",
    category: "headphones",
  },
  {
    id: 4,
    src: "https://i.ibb.co/JqxDhvZ/console.jpg",
    headline: "Take your gaming to the next level",
    body: "A gaming console is a must-have for any serious gamer. With a range of options to choose from, you can find the perfect console to suit your needs and budget. From the latest releases to classic systems, there's a console for every type of gamer. Step up your game with a new console today.",
    cta: "Shop gaming consoles now",
    category: "consoles",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/12955888/pexels-photo-12955888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Stay connected with smart watches",
    body: "A smart watch is more than just a timepiece - it's a versatile device that can help you stay connected, track your fitness, and more. With a range of styles and features to choose from, you can find the perfect smart watch to suit your needs and personal style. Upgrade your wrist game with a new smart watch today",
    cta: "Shop smart watches now",
    category: "smart-watches",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      {/* child 1. slider 2.button-parent */}
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {/* here we have send bg image dynamically */}
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className="btns absolute left-0 right-0 bottom-20 m-auto w-fit z-[1] text-2xl flex gap-10">
        <button
          onClick={prevSlide}
          className="previous-btn h-14 w-20 bg-violet-900 text-violet-200 border-2 border-violet-200 flex justify-center items-center  hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn  h-14 w-20 bg-violet-900 text-violet-200 border-2 border-violet-200  flex justify-center items-center hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
