import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';

import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name's András",
      'I love to see ideas come to life',
      'Even better to make them happen myself',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src=""
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          Full-Stack Web Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-btn">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-btn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-btn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-btn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
