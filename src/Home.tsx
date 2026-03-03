import './css/home.css'
import { Link } from 'react-router-dom'
import { SlArrowRightCircle } from "react-icons/sl"
import { useState } from "react";

import landingImage from './assets/Illustration.svg'
import logo1 from './assets/Company logo.svg'
import logo2 from './assets/Company logo-1.svg'
import logo3 from './assets/Company logo-2.svg'
import logo4 from './assets/Company logo-3.svg'
import logo5 from './assets/Company logo-4.svg'
import logo6 from './assets/Company logo-5.svg'
import ctaImg from './assets/ctaimage.png'
import arrowImg from './assets/Icon.svg'
import socialIcon from './assets/Social icon.png'
import profileIcon from './assets/ian-dooley-d1UPkiFd04A-unsplash 1.png'
import iconbg from './assets/profilevector.svg'
import contactImg from './assets/contactIllustration.png'

import magnifyIllustration from './assets/ilustrimisvg.svg'
import clickIllustration from './assets/clickillustration.png'
import emojiIllustration from './assets/emojiillustrtion.svg'
import ballIllustration from './assets/tokyo-sending-messages-from-one-place-to-another 1.svg'
import stackIllustration from './assets/stackilustration.png'
import paperIllustration from './assets/paper.png'
import { GoArrowLeft,GoArrowRight } from 'react-icons/go';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

class Service {
  title: string
  titleClass: string
  image: string
  background: string

  constructor(title: string, titleClass: string, image: string, background: string) {
    this.title = title
    this.titleClass = titleClass
    this.image = image
    this.background = background
  }
}

const services = [
  new Service('Search engine optimization', 'Greenhead', magnifyIllustration, '#F3F3F3'),
  new Service('Pay-per-click advertising', 'Whitehead', clickIllustration, '#B9FF66'),
  new Service('Social Media Marketing', 'Whitehead', emojiIllustration, '#191A23'),
  new Service('Email Marketing', 'Greenhead', ballIllustration, '#F3F3F3'),
  new Service('Content Creation', 'Whitehead', stackIllustration, '#B9FF66'),
  new Service('Analytics and Tracking', 'Greenhead', paperIllustration, '#191A23'),
]

class Questions{
    number:number;
    qatitle: string;
    answer: string;

    constructor(number:number ,qatitle: string,answer: string,){
      this.number = number
      this.qatitle = qatitle
      this.answer = answer
    }
}
const allQa = [
  new Questions(1, 'Consultation',' During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services.'),
  new Questions(2, 'Research and Strategy Development',' During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services.'),
  new Questions(3, 'Implementation',' During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services.'),
  new Questions(4, 'Monitoring and Optimization',' During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services.'),
  new Questions(5, 'Reporting and Communication',' During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services.'),
  new Questions(6, 'Continual Improvement',' During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services.'),

]

class Members{
  name: string
  role: string
  profileimg:string
  desc: String
  constructor( name: string,role: string,profileimg:string,desc:string){
    this.name = name
    this.role = role
    this.profileimg = profileimg
    this.desc = desc
  }


}

const team = [
  new Members('John Smith','Ceo and Founder',profileIcon,'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'),
  new Members('Jane Doe','Director of Operations',profileIcon,'7+ years of experience in project management and team leadership. Strong organizational and communication skills'),
  new Members('Michael Brown','Senior SEO Specialist',profileIcon,'5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'),
  new Members('Emily Johnson','PPC Manager',profileIcon,'3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'),
  new Members('Brian Williams','Social Media Specialist',profileIcon,'4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'),
  new Members('Sarah Kim','Content Creator',profileIcon,'2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'),
]

class Testimonial{
  quote: string
  name: string
  role: string

  constructor(quote: string, name: string, role: string){
    this.quote = quote
    this.name = name
    this.role = role
  }
}

const testimonials = [
  new Testimonial('We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.','John Smith','Marketing Director at XYZ Corp'),
  new Testimonial('3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.','Emily Johnson','PPC Manager'),
  new Testimonial('2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.','Sarah Kim','Content Creator'),
]




function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="working-section">
      <div className="case-title">
        <h2 className="Greenhead">Our Working Process</h2>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      {allQa.map((questions, i) => (
        <div
          key={i}
          className={`qa-card ${openIndex === i ? "active" : ""}`}
        >
          <div className="qa-title">
            <h1>0{questions.number}</h1>
            <h2>{questions.qatitle}</h2>

            <button className="plus" onClick={() => toggle(i)}>
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
          </div>

          {openIndex === i && (
            <div className="qa-content active">
              <hr />
              <p>{questions.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
const nextSlide = () => {
  setCurrentIndex((prev) =>
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};

  return (
    <>
      <section className="landing-section">
        <div className="landing-content">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and
            succeed online through SEO, PPC, social media, and content creation.
          </p>
          <Link to="/contact" className="landing-button">
            Book a consultation
          </Link>
        </div>
        <img src={landingImage} alt="Landing illustration" />
      </section>


      <section className="logo-types-section">
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt="Company logo" />
        ))}
      </section>

      <section className="Services">
        <div className="title-services">
          <h2 className="Greenhead">Services</h2>
          <p>
            At our digital marketing agency, we offer a range
            of services to help businesses grow and succeed online.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ background: service.background }}
            >
              <div className="service-card-content">
                <h2 className={service.titleClass}>{service.title}</h2>

                <Link to="/contact" className="learnMore-button">
                  <SlArrowRightCircle className="arrow-icon" />
                  <span>Learn more</span>
                </Link>
              </div>

              <img src={service.image} alt={service.title} className="card-image" />
            </div>
          ))}
        </div>
      </section>
          <section className="home-cta">
            <div className="cta-card">
            <div className="cta-content">
                <h2>Let's make thing happen</h2>
                <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                 <Link to="/contact" className="landing-button cta-button">
                 Get your free proposal
                 </Link>
            </div>
            <img src={ctaImg} alt="Cta Image" />
            </div>
          </section>
        
        <section className="case-studies">
            <div className="case-title">
                <h2 className='Greenhead'>Case Studies</h2>
                <p>Explore Real-life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>
            <div className="case-card">
                <div className="case-content">
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <Link to="/contact" className='case-button'>Learn More <img src={arrowImg} alt="Arrow in 45deg" /></Link>
                </div>
                <hr />
                <div className="case-content">
                    <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <Link to="/contact" className='case-button'>Learn More <img src={arrowImg} alt="Arrow in 45deg" /></Link>
                </div>
                <hr />
                <div className="case-content">
                    <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <Link to="/contact" className='case-button'>Learn More <img src={arrowImg} alt="Arrow in 45deg" /></Link>
                </div>
            </div>
        </section>

          <WorkingProcess></WorkingProcess>

          <section className="team">
            <div className="case-title">
                <h2 className='Greenhead'>Meet the Team</h2>
                <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>
            <div className="team-grid">
              {team.map((Members, i)=>(
                <div className="team-member-card">
                  <div className="member-content">
                    <div className="porfile-img-bg">
                    <img className='profileBg' src={iconbg} alt="icon background"/>
                    <img className='profile-icon' key={i} src={Members.profileimg} alt="Team member" /> 
                    </div><div className="profile-text">
                    <h2 key={i}>{Members.name}</h2>
                    <h3 key={i}>{Members.role}</h3></div>
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                    <img src={socialIcon} className='socialIcon' alt="Linkedin Icon" /></a>
                  </div>
                  <hr />
                   <p key={i}>{Members.desc}</p>
                </div>
              ))}
                
                </div>
          </section>

              <section className="testimonials-section">
                <div className="case-title">
                <h2 className='Greenhead'>Testimonials</h2>
                <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </div>
              
              <div className="test-grid">
              <div className="test-grid-another">
  <div
    className="test-flex"
    style={{
      transform: `translateX(-${currentIndex * 450}px)`
    }}
  >
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className={`test-card ${index === currentIndex ? "active" : ""}`}
      >
        <div className="bubble">
          <p>"{testimonial.quote}"</p>
        </div>
        <h2>{testimonial.name}</h2>
        <h3>{testimonial.role}</h3>
      </div>
    ))}
  </div>
</div>

              <div className="buttonat-test">
                <button className="left-arrow" onClick={prevSlide}><GoArrowLeft /></button>
                <div className="stars">
                  {testimonials.map((Testimonial, index)=>(
                    <svg key={index} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill={currentIndex === index ? "#b9ff66" : "white"}/>
                    </svg>

                  ))}
                  
                </div>
                <button className="right-arrow" onClick={nextSlide}><GoArrowRight /></button>
              </div>
              </div>
              </section>

                  <section className="Contact-us">
                    <div className="case-title">
                <h2 className='Greenhead'>Contact Us</h2>
                <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
            </div>
                  <div className="contact-card">
                    <div className="contact-content">
                      <form action="/submit_page" method="post">

                      <label className="custom-radio">
                        <input type="radio" name="contact" value="hi" required />
                        <span className="radio-mark"></span>
                        Say Hi!
                      </label>

                      <label className="custom-radio">
                        <input type="radio" name="contact" value="quote" />
                        <span className="radio-mark"></span>
                        Get a quote
                      </label>

                      <br /><br />

                      <label htmlFor="name">Name</label><br />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                      />
                      <br /><br />

                      <label htmlFor="email">Email</label><br />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                      <br /><br />

                      <label htmlFor="message">Message*</label><br />
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                      />
                      <br /><br />

                      <button type="submit" className='landing-button contact-button'>Send Message</button>

                    </form>
                    </div>
                    <img src={contactImg} alt="Star Illustration" />
                  </div>
                  
                  </section>

                  
    </>
  )
}