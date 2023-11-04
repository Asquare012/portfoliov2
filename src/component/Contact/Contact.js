import bigImg from "./contact-img.png";
import fb from "./facebook.png";
import gm from "./gmail.png";
import tw from "./twitter.png";
import wt from "./whatsapp.png";

const Contact = () => (
  <div className="Contact" id="Contact">
    <div className="Title">Contact Me</div>
    <div className="Contact-info">
      <div>
        <img src={bigImg} width="100%" alt="contact" />
      </div>
      <div>
        <p>I'd love to hear from you</p>
        <p>
          Got a project you would like me to work on? Or how about just a
          friendly chat?
        </p>
        <p>
          <ul>
            <li>
              <a
                href="mailto:abass.hassan.7798@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gm} alt="gmail" height="35px" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Asquare012"
                target="_blank"
                rel="noreferrer"
              >
                <img src={tw} alt="twitter" height="35px" />
              </a>
            </li>
            <li>
              <a href="wa.link/pxnzlg" target="_blank" rel="noreferrer">
                <img src={wt} alt="whatsapp" height="35px" />
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/abass.hassan.7798"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} alt="facebook" height="35px" />
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
