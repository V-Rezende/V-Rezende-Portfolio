import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div className='proj-section'>
      <div className='peter'>
        <div className='proj-image'>
            <img src="https://raw.githubusercontent.com/V-Rezende/Imagens-Online/e2957855b6489d1171b00ccfc957377137c0f46a/images/PeterOnDevices.png" alt="Peter LaRubia" id='PLW' />
        </div>
        <div className='proj-description'>
            <h2>Peter LaRubia Website</h2>
            <p>"I spearheaded the creation of the Brazilian writer Peter LaRubia's website from conception to execution. Utilising WordPress with Divi Themes, I crafted a dynamic online platform that reflects Peter's unique voice and engages his audience seamlessly. </p>
            <p>The website boasts a responsive design, ensuring optimal viewing across all devices. With a focus on intuitive user interface and captivating aesthetics, the Peter LaRubia website is poised to captivate both existing readers and new visitors alike."</p>
            <div className='buttons'>
              <button><a href='https://peterlarubia.com/' target='blank'>LIVE</a></button>
              <button><a href='https://github.com/V-Rezende' target='blank'>CODE</a></button>
            </div>
            <p></p>
        </div>
      </div>
      <div className='mia'>
        <div className='proj-image'>
            <img src="https://raw.githubusercontent.com/V-Rezende/Imagens-Online/e2957855b6489d1171b00ccfc957377137c0f46a/images/MiaOnDevices.png" alt="Mia Handshin" id='MH' />
        </div>
        <div className='proj-description'>
            <h2>Mia Handshin</h2>
            <p>"In collaboration with Studio Veld in the design and development of the Mia Handshin website. Developed in WordPress through Divi Themes, CSS, and JavaScript to deliver a polished and functional website."</p>
            <div className='buttons'>
              <button><a href='https://miahandshin.com/' target='blank'>LIVE</a></button>
              <button><a href='https://github.com/V-Rezende' target='blank'>CODE</a></button>
            </div>
            <p></p>
        </div>
      </div>
      <div className='cafe'>
        <div className='proj-image'>
            <img src="https://raw.githubusercontent.com/V-Rezende/Imagens-Online/e2957855b6489d1171b00ccfc957377137c0f46a/images/LittleOnDevices.png" alt="Little Lemon Café" id='LLC' />
        </div>
        <div className='proj-description'>
            <h2>Little Lemon Café</h2>
            <p>"In the React-based project, crafting multiple pages using React Router posed a significant challenge, demanding meticulous navigation implementation. Resolving modal creation issues required intricate troubleshooting. Transforming the entire website into a responsive design presented an additional complex task, ultimately enhancing user accessibility and experience."</p>
            <div className='buttons'>
              <button><a href='https://v-rezende.github.io/LittleLemon-Cafe/' target='blank'>LIVE</a></button>
              <button><a href='https://github.com/V-Rezende/LittleLemon-Cafe' target='blank'>CODE</a></button>
            </div>
            <p></p>
        </div>
      </div>
      <div className='era'>
        <div className='proj-image'>
            <img src="https://raw.githubusercontent.com/V-Rezende/Imagens-Online/main/images/EraOnDevices.png" alt="Era Uma Vez" id='EUV' />
        </div>
        <div className='proj-description'>
            <h2>Era Uma Vez</h2>
            <p>"In this project, Bootstrap and CSS were skillfully employed to craft a visually captivating website. The primary emphasis was on translating the client's vision into a stunning reality, with meticulous attention to the proposed color palette. The result is an aesthetically pleasing and attractive online presence."</p>
            <div className='buttons'>
              <button><a href='https://v-rezende.github.io/Era-Uma-Vez/' target='blank'>LIVE</a></button>
              <button><a href='https://github.com/V-Rezende/Era-Uma-Vez' target='blank'>CODE</a></button>
            </div>
        </div>
      </div>
      <div className='thiago'>
        <div className='proj-image'>
            <img src="https://raw.githubusercontent.com/V-Rezende/Imagens-Online/main/images/ThitiOnDevices.png" alt="Thiago Nunes - Profile" id='TN' />
        </div>
        <div className='proj-description'>
            <h2>Thiago Nunes - Profile</h2>
            <p>"In one of my initial web development projects, I created a online profile webpage. As a learner, the major challenge was ensuring responsiveness. Overcoming this hurdle taught me invaluable CSS functionalities, marking a significant highlight in my journey as a web developer."</p>
            <div className='buttons'>
              <button><a href='https://v-rezende.github.io/Profile-TN/' target='blank'>LIVE</a></button>
              <button><a href='https://github.com/V-Rezende/Profile-TN' target='blank'>CODE</a></button>
            </div>
        </div>
      </div>
      <div className='tour'>
        <div className='proj-image'>
            <img src="https://raw.githubusercontent.com/V-Rezende/Imagens-Online/main/images/TourOnDevices.png" alt="Tour Australia Today" id='TAT' />
        </div>
        <div className='proj-description'>
            <h2>Tour Australia Today</h2>
            <p>"In a transformative learning journey with Bootstrap, I recently completed a project that showcases my newfound proficiency. Leveraging Bootstrap's robust functionalities, I crafted a responsive and aesthetically pleasing website, demonstrating mastery in creating dynamic and visually engaging user interfaces."</p>
            <div className='buttons'>
              <button><a href='https://v-rezende.github.io/Tour-Australia-Today/' target='blank'>LIVE</a></button>
              <button><a href='https://github.com/V-Rezende/Tour-Australia-Today' target='blank'>CODE</a></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;