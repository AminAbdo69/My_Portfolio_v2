// import { cn } from "@/lib/utils";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerationEffect";
// import MagicButton from "./ui/MagicButton";
// import { FaLocationArrow } from "react-icons/fa6";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="top-10 left-full h-[80vh] w-[50vw]"
//           fill="purple"
//         />
//         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
//       </div>
//       {/* Grid Background */}
//       <div
//         className=" w-full h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
//        absolute top-0 left-0 flex items-center justify-center"
//       >
//         <div
//           className={cn(
//             "absolute inset-0",
//             "[background-size:40px_40px]",
//             "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
//             "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
//           )}
//         />
//         <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
//       </div>
//       <div className="flex justify-center relative my-20 z-10 ">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 ">
//             Dynamic Web Magic with Next.js
//           </p>

//           <TextGenerateEffect
//             words="Transforming Concepts into Seamless User Experiences"
//             className="text-center text-[40px] md:text-5xl lg:text-6xl"
//           />

//           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
//             Hi! I&apos;m Amin, a FrontEnd Developer based in Cairo.
//           </p>
//           <a href="#about">
//             <MagicButton
//               title="show my work "
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerationEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div
        className="w-full h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for fade effect */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Amin, a FrontEnd Developer based in Cairo.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
