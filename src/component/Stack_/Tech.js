import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
import sass from "./sass.png";
import git from "./git.png";
import github from "./github.png";
import vscode from "./vscode.png";
import figma from "./figma.png";
import Fmotion from "./motion.png";

const Stacks = () => {
  return (
    <div className="Stack" id="Stack">
      <div className="Up">
        <p className="Title">My Tech Stack</p>
        <p> Technologies I’ve been working with recently</p>
      </div>
      <div className="Down">
        <ul>
          <li>
            <img src={html} alt="html" height="60px" />
          </li>
          <li>
            <img src={css} alt="css" height="60px" />
          </li>
          <li>
            <img src={js} alt="js" height="60px" />
          </li>
          <li>
            <img src={react} alt="react" height="60px" />
          </li>
          <li>
            <img src={sass} alt="sass" height="60px" />
          </li>
          <li>
            <img src={Fmotion} alt="motion" height="48px" />
          </li>
          <li>
            <img src={git} alt="git" height="60px" />
          </li>
          <li>
            <img src={github} alt="github" height="60px" />
          </li>
          <li>
            <img src={vscode} alt="vs code" height="60px" />
          </li>

          <li>
            <img src={figma} alt="figma" height="60px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Stacks;
