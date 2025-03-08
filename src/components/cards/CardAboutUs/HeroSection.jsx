export default function HeroSection() {
    return (
      <div className="">
        <section className="relative bg-cover bg-center bg-no-repeat px-6 sm:px-12 lg:px-36 h-screen flex items-center"
          style={{
            backgroundImage: `url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2uQRrnlUBwOoqlNbcQSpYr/a4fbb0dbc1a6b5ba696410ff091039a8/GettyImages-2170485830.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000)`
          }}>
          <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-900/95 sm:to-gray-900/25"></div>
  
          <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32 text-center sm:text-left">
            <div data-aos-duration="700" className="max-w-2xl">
              <h1 data-aos="fade-right" className="text-4xl sm:text-5xl font-extrabold text-white">
                Welcome To
                <strong className="block text-secondary uppercase">JobSeek.</strong>
              </h1>
              <p data-aos="fade-left" className="mt-4 text-lg text-white">
                <span className="text-primary">We connect job seekers, </span>
                freelancers, and employers. Our platform makes it easy to find work and hire talent.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  