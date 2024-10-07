import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const ListViewButton = ({listView, handleListView}) => {
  return (
    <button onClick={handleListView} className='h-[35px] w-[35px] overflow-hidden'>
        {
            <>
            <AnimatePresence>
            {
                listView && (
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 16 16" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4}}  className={`${listView ? '' : 'hidden'} text-black dark:text-white`} >
                    <path d="m 2 1 c -0.554688 0 -1 0.445312 -1 1 v 2 c 0 0.554688 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.445312 1 -1 v -2 c 0 -0.554688 -0.445312 -1 -1 -1 z m 5 1 v 2 h 8 v -2 z m -5 4.015625 c -0.554688 0 -1 0.445313 -1 1 v 1.980469 c 0 0.550781 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.449219 1 -1 v -1.980469 c 0 -0.554687 -0.445312 -1 -1 -1 z m 5 0.984375 v 2 h 8 v -2 z m -5 4 c -0.554688 0 -1 0.445312 -1 1 v 1.980469 c 0 0.550781 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.449219 1 -1 v -1.980469 c 0 -0.554688 -0.445312 -1 -1 -1 z m 5 0.984375 v 2 h 8 v -2 z m 0 0" fill='currentColor'/>
                </motion.svg>
                )
            }
            </AnimatePresence> 
            <AnimatePresence>
            {
                !listView && (
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4}} className={`${listView ? 'hidden' : ''} text-black dark:text-white`}>
                    <rect x="4" y="4" width="7" height="7" rx="1" fill="currentColor"/>
                    <rect x="4" y="13" width="7" height="7" rx="1" fill="currentColor"/>
                    <rect x="13" y="4" width="7" height="7" rx="1" fill="currentColor"/>
                    <rect x="13" y="13" width="7" height="7" rx="1" fill="currentColor"/>
                </motion.svg>
                )
            }
            </AnimatePresence>
            </>
        }
    </button>
  )
}

export default ListViewButton