import { useContext } from "react";
import '../styles/About.css'

// Images
import LightTitle from '/images/lightmode/title.png';
import DarkTitle from '/images/darkmode/title.png';

// Context
import { ContextoTema } from '../../context/Contextos';

function About() {
  const { tema } = useContext(ContextoTema);

  return (
    <section>
      <div className='about'>
        <h1>About</h1>

        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis aspernatur nihil voluptatem harum! Eaque tempora nemo reiciendis dignissimos, totam laborum, blanditiis optio tenetur dolorem quae obcaecati dolore nostrum at.
        Non libero maiores, quas natus porro dolor id ipsam rerum accusantium dicta unde. Nemo est laboriosam, cupiditate corporis reiciendis assumenda voluptatibus eveniet quo unde architecto dolorum? Fuga pariatur nesciunt ratione!
        Eveniet fugit animi, quis delectus aperiam iure vero inventore nulla ducimus ipsa sit porro illo obcaecati numquam soluta quia, adipisci hic fugiat nihil molestias ullam cum! Maxime velit doloremque ex.
        Doloremque, repudiandae deserunt corporis vero, fuga quas culpa maxime consequatur perspiciatis dolorem delectus, quasi ipsam quod fugit. Esse error beatae aperiam animi doloremque! Quod, odit nemo nam sint ad voluptas?</p>
        <img src={tema === "light" ? LightTitle : DarkTitle} alt="Your cooking book" />

      </div>
    </section>
  );
}

export default About