import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub, FaTwitch } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Hero() {
  return (
    <div name="hero" className="w-full h-screen text-center">
      <div className="w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest">Let&#39;s Connect</p>
          <h1 className="py-4">
            Hello, I&#39;m <span className="text-[#5651e5]">Jack</span>
          </h1>
          <h1 className="py-2">A Software Engineer</h1>
          <p className="py-4 sm:max-w-[70%] m-auto">
            I am dedicated to learning emerging technologies and developing
            solutions that address practical issues in the real world.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
            <Link to="contact" smooth={true} duration={500}>
              <div className="rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
