
import { Github, Linkedin } from "react-bootstrap-icons";
import '../App.css';

export default function Contact() {
  return (
    <div className="overflow-x-hidden w-full flex flex-col items-center justify-center h-screen px-4 md:px-10 text-xl md:text-2xl text-center text-[#01c48a] md:mr-[1000px]">
      <p>If you want to contact me, please write to:</p>
      <a
        href="mailto:nigamkhushi731@gmail.com"
        className="text-shadow hover:scale-110 hover:font-bold transition-all duration-300"
      >
        nigamkhushi731@gmail.com
      </a>
      <p className="mt-5">My social media addresses:</p>
      <div
        className="flex bg-transparent h-[60px] p-3 gap-6 rounded mt-2 backdrop-blur-sm"
      >
        <a
          href="https://github.com/khushiNgm"
          target="_blank"
          className="relative group"
        >
          <Github
            color="#171516"
            size={36}
            className="transition-shadow group-hover:shadow-lg group-hover:shadow-white"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/khushi-nigam-635763272"
          target="_blank"
          className="relative group"
        >
          <Linkedin
            color="royalblue"
            size={36}
            className="transition-shadow group-hover:shadow-lg group-hover:shadow-[#4169e1]"
          />
        </a>
      </div>
    </div>
  );
}
