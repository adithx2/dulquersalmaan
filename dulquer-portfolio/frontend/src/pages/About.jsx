import React from 'react';
import useFetch from '../hooks/useFetch';
import { getAbout } from '../utils/api';
import './About.css';

const dqImages = [

  'https://i.pinimg.com/1200x/68/ea/4d/68ea4dd44ee834f9344568fb2f5d90c2.jpg',
  'https://i.pinimg.com/1200x/a6/99/b7/a699b78921134c0aae7e43489fdec1c9.jpg',
  'https://i.pinimg.com/1200x/29/b9/c1/29b9c10ccc231af2f4b8d6606bd96798.jpg',
  'https://i.pinimg.com/1200x/e1/af/8e/e1af8e32bbfe311f1f12e0acb35277a5.jpg',
  'https://i.pinimg.com/736x/65/bb/f3/65bbf305325fedf177c843d65e0a52af.jpg',
  'https://i.pinimg.com/1200x/87/4b/0c/874b0c4b25240e6a0956007df2a7dc0f.jpg',
  'https://i.pinimg.com/736x/e9/c9/df/e9c9df66f2829203731e167704f0993d.jpg',
  'https://i.pinimg.com/1200x/97/68/44/9768445802f6234a43283913cd1751b4.jpg',

]

const familyImages = [

  'https://i.pinimg.com/1200x/ed/43/f5/ed43f5b53db986cd2761e792b76b619c.jpg',

  'https://i.pinimg.com/736x/27/39/c9/2739c96434cce1a546c4ec4da5250711.jpg'
]

const About = () => {

  const { data: about } = useFetch(getAbout);

  const info = about || {
    bio: "Dulquer Salmaan is an Indian actor, singer, and producer primarily working in Malayalam cinema, with successful ventures in Tamil, Telugu, and Hindi. Born on July 28, 1986, he has redefined the modern Indian star with his versatile performances and sophisticated style.",
    careerBody: "After debuting with 'Second Show' in 2012, Dulquer rose to prominence with hits like 'Ustad Hotel' and 'Bangalore Days'. His career reached new heights with 'Charlie', earning him the Kerala State Film Award. By 2026, he solidified his pan-Indian reach with massive hits like 'Kaantha' and 'Lucky Baskhar'.",
    personalLife: "A Purdue University graduate with a degree in Business Management, Dulquer worked in Dubai before pursuing acting. He married architect Amal Sufiya in 2011, and they have a daughter, Maryam Ameerah Salmaan."
  };

  return (
    <div className="about-wrapper">

      {/* HEADER SECTION */}

      <header className="dynamic-header about-wall">
        <div className="header-overlay">
          <div className="container">
            <div className="header-flex">
              <div className="header-image-container about-pic-1"></div>
              <div className="header-text-block">
                <h1 className="header-title">DULQUER SALMAAN</h1>
                <p className="header-description">{info.bio}</p>
                <div className="award-badge">🏆 Best Actor - INCA 2026 (Kaantha)</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CAREER SECTION */}
      <section className="info-section">
        <div className="container">
          <h2 className="section-title">Career Journey</h2>
          <div className="text-content">
            <p>Dulquersalman Born to actor Mammootty, Salmaan graduated with a bachelor's degree in business management from Purdue University and worked as a business manager in Dubai before pursuing a career in acting. After a three-month acting course at the Barry John acting Studio, Salmaan made his acting debut with Second Show (2012) and received the Filmfare Award for Best Male Debut – South for his performance in Ustad Hotel (2012).[3]

              Following his performance in ABCD (2013), Neelakasham Pachakadal Chuvanna Bhoomi (2013), Vaayai Moodi Pesavum (2014), Salmaan achieved his career breakthrough with Bangalore Days (2014). He established himself as a leading Malayalam actor with Vikramadithyan (2014), Charlie (2015), which earned him Kerala State Film Award for Best Actor, Kali (2016), Kammatti Paadam (2016), Jomonte Suvisheshangal (2017) and Kurup (2021).[4] Salmaan expanded to Tamil films with the box office successes, O Kadhal Kanmani (2015) and Kannum Kannum Kollaiyadithaal (2020).[5][6] His highest-grossing releases came with the Telugu films Mahanati (2018), Sita Ramam (2022) and Lucky Baskhar (2024). For Mahanati and Sita Ramam, he won the Filmfare Critics Award for Best Actor – Telugu. </p>
          </div>
        </div>
      </section>

      {/* PERSONAL LIFE SECTION */}
      <section className="info-section alternate-bg">
        <div className="container">
          <div className="text-content">

            <h2 className="section-title">Personal Life</h2>

            {/* FAMILY GALLERY */}

            <div className='family-flex'>

              {familyImages.map((imagePath, index) => {

                return (
                  <div key={index} className='family-img'
                    style={{
                      backgroundImage: `url("${encodeURI(imagePath)}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                  </div>
                )
              })}

            </div>

            <p>
              Dulquer Salmaan was born on 28 July 1983 in Kochi,to actor Mammootty and his wife Sulfath Kuttyy. He has an elder sister, Surumi. Salmaan completed his primary level education at Toc-H Public School, Vyttila, Kochi and his secondary level education at Sishya School in Chennai. He has a bachelor's degree in Business Management from Purdue University and worked at an IT firm in Dubai. Later, bored by the monotony of corporate life, he decided to pursue a career in acting and attended a three-month acting course at the Barry John Acting Studio in Mumbai.On 22 December 2011, Salmaan married architect Amal Sufiya in an arranged marriage. Amal comes from a North Indian Muslim family settled in Chennai. The couple has a daughter born on 5 May 2017 In an interview, Dulquer revealed he and Amal attended the same school. Dulquer later initiated contact by messaging Amal on Facebook to arrange a coffee meeting.
            </p>
          </div>

        </div>
      </section>

      {/* RESPONSIVE GALLERY */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">

            {dqImages.map((imagePath, index) => (
              <div
                key={index}
                className="gallery-item"
                style={{
                  backgroundImage: `url("${encodeURI(imagePath)}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            ))}

          </div>
        </div>
      </section>


    </div>
  );
};

export default About; 
