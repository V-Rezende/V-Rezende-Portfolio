import './about.css'
import React from 'react'

const About = () => {
  return (
    <div className='about-section'>
        <div className='about'>
            <h1>About Vinni:</h1>
            <p>"Vinni, a committed aspiring Front End Developer with a keen interest in UI and UX design, delves passionately into the realm of front-end development. Focusing on HTML, CSS, JavaScript, and leveraging cutting-edge technologies such as Bootstrap and React, Vinni is on a dedicated journey to master the art of creating seamless and visually appealing user interfaces. Embracing the principles of UI and UX design, Vinni respects the established project patterns, ensuring a harmonious integration of functionality and aesthetics. In addition to employing a disciplined work ethic and problem-solving creativity. Thriving in collaborative environments, Vinni views every challenge as an opportunity for growth, consistently adopting new technologies to stay at the forefront of this dynamic field and consistently deliver exceptional user experiences."</p>
        </div>
        <div className='background'>
            <h1>Background:</h1>
            <div className='background-section'>
                <div className='year-2024'>
                    <div className='background-title'>
                        <h2>2023 - Currently</h2>
                        <h3>Front End Developer:</h3>
                        <h4>Freelancer</h4>
                    </div>
                    <p>Since the beginning of 2023, I have been working as a freelance Front End Developer, passionately crafting various small-scale projects. With a keen eye for design and proficiency in coding, I bring creativity and technical expertise to deliver seamless and visually appealing user experiences.</p>
                </div>
                <div className='year-2023'>
                    <div className='background-title'>
                        <h2>2022 - 2023</h2>
                        <h3>Stock Coordinator:</h3>
                        <h4>Pacif Hoseflex - Gold Coast</h4>
                    </div>
                    <p>As Stock Coordinator, this pivotal role supports sales and purchasing by ensuring timely delivery of conforming products from suppliers. Responsibilities include continuous stock management, overseeing goods receiving and dispatch, and maintaining a clean factory entrance. The position offers flexibility to provide support in various areas as needed.</p>
                </div>
                <div className='year-2022'>
                    <div className='background-title'>
                        <h2>2016 - 2022</h2>
                        <h3>Swimming Teacher / Coach:</h3>
                        <h4>Rackley Swimming</h4>
                    </div>
                    <p>Experienced Swimming Coach adept at managing diverse age groups, including children with disabilities. Proven track record in teaching and maintaining a robust swimming program, guiding learners from basic levels to competitive squads. Skilled in in-pool safety, providing tailored instruction, and mentoring assistant coaches. Strong communicator fostering positive learning environments.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;