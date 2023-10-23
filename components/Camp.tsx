"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useRef } from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-[91%] sm:h-full w-full min-w-[500px] sm:min-w-[1100px] ${backgroundImage} bg-contain sm:bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                alt="person"
                key={url}
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div
        ref={scrollRef}
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Some where in the wild"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Texas Camp Site"
          subtitle="Guadalupe Mountains National Park, Texas"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-4"
          title="Yellow Stone Camp Site"
          subtitle="Yellow Stone National Park, Wyoming"
          peopleJoined="50+ Joined"
        />

        {/* Left Arrow */}
        <div className="absolute flex items-start mt-[170px] sm:mt-[190px] lg:items-center lg:mt-0 h-full left-0 top-0 z-50">
          <button className="ml-10">
            <Image
              src="/left-chevron-svg.svg"
              alt="arrow-left"
              width={50}
              height={50}
              onClick={scrollLeft}
              className="hover:cursor-pointer hover:w-[60px] hover:h-[60px]"
            />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute flex items-start mt-[170px] sm:mt-[190px] lg:items-center lg:mt-0 h-full right-0 top-0 z-50">
          <button className="mr-10">
            <Image
              src="/right-chevron-svg.svg"
              alt="arrow-right"
              width={50}
              height={50}
              onClick={scrollRight}
              className="hover:cursor-pointer hover:w-[60px] hover:h-[60px]"
            />
          </button>
        </div>
      </div>
      <div className="flex-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feel Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That&apos;s why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
