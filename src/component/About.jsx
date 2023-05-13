import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const About = () => {
  const Pic = [
    {
      id: '1',
      pic: 'images/mypic.jpeg'
    }
  ]
  const [pic, Setpic] = useState(Pic);
  return (
    <div style={{  padding: '20px', textAlign: 'center', marginTop: "50px" }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>About Me</h1>
      <p style={{ fontSize: '18px' }}>I am Muhammad Abdullah and currently learn MERN stack.</p>

      <div className='aboutimage' style={{ margin: '150px auto', width: '70%' }}>


        {pic.map((elem) => {
          const { id, pic } = elem;
          return (
            <div key={id} style={{ margin: '10px' }}>
              <img src={pic} alt='' style={{ height: '320px',maxWidth: '320px', display: 'flex', float: 'left' }} />
              <p style={{ fontSize: '18px', marginRight: "30px" }}>Programmers are individuals who write and maintain computer programs
                using programming languages such as Java, Python, C++, and many more. They are responsible for developing
                software applications that run on various devices such as computers, smartphones, and servers.
                They work closely with other professionals, including software engineers, system analysts, and project
                managers, to develop programs that meet clients' needs. Programming requires creativity, logical thinking,
                and attention to detail. Programmers often face challenging and complex problems that require innovative
                solutions, and as such, they need to continually learn and adapt to new technologies and programming
                languages. They play a crucial role in the development of the digital world, and their contributions have
                transformed many aspects of modern life.</p>

            </div>
          );
        })}



      </div>

    </div>
  );
};

export default About;