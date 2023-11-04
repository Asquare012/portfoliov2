import live from "./link.png";
import github from "./gith.png";
// project images
import moviebox from "./moviebox.png";
import cart from "./cart.png";
import portfolio from "./portfoliom.png";
import crypto from "./crypto.png";

// project object
const projectData = [
  {
    id: 0,
    img: moviebox,
    alt: "movie box",
    title: "MOVIEBOX",
    details:
      "Moviebox is a simple online movie store that displays list of top 20 trending movies and their ratings",
    stack: ["HTML", "JavaScript", "SASS", "React", "API"],
    githubLink: "https://github.io/asquare012/movie",
    liveLink: "https://github.com/Asquare012/movie",
    gitIcon: github,
    liveIcon: live,
  },
  {
    id: 1,
    img: cart,
    alt: "sneakers",
    title: "SNEAKERS",
    details:
      "Sneakers is a product checkout page that displays product cart/information ",
    stack: ["HTML", "JavaScript", "SASS", "React"],
    githubLink: "",
    liveLink: "",
    gitIcon: github,
    liveIcon: live,
  },
  {
    id: 2,
    img: portfolio,
    alt: "portfolio",
    title: "PORTFOLIO v2",
    details:
      "Portfolio v2 is the newest version of my portfolio with a simple animation",
    stack: ["HTML", "JavaScript", "SASS", "React", "Framer Motion", "API"],
    githubLink: "",
    liveLink: "",
    gitIcon: github,
    liveIcon: live,
  },
  {
    id: 3,
    img: crypto,
    alt: "crypto",
    title: "CRYPTO LIVE PRICE",
    details:
      "Crypto live pricei is a simple single page website that displays the prices of top 50 cryptocurrencies",
    stack: ["HTML", "JavaScript", "SASS", "React", "API"],
    githubLink: "https://github.io/asquare012/crypto",
    liveLink: "https://github.com/Asquare012/crypto",
    gitIcon: github,
    liveIcon: live,
  },
];
const Project = () => {
  return (
    <div className="Project" id="Project">
      <div className="First">
        <p className="Title">Projects</p>
        <p>Things I’ve built so far</p>
      </div>
      <div className="Second">
        <ul>
          {projectData.map((work) => {
            return (
              <li key={work.id}>
                <div>
                  <img
                    src={work.img}
                    alt={work.alt}
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>
                  <p>{work.title}</p>
                  <p>{work.details}</p>
                  <p>
                    <span className="Lead">Tech Stack:</span>
                    {work.stack.join(", ")}
                  </p>
                  <p>
                    <img src={work.liveIcon} alt="link" />
                    <a href={work.liveLink} target="_blank" rel="noreferrer">
                      Live Preview
                    </a>

                    <img src={work.gitIcon} alt="github" />
                    <a href={work.githubLink} target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Third">
        <button>
          <a
            href="https://github.com/Asquare012?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View more projects
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
