import { useState } from "react";
import { motion } from "framer-motion";
import twitter from "./twitter.svg";
import github from "./github.svg";
import linkedn from "./linkedn.svg";
import hambugger from "./hamburger.svg";
import close_ham from "./close_hambugger.svg";
import hero from "./hero.png";

// NAV VARIANTS
// navigation veriants
const navVariants = {
  initial: {
    y: "-50vw",
  },
  animate: {
    y: 0,
    transition: {
      y: {
        type: "spring",
        delay: 0.5,
        duration: 0.8,
        stiffness: 80,
      },
    },
  },
};
const logoVariants = {
  initial: {
    scale: 0.8,
  },
  animate: {
    scale: 1,
    transition: {
      scale: {
        type: "spring",
        delay: 1.5,
        duration: 0.5,
        stiffness: 110,
      },
    },
  },
};

// HERO VARAINTS
// hero-text variants
const hiVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      x: {
        type: "spring",
        delay: 0.5,
        duration: 0.5,
        stiffness: 80,
      },
    },
  },
};

const nameVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      x: {
        type: "spring",
        delay: 1.5,
        duration: 0.5,
        stiffness: 80,
      },
    },
  },
};

const buildVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      x: {
        type: "spring",
        delay: 2.5,
        duration: 0.5,
        stiffness: 80,
      },
    },
  },
};
// hero-image variant
const imgVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,

    transition: {
      x: {
        type: "spring",
        delay: 0.7,
        duration: 0.5,
        stiffness: 80,
      },
    },
  },
};

const Hero = () => {
  const [menu, setMenu] = useState(false);
  // menu button
  const menuButt = () => {
    setMenu(!menu);
  };
  // close button
  const closeButt = () => {
    setMenu(false);
  };
  return (
    <div className="Container">
      {/* navigation */}
      <div>
        <motion.nav variants={navVariants} initial="initial" animate="animate">
          <ul>
            <motion.li
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <a href="#">{"<Asquare/>"}</a>
            </motion.li>
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
            <li onClick={menuButt}>
              <img
                src={menu ? close_ham : hambugger}
                height="13px"
                alt="hambugger"
              />
            </li>
          </ul>
        </motion.nav>
      </div>
      <div
        className="Menu"
        style={menu ? { width: "60vw", overflowY: "hidden" } : { width: "0" }}
      >
        <ul style={menu ? { display: "block" } : { display: "none" }}>
          <li onClick={closeButt}>
            <img src={close_ham} alt="close-ham" />
          </li>
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
          <li>
            <a
              href="https://github.com/Asquare012"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" height="25px" />
            </a>
            <a
              href="https://twitter.com/Asquare012"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" height="25px" />
            </a>
            <a
              href="https://www.linkedin.com/in/asquare012/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedn} alt="linkedn" height="25px" />
            </a>
          </li>
        </ul>
      </div>
      {/* hero */}
      <div className="Hero" id="Hero">
        <div className="Left">
          <motion.p variants={hiVariants} initial="initial" animate="animate">
            Hi👋,
          </motion.p>
          <motion.p variants={nameVariants} initial="initial" animate="animate">
            My name is <span className="Name">Hassan Abass</span>
          </motion.p>
          <motion.p
            variants={buildVariants}
            initial="initial"
            animate="animate"
          >
            I build things on web
          </motion.p>
        </div>
        <div className="Right">
          <motion.img
            variants={imgVariants}
            initial="initial"
            animate="animate"
            src={hero}
            alt="hero"
            height="110%"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
