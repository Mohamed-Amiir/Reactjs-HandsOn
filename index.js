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
const home = {
  name: "Manchester City",
  logo: "manchester city.svg",
};
const away = {
  name: "Liverpool FC",
  logo: "liverpool.svg",
};
const match = (
  <div className="match">
    <div class="l-logo">
      <img src="pl.jpeg" alt="Premier League" />
    </div>
    <div class="home">
      <div class="team-name">
        <p>{home.name}</p>
      </div>
      <div class="team-pl">
        <img src={home.logo} alt={home.name} />
      </div>
    </div>
    <div class="vs">
      <p>VS</p>
    </div>
    <div class="away">
      <div class="team-pl">
        <img src={away.logo} alt={away.name} />
      </div>
      <div class="team-name">
        <p>{away.name}</p>
      </div>
    </div>
  </div>
);
function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}
function H1() {
  return <h1>Fun Facts about React !</h1>;
}
function Content() {
  return (
    <ol>
      <li>Fuck Mark Zuckerburg</li>
      <li>Fuck Mark Zuckerburg</li>
      <li>Fuck Mark Zuckerburg</li>
      <li>Fuck Mark Zuckerburg</li>
      <li>Fuck Mark Zuckerburg</li>
      <li>Fuck Mark Zuckerburg</li>
    </ol>
  );
}
function Footer() {
  return <footer>Mohamed Amir</footer>;
}
const page = (
  <div>
    <Header />
    <H1 />
    <Content />
    <Footer />
  </div>
);
ReactDOM.render(page, document.getElementById("root"));
