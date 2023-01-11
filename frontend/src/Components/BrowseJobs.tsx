import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IoMdArrowBack } from 'react-icons/io'

type Props = {
  style?: {}
}

const BrowseJobs = (props: Props) => {
  return (
    <Link to={'/adslist'}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        whileTap={{
          opacity: 1,
          scale: 1.05,
        }}
        area-label='back-button-to-jobs'
        className='flex lg:items-center'
        style = { props.style }
      >
        <span className='flex items-center w-[24px]'>
          <div className='h-[14px] border-r-[2px] border-textBlack' />
          <IoMdArrowBack className='text-textBlack text-[16px] xl:text-[20px]' />
        </span>
        <span className='text-darkGreen font-bold text-[16px] xl:text-[20px] '>
          Browse Ads
        </span>
      </motion.div>
    </Link>
  )
}

export default BrowseJobs