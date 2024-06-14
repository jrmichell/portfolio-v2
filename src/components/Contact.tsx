import { useEffect } from "react";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import ContactImg from "../assets/contact.jpg";
import { FaLinkedinIn, FaGithub, FaTwitch } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import TypeformEmbed from "./TypeformEmbed";

export default function Contact() {
  const formId = "Ip1URDkh";

  useEffect(() => {
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Element name="contact" className="w-full lg:h-screen z-100">
      <div className="max-w-[1240px] w-full m-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase py-4 text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Let&#39;s Connect</h2>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* left */}
          <div className="col-span-2 w-full h-full shadow-xl rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src={ContactImg}
                  alt="Contact Image"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  width="550px"
                  height="550px"
                />
                <div>
                  <h2 className="py-2">Jack Michell</h2>
                  <p>Software Engineer</p>
                  <p className="py-4">
                    I am currently taking commissions. Contact me and let&#39;s
                    connect.
                  </p>
                </div>
                <div>
                  <p className="uppercase text-center pt-8 text-[#5651e5]">
                    Connect With Me
                  </p>
                  <div className="flex items-center justify-evenly py-4">
                    <a
                      href="https://www.linkedin.com/in/jack-michell/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn size={20} />
                      </div>
                    </a>
                    <a
                      href="https://twitch.tv/Jack2xDev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaTwitch size={20} />
                      </div>
                    </a>
                    <a
                      href="https://github.com/jrmichell"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub size={20} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-2 w-full shadow-xl rounded-xl lg:p-4">
            <div className="flex justify-center items-center">
              <TypeformEmbed
                formId={formId}
                height={550}
                className="p-4 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link to="hero" smooth={true} duration={300}>
            <div>
              <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Element>
  );
}
