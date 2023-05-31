import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants'
import ProjectCard from './ProjectCard'
import { SectionWrapper } from '../hoc'

function Projects() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My learning</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn(null, '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          in the Projects section, you'll find a showcase of my personal
          software development projects. These projects are all learning
          projects that i made without using hints, they highlight my expertise
          in TypeScript, React/Next.js, Node.js, and Three.js. From web
          applications to interactive experiences, each project demonstrates my
          passion for innovative ideas and cutting-edge technologies. With a
          focus on user-centric design and seamless user experiences, I deliver
          scalable and performant solutions. By exploring the Projects section,
          you can see firsthand my problem-solving skills and attention to
          detail in translating ideas into functional applications. Feel free to
          explore the Projects section to discover the diverse range of projects
          I've completed. Each project represents a unique challenge and a
          testament to my commitment to excellence in software development.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, '')
