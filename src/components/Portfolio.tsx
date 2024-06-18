import { useEffect } from "react";
import { Element, Events, scrollSpy } from "react-scroll";
import Helvera from "../assets/Helvera.png";
import TaskMaster from "../assets/TaskMaster.png";
import CrimsonOrb from "../assets/CrimsonOrb.png";

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
            <p className="py-2 mr-8">
              Here are some of the projects I have worked on. Click on the
              images to view the project and scroll to view more. if it is
              available. I will add more to this portfolio as time goes on. If
              you have any questions or would like to work with me, please feel
              free to reach out to me.
            </p>
          </div>
          <div>
            <div className="carousel w-full rounded-xl shadow-lg shadow-gray-400">
              <div id="item1" className="carousel-item w-full">
                <a href="https://crimsonorb.com" target="_blank">
                  <img src={CrimsonOrb} className="w-full" />
                </a>
              </div>
              <div id="item2" className="carousel-item w-full">
                <a href="https://helvera.vercel.app" target="_blank">
                  <img src={Helvera} className="w-full" />
                </a>
              </div>
              <div id="item3" className="carousel-item w-full">
                <a
                  href="https://github.com/jrmichell/taskmaster-frontend"
                  target="_blank"
                >
                  <img src={TaskMaster} className="w-full" />
                </a>
              </div>
            </div>
            <div className="flex justify-center w-full py-2 mt-2 gap-2">
              <a href="#item1" className="btn btn-md text-secondary">
                1
              </a>
              <a href="#item2" className="btn btn-md text-secondary">
                2
              </a>
              <a href="#item3" className="btn btn-md text-secondary">
                3
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
