import Image from "next/image";
import React from "react";
import { ArrowDown } from "lucide-react";
import HeroOrbit from "./HeroOrbit";

const HeroSection = () => {
  return (
    <div className="relative py-32 md:py-48 lg:py-60 flex flex-col items-center justify-center z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Grain background image */}
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: "url('/grain.jpg')",
          }}
        />

        {/* Rings - increasing size */}
        <div className="hero-ring" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220px]" />

        {/* Star 1 */}
        <HeroOrbit size={800} rotation={288}>
          <Image
            src="/star.svg"
            alt="star"
            width={112}
            height={112}
            className="size-28"
          />
        </HeroOrbit>

        {/* Star 2 */}
        <HeroOrbit size={560} rotation={20}>
          <Image
            src="/star.svg"
            alt="star"
            width={48}
            height={48}
            className="size-12"
          />
        </HeroOrbit>

        {/* Star 3 */}
        <HeroOrbit size={570} rotation={100}>
          <Image
            src="/star.svg"
            alt="star"
            width={32}
            height={32}
            className="size-8"
          />
        </HeroOrbit>

        {/* Sparkle 1 */}
        <HeroOrbit size={430} rotation={340}>
          <Image
            src="/sparkle.png"
            alt="sparkle"
            width={32}
            height={32}
            className="size-12 opacity-50"
          />
        </HeroOrbit>

        {/* Sparkle 2 */}
        <HeroOrbit size={440} rotation={79}>
          <Image
            src="/sparkle.png"
            alt="sparkle"
            width={32}
            height={32}
            className="size-7 opacity-55"
          />
        </HeroOrbit>

        {/* Sparkle 3 */}
        <HeroOrbit size={520} rotation={178}>
          <Image
            src="/sparkle.png"
            alt="sparkle"
            width={32}
            height={32}
            className="size-10 opacity-60"
          />
        </HeroOrbit>

        {/* Sparkle 4 */}
        <HeroOrbit size={700} rotation={148}>
          <Image
            src="/sparkle.png"
            alt="sparkle"
            width={32}
            height={32}
            className="size-14 opacity-60"
          />
        </HeroOrbit>

        {/* Circle 1 */}
        <HeroOrbit size={710} rotation={100}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        {/* Circle 2 */}
        <HeroOrbit size={520} rotation={320}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        {/* Circle 3 */}
        <HeroOrbit size={650} rotation={355}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container flex flex-col items-center justify-center px-4">
        {/* Image and Status */}
        <div className="flex flex-col items-center justify-start">
          <Image
            src="/memoji.png"
            alt="memoji"
            width={100}
            height={100}
            quality={100}
            className="size-[100px]"
          />

          <div className="flex items-center gap-2 rounded-lg bg-gray-950 border border-gray-800 px-4 py-2">
            <div className="bg-green-500 size-2.5 rounded-full animate-pulse" />
            <div className="text-sm font-medium">Available to work</div>
          </div>
        </div>

        {/* Title and Info */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>

          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialise in transforming designs into functional web
            applications.
          </p>
        </div>

        {/* Buttons - CTAs */}
        <div className="flex flex-col md:flex-row justify-center mx-auto gap-4 mt-8 z-10">
          <button
            type="button"
            className="flex items-center gap-2 border border-white/15 px-6 h-12 rounded-md cursor-pointer hover:bg-gray-950/30 transition duration-300"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown size={16} className="size-4" />
          </button>

          <button
            type="button"
            className="flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded cursor-pointer hover:bg-white/80 transition duration-300"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
