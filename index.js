function Match(props) {
  return (
    <div className="match">
      <div class="l-logo">
        <img src="pl.jpeg" alt="Premier League" />
      </div>
      <div class="home">
        <div class="team-name">
          <p>{props.team1.name}</p>
        </div>
        <div class="team-pl">
          <img src={props.team1.logo} alt={props.team1.name} />
        </div>
      </div>
      <div class="vs">
        <p>VS</p>
      </div>
      <div class="away">
        <div class="team-pl">
          <img src={props.team2.logo} alt={props.team2.name} />
        </div>
        <div class="team-name">
          <p>{props.team2.name}</p>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<h1>Hello, React !</h1>, document.getElementById("root"));
const home = {
  name: "Manchester City",
  logo: "manchester city.svg",
};

const away = {
  name: "Liverpool FC",
  logo: "liverpool.svg",
};

ReactDOM.render(
  <Match team1={home} team2={away} />,
  document.getElementById("content")
);
