import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { contracts } from '../constants'
import ProjectCard from './ProjectCard'
import { SectionWrapper } from '../hoc'

function Contracts() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Contracts.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn(null, '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          In the Contracts section, I showcase my experience working on various
          software development projects as a freelancer or independent
          contractor. With a strong focus on delivering tailored solutions, I
          have collaborated with clients from diverse industries to develop
          custom software applications, websites, and web-based systems. I excel
          at understanding client requirements, translating them into technical
          specifications, and delivering high-quality work within agreed
          timelines and budgets. By maintaining effective communication
          throughout the contract period, I ensure that clients are satisfied
          with the results and achieve their desired outcomes. My ability to
          adapt to different project requirements and work seamlessly with
          remote teams makes me a reliable and valuable partner for
          contract-based engagements.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {contracts.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Contracts, '')
