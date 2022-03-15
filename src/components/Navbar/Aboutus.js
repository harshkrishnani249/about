import React from 'react'
import Aboutpic from './stockpic.jpg';
import './Aboutus.css';
import Pay from './payUs.jpg';
import Pay1 from './ist.jpg';
import Pay2 from './meeting.jpg';
import Pay3 from './market.jpg';
import { Container } from 'react-bootstrap';



const Aboutus = () => {
    return (
        <>
        
        <div className='gfg'>
           <img src={Aboutpic}  className='happy' /> 
           <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

           <h1 className='first-text'>Creative team<br>
            </br>
              bringing ideas to life.</h1>
              <p className='second-text'>
                We’re a team of passionate individuals with a desire to create meaningful work. We never rest on our past successes and continue to push boundaries. Learning is a must in the industry and we are deep into the digital forest. We believe in supporting our team to create the future, pushing ourselves to deliver to most forward-thinking solutions.
                </p>
                
           </div>
           <br>
           </br>
           <br>
           </br>
           <div className=' d-flex justify-content'>
             <Container>
             <h2 className='fourth-text'>
            About US
           </h2>
           <br>
           </br>
           
           <p className='third-text'>
           Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India in terms of active retail clients.
           In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.

           And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
           </p>

             </Container>
         
           <img src={Pay}  className='set'/>
           </div>

           <br>
           </br>
           <br>
           </br>

           <div className=' d-flex justify-content'>
           <h2 className='fifth-text'>
            Our Objective 
           </h2>
           <img src={Pay1}  className='reset'/>
           
           <p className='sixth-text'>
           The Company is transitioning into a new-age FinTech platform capable of enabling millennials from new age India to meet their financial dreams. We’ll continue to onboard customers digitally, deliver the most cutting-edge solutions at the comfort of a mobile tap.

Over the years, we have become leaner yet stronger, and have been fruitfully tapping new geographies and onboarding millions of new customers including tier-2 and tier-3 cities as well.
           </p>


           
           </div>
           <br>
           </br>
           <br>
           </br>

           <div className=' d-flex justify-content'>
           <h2 className='seventh-text'>
            Our Vision 
           </h2>
           
           <p className='eighth-text'>
           Right from the time we started our operations, we have effectively leveraged technology to deliver our products, services, and class-leading experience to our ever expanding client base.
           For quite a few years, we have been first-hand witnesses of the rise of a new age of young investors. In fact, we were one of the first broking houses to recognize the evolving expectations of this set of investors, which goes far beyond just mutual fund investments and stock trading and into the realm of rule based investing trading.  
           </p>
           <img src={Pay2}  className='setting'/>
           </div>

           <br>
           </br>
           <br>
           </br>

           <div className=' d-flex justify-content'>
           <h2 className='nine-text'>
            Market Position
           </h2>
           <img src={Pay3}  className='marketset'/>
           
           <p className='tenth-text'>

           At Economic Pricing Limited , a digital-first approach is something that has always been deep rooted in our hearts.
           We are a technology-led financial services company providing broking and advisory services, margin funding, loans against shares (through one of our Subsidiaries, AFPL) and financial products distribution to our clients under the brand “Angel One”. Our broking and allied services are offered through (i) our online and digital platforms
           </p>


           
           </div>













           

         
        
        </>
    )
}

export default Aboutus
