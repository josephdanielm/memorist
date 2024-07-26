import React from "react";
import "./App.css";
import githubLogo from "./assets/github-mark.svg";
import GameController from "./components/GameController.jsx";

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
    <main className="px-4 flex flex-col grow max-w-4xl mx-auto">
      <article className="mx-auto text-center">
        <p>Click an artwork to gain a point.</p>
        <p>Don&apos;t click the same artwork twice.</p>
      </article>
      <section className="flex flex-col grow">
        <GameController />
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-300 fixed bottom-0 left-0 right-0">
      <div className="mx-auto w-fit py-2">
        <img src={githubLogo} alt="Github Icon" className="w-8" />
      </div>
    </footer>
  );
}

export default App;
