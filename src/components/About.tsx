import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import styles from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

interface cardProps {
  index: number
  title: string
  icon: string
}
const ServiceCard = ({ index, title, icon }: cardProps) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(null, '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I'm Yassine, a highly skilled software developer with over 3 years
        of experience. My passion lies in front-end and full-stack but i can go
        with backend development, specializing in TypeScript and frameworks like
        React/Next.js, Node.js, and Three.js. I have a proven track record of
        delivering efficient, scalable, and user-friendly solutions that solve
        real-world problems. By collaborating closely with clients, I ensure
        their requirements are understood and incorporated into the development
        process. I utilize advanced edge runtime techniques, including the
        implementation of "no-js" client-side code, to significantly enhance
        website performance, making them faster and improving user experience. I
        stay up to date with the latest industry trends to deliver cutting-edge
        solutions. If you are looking for a talented developer who can bring
        valuable skills and a strong commitment to excellence to your team, I
        would be thrilled to discuss potential opportunities.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
