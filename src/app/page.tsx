import Image from "next/image";

import { museoModernoFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="container flex h-full flex-col items-center py-8 text-center md:h-[calc(100svh-64px)] md:max-w-lg md:px-8 md:py-20 lg:max-w-2xl lg:py-12 xl:py-20">
      <h1
        className={`${museoModernoFont.className} text-center text-4xl text-[40px] md:text-5xl`}
      >
        encuentra un problema
        <br />
        <span className="text-5xl font-semibold text-primary xs:text-6xl md:text-6xl">
          construye la solución
        </span>
      </h1>
      <h3
        className={`${museoModernoFont.className} mt-4 text-2xl sm:text-[2rem]`}
      >
        la plataforma para{" "}
        <span className="font-bold text-primary">buidlers</span> que construyen
        el futuro
      </h3>
      <Button
        size="lg"
        className={`${museoModernoFont.className} z-10 mt-4 text-xl tracking-wide md:mt-10`}
      >
        🚧 en construcción 🏗️
      </Button>
      <div className="relative flex h-1/2 w-full items-end">
        <div className="bottom-0 flex w-full justify-center">
          <div className="relative -z-10 h-72 w-72 xs:h-96 xs:w-96 md:h-[416px] md:w-[416px] lg:h-80 lg:w-80 2xl:h-[480px] 2xl:w-[480px]">
            <Image
              src="/icons/android-chrome-512x512.png"
              alt="A cool toucan logo"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
