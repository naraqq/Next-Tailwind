function Main() {
  return (
    <div className="bg-fuchsia-900 p-5 md:flex w-full">
      <div className="md:w-10/12">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          Great teamwork starts with a{" "}
          <span className="text-yellow-300">digital HQ</span>
        </h1>
        <p className="text-white text-center font-sm mb-4">
          With all your people, tools and <br></br> communication in one place,
          you can work faster and more flexibly than ever before
        </p>
        <button className="h-14 bg-white w-full rounded font-medium text-sm text-fuchsia-900 mb-8">
          GET SLACK FOR ANDROID
        </button>
      </div>
      <div className="bg-fuchsia-900 mb-5 overflow-hidden h-60">
        <video
          data-js-id="hero"
          aria-describedby="hero"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm"
            type="video/webm"
          ></source>
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/hero-product-ui.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
}

export default Main;
