import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import vetutionImg from 'assets/vetutions.png';
import vetutionMobileImg from 'assets/vetution-mobile.png';
import vetutionMobileImg2 from 'assets/vetution-mobile2.png';

import cruiseImg from 'assets/cruise-saudi.png';
import mobileCruiseImg from 'assets/cruise-mobile.png';
import mobileCruiseImg2 from 'assets/cruise-mobile2.png';


import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Developer', 'Consultant', 'Mentor'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="FrontEnd Developer"
        description="Design portfolio of Abdelrahman Gad — a front end developer working on web & mobile
          apps with a focus on pixel perfect, performance, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <section id='projects'>
        <ProjectSummary
          id="vetution"
          sectionRef={projectOne}
          visible={visibleSections.includes(projectOne.current)}
          index={1}
          title="Marketplace website"
          description="Developing a marketplace to help veterinaries buy their needs."
          buttonText="View project"
          buttonLink="https://vetutions.com"
          model={{
            type: 'laptop & phone',
            alt: 'Landing page screenshot',
            textures: [
              {
                srcSet: [vetutionImg, vetutionMobileImg],
                placeholder: sprTexturePlaceholder,
              },
              {
                srcSet: [vetutionMobileImg2],
                placeholder: sprTexturePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="cruise"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={2}
          title="Cruise Saudi App"
          description="Cruise Saudi was launched in 2021 to develop the infrastructure and services required to scale a full-suite cruise ecosystem in Saudi Arabia."
          buttonText="View project"
          buttonLink="https://cruisesaudi.com/"
          model={{
            type: 'laptop & phone',
            alt: 'Landing page screenshot',
            textures: [
              {
                srcSet: [cruiseImg, mobileCruiseImg2],
                placeholder: gamestackTexturePlaceholder,
              },
              {
                srcSet: [mobileCruiseImg],
                placeholder: gamestackTexturePlaceholder,
              },
            ],
          }}
        />
      </section>

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
