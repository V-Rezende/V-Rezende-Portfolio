import Cards from '../components/cards';
import './home.css'
import React from 'react'

const Home = () => {
  return (
    <div className='body'>
        <div className='header'>
            <div className='header-left'>
                <div className='header-logo'>
                    <h1>
                        {'<\\/r>'}
                    </h1>
                </div>
                <div className='header-title'>
                    <h1>
                        Hi; I'm Vinni Rezende,
                    </h1>
                    <h2>
                        Front End Developer
                    </h2>
                </div>
            </div>
            <div className='header-right'>
                    <img src="https://v-rezende.github.io/Imagens-Online/images/vr.profile.JPG" alt="Vinni" />
            </div>
        </div>
        <Cards/>

    </div>
  )
}

export default Home;