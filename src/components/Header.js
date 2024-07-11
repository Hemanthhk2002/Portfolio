import { Bars3Icon } from "@heroicons/react/24/solid";
import About from "./About";

export default function Header() {
  return (
    <header id="Header" className="flex justify-between px-4 py-4 bg-black">
      <h1 className="font-bold text-lg">Portfolio.</h1>
      <ul className="flex gap-2 px-10">
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="#Resume"> about</a>
        </li>
        <li>
          <a href="#Skills"> skills</a>
        </li>
        <li>
          <a href="#Projects"> projects</a>
        </li>
        <li>
          <a href="#Contact"> contact</a>
        </li>
      </ul>
    </header>
  );
}
