function TeamCase2() {
  return (
    <div className="team lg:p-20 bg-orange-50 flex-row lg:flex">
      <div className="lg:order-2">
        <video
          data-js-id="flexibility"
          aria-describedby="flexibility"
          autoPlay
          loop
          muted
          playsInLine
        >
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility-mobile.webm"
            type="video/webm"
          ></source>
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/flexibility-mobile.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="bg-orange-50 lg:order-1">
        <h3 className="font-bold text-6xl lg:p-10 ">
          Choose how you want to work
        </h3>
        <p className="lg:p-10 p-2">
          In Slack, you’ve got all the flexibility to work when, where and how
          it’s best for you. You can easily chat, send audio and video clips, or
          hop on a huddle to talk things out live.
        </p>
        <a className="lg:p-10 text-sky-600" href="">
          Learn more about flexible communication
        </a>
      </div>
    </div>
  );
}

export default TeamCase2;
