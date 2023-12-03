import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { softSkillsT } from '../../types'
import { softSkills } from '../constants'
import styles from '../styles'

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Some of my</p>
          <h2 className={styles.sectionHeadText}>Soft Skills.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex justify-center flex-wrap gap-7`}>
        {softSkills.map((skill, index) => (
          <SoftSkills
            key={`SoftSkill${index}`}
            index={index}
            {...skill}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, 'soft skills')

function SoftSkills({ index, skill, icon }: softSkillsT & { index: number }) {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='web-development'
            className='w-full h-full object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>{skill}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
