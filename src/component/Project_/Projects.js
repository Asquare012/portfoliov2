import live from "./link.png";
import github from "./gith.png";
// project images
import moviebox from "./moviebox.png";
import cart from "./cart.png";
import portfolio from "./portfoliom.png";
import nft from "./nft.png";

// project data
const projectData = [
  {
    id: 0,
    img: nft,
    alt: "nft-marktplace",
    title: "NFT-Marketplace",
    details:
      "NFT-Marketplace is a web based web3 market for exploring, buying and selling of NFT's",
    stack: ["React", "SASS", "Framer Motion"],
    githubLink: "https://github.com/asquare012/nft-marketplace",
    liveLink: "https://asquare012.github.io/nft-marketplace",
    gitIcon: github,
    liveIcon: live,
  },
  {
    id: 1,
    img: cart,
    alt: "sneakers",
    title: "SNEAKERS",
    details:
      "Sneakers is a product checkout page that displays product information/ cart",
    stack: ["HTML", "JavaScript", "SASS", "React"],
    githubLink: "https://github.com/asquare012/sneakers",
    liveLink: "https://asquare012.github.io/sneakers",
    gitIcon: github,
    liveIcon: live,
  },
  {
    id: 2,
    img: portfolio,
    alt: "portfolio",
    title: "PORTFOLIO v2",
    details: "Portfolio v2 is the newest version of my portfolio",
    stack: ["React", "SASS", "Framer Motion"],
    githubLink: "https://github.com/asquare012/portfoliov2",
    liveLink: "https://asquare012.github.io/portfoliov2",
    gitIcon: github,
    liveIcon: live,
  },
  {
    id: 3,
    img: moviebox,
    alt: "movie box",
    title: "MOVIEBOX",
    details:
      "Moviebox is a simple online movie store that displays list of top 20 trending movies and their ratings",
    stack: ["React", "SASS", "API"],
    githubLink: "https://github.com/asquare012/movie",
    liveLink: "https://asquare012.github.io/movie",
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
