import { motion } from "framer-motion";

import iit from "../../assets/ribbon/iit.png";
import ncert from "../../assets/ribbon/ncert.png";
import cbse from "../../assets/ribbon/cbse.png";
import digitalIndia from "../../assets/ribbon/digitalIndia.png";
import skillIndia from "../../assets/ribbon/skillIndia.png";
import betiBachaoBetiPadhao from "../../assets/ribbon/betiBachaoBetiPadhao.png";
import swayam from "../../assets/ribbon/swayam.png";
import AICTE from "../../assets/ribbon/AICTE.png";
import IGNOU from "../../assets/ribbon/IGNOU.png";
import IIMB from "../../assets/ribbon/IIMB.png";
import INI from "../../assets/ribbon/INI.png";
import NIOS from "../../assets/ribbon/NIOS.png";
import NITTTR from "../../assets/ribbon/NITTTR.png";
import NPTEL from "../../assets/ribbon/NPTEL.png";
import UGC from "../../assets/ribbon/UGC.png";
import vidyanjali from "../../assets/ribbon/vidyanjali.png";
import epathshalla from "../../assets/ribbon/epathshalla.jpg";
import diksha from "../../assets/ribbon/diksha.jpg";
import kvs from "../../assets/ribbon/kvs.png";
import Pradhan_Mantri_Kaushal_Vikas_Yojna from "../../assets/ribbon/Pradhan_Mantri_Kaushal_Vikas_Yojna.png";

const AnimatedRibbon = () => {
  return (
    <>
      <div className="relative z-20 mx-auto max-w-6xl px-4 md:px-8 items-center justify-center mt-10">
        <h2 className="font-bold text-gray-600 font2">Trusted By </h2>
      </div>
      <section className="pb-20">
        <div className="flex overflow-hidden">
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>

          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>

          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
        </div>

        <div className="flex overflow-hidden mt-4">
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>

          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>

          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
        </div>
      </section>
    </>
  );
};

// ------------------------
const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }} // Increased duration for slower animation
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoImage = ({ src }: { src: string }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <img src={src} alt="Logo" className="w-12 md:w-20 h-auto" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoImage src={iit} />
    <LogoImage src={ncert} />
    <LogoImage src={cbse} />
    <LogoImage src={digitalIndia} />
    <LogoImage src={skillIndia} />
    <LogoImage src={INI} />
    <LogoImage src={NIOS} />
    <LogoImage src={NITTTR} />
    <LogoImage src={NPTEL} />
    <LogoImage src={UGC} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoImage src={betiBachaoBetiPadhao} />
    <LogoImage src={swayam} />
    <LogoImage src={AICTE} />
    <LogoImage src={IGNOU} />
    <LogoImage src={IIMB} />
    <LogoImage src={vidyanjali} />
    <LogoImage src={epathshalla} />
    <LogoImage src={diksha} />
    <LogoImage src={kvs} />
    <LogoImage src={Pradhan_Mantri_Kaushal_Vikas_Yojna} />
  </>
);

export default AnimatedRibbon;
