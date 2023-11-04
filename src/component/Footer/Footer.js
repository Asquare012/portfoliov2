import twitter from "./twitter.svg";
import github from "./github.svg";
import linkedn from "./linkedn.svg";
const Footer = () => {
  return (
    <footer>
      <div className="Foot-one">
        <ul>
          <li>
            <a href="#">{"<Asquare/>"}</a>
          </li>
          <li>
            <a>+2349012452602</a>
          </li>
          <li>
            <a>abass.hassan.7798@gmail.com</a>
          </li>
          <li>
            <span>
              <a
                href="https://github.com/Asquare012"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" height="25px" />
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/Asquare012"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter" height="25px" />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/asquare012/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedn} alt="linkedn" height="25px" />
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="Foot-two">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Stack">Stack</a>
          </li>
          <li>
            <a href="#Project">Project</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>© {new Date().getFullYear()}</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
