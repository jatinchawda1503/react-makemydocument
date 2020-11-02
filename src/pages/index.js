import React from 'react'
import Banner from '../Components/banner';
import Service from '../Components/service';
import About from '../Components/about';
import Process from '../Components/process';
import Team from '../Components/Team';
import Counter from '../Components/counter';
import Footer from '../Components/footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
             <About />
             <Process />
             <Team/>
             <Counter/>
             <Footer />
        </div>
    )
}

export default Home
