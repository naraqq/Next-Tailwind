function TeamCase() {
  return (
    <div className="team lg:p-20 bg-orange-50 flex-row lg:flex">
      <div className="team-left mb-5">
        <video className="video-2 " autoPlay muted loop>
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness-mobile.webm"
            type="video/webm"
          ></source>
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness-mobile.mp4"
            type="video/mp4"
          ></source>
          <source src="/blue.mp4" />
        </video>
      </div>
      <div className="team-right lg:bg-orange-50 lg:p-20 w-5/6 p-6">
        <h3 className="font-bold text-6xl lg:p-10">Bring your team together</h3>
        <p className="lg:p-10 p-2">
          At the heart of Slack are channels: organized spaces for everyone and
          everything you need for work. In channels, it’s easier to connect
          across departments, offices, time zones and even other companies.
        </p>
        <a className="lg:p-10 text-sky-600" href="">
          Learn more about channels
        </a>
      </div>
    </div>
  );
}

export default TeamCase;
