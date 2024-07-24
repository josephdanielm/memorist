import React from "react";
import "./App.css";
import githubLogo from "./assets/github-mark.svg";
import Gameboard from "./components/Gameboard.jsx";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <nav className="py-2">
        <h1 className="font-normal text-4xl text-center">Memorist</h1>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main className="p-4 flex flex-col gap-y-4">
      <article className="mx-auto text-center">
        <p>Click an artwork to gain a point.</p>
        <p>Don&apos;t click the same artwork twice.</p>
      </article>
      <section>
        {/* TODO: add scoreboard component */}
        <Gameboard />
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto w-fit py-2">
        <img src={githubLogo} alt="Github Icon" className="w-8" />
      </div>
    </footer>
  );
}

export default App;
