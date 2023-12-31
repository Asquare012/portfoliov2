import face from "./face.jpg";
import place from "./place.png";
import location from "./location.png";
import date from "./date.png";

// experience data
const exData = [
  {
    id: 0,

    role: "Frontend Web Developer [Internship]",
    type: "Remote",
    place: "KindleGate foundation",
    location: "Nigeria",
    date: "2023",
  },
  {
    id: 1,
    role: "Frontend Web Developer [Internship]",
    type: "Remote",
    place: "HNG",
    location: "Nigeria",
    date: "2023",
  },
  {
    id: 2,
    role: "Internship/junior role in your company",
    type: " ",
    place: " ",
    location: " ",
    date: " ",
  },
];

const About = () => {
  return (
    <div className="About" id="About">
      <div className="Talk">
        <p className="Title">About Me</p>
        <p style={{ fontSize: "16px" }}>
          <img src={face} alt="face" height="170px" width="140px" />
          I'm <strong>Hassan Abass</strong> from
          <strong> Lagos, Nigeria.</strong> a
          <strong>front-end web engineer</strong> and
          <strong> web 3/crypto entheusiast.</strong>
          <br />
          I specialize in developing responsive stunning webpages with an
          extreme attention to details.
          <br />
          In addition, i am collaborative in nature, outspoken and cooperative.
          <br />
          Aside coding, i create content and watch movies as hubbies.
          <br />
          <button>DOWNLOAD RESUME</button>
        </p>
      </div>
      <div className="Experience">
        <p className="Title">Work Experience</p>
        <p>
          <ul>
            {exData.map((ex) => {
              return (
                <li key={ex.id}>
                  <div>
                    <span style={{ fontSize: "17px" }}>{ex.role}</span>
                    <span>{ex.type}</span>
                  </div>
                  <div>
                    <img src={place} alt="place" />
                    {ex.place}
                    <img src={location} alt="location" />
                    {ex.location}
                    <img src={date} alt="date" />
                    {ex.date}
                  </div>
                </li>
              );
            })}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
