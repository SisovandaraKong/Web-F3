import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen "
      style={{
        backgroundImage: `url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2uQRrnlUBwOoqlNbcQSpYr/a4fbb0dbc1a6b5ba696410ff091039a8/GettyImages-2170485830.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000)`,
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/30"></div>
      <div className="relative z-10 max-w-screen-xl mx-auto text-start flex flex-col  justify-center h-full">
        <h1
          data-aos="fade-right"
          data-aos-duration="800"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          {t("heroTitle")}
          <strong className="block text-secondary uppercase mt-2">
            {t("heroHighlight")}
          </strong>
        </h1>
        <p
          data-aos="fade-left"
          data-aos-duration="800"
          className="text-lg sm:text-xl text-white/90 max-w-2xl">
          {t("heroDescription")}
        </p>
      </div>
    </section>
  );
}
