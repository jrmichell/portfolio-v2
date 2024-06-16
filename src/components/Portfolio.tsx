import { useEffect } from "react";
import { Element, Events, scrollSpy } from "react-scroll";
import CrimsonOrb from "../assets/CrimsonOrb.jpeg";
import Helvera from "../assets/Helvera.jpeg";
import Klink from "../assets/Klink.jpeg";

export default function Portfolio() {
  useEffect(() => {
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Element name="portfolio">
      <div className="w-full md:h-screen px-8 flex justify-center items-center py-16">
        <div className="max-w-[1240px] m-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-start">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              Portfolio
            </p>
            <h2 className="py-4">What I've Done</h2>
            <p className="py-2">
              Here are some of the projects I have worked on. Click on the
              images to view the project and scroll to view more. if it is
              available. I will add more to this portfolio as time goes on. If
              you have any questions or would like to work with me, please feel
              free to reach out to me.
            </p>
          </div>
          <div className="carousel carousel-center max-w-2xl p-4 space-x-4 shadow-xl rounded-box">
            <div className="carousel-item">
              <a href="https://crimsonorb.com" target="_blank">
                <img
                  src={CrimsonOrb}
                  className="rounded-box w-72 h-96 hover:scale-105 duration-300 ease-in"
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://helvera.vercel.app">
                <img
                  src={Helvera}
                  className="rounded-box w-72 h-96 hover:scale-105 duration-300 ease-in"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}