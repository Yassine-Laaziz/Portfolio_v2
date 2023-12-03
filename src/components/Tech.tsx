import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import styles from '../styles'

const Tech = () => {
  return (
    <>
      <motion.div
        variants={fadeIn('right')}
        className='mb-7'
      >
        <p className={styles.sectionSubText}>a little</p>
        <h2 className='text-2xl font-bold text-white'>Some of the Packages i used.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map(technology => (
          <img
            src={technology.icon}
            className='w-20 h-20'
            alt={technology.name}
            key={technology.name}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
