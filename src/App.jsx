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
      <nav className="py-2 sm:py-4 xl:py-6">
        <h1 className="font-normal text-3xl sm:text-4xl xl:text-5xl w-fit mx-auto text-center bg-gradient-to-r from-zinc-50 via-zinc-200 to-zinc-500 text-transparent bg-clip-text">
          Memorist
        </h1>
        <div className="mx-auto text-sm font-normal text-center py-2">
          Thank you to the{" "}
          <u>
            <a href="https://www.artic.edu/" target="_blank">
              Art Institute of Chicago
            </a>
          </u>
          .
        </div>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main className="px-4 flex flex-col grow max-w-4xl mx-auto">
      <article className="mx-auto text-center">
        <p className="font-normal text-sm">Click an artwork to gain a point.</p>
        <p className="font-normal text-sm">
          Don&apos;t click the same artwork twice.
        </p>
      </article>
      <section className="flex flex-col grow">
        <GameController />
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-200 fixed bottom-0 left-0 right-0">
      <div className="mx-auto w-fit py-2">
        <a href="https://github.com/josephdanielm/memorist" target="_blank">
          <img src={githubLogo} alt="Github Icon" className="w-8" />
        </a>
      </div>
    </footer>
  );
}

export default App;
