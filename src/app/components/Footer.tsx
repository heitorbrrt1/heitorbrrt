import { FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  

  return (
    <footer className='py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex flex-col items-center justify-center w-full md:items-center gap-4'>
            <motion.button
              whileHover={{ y: -5 }}
              onClick={scrollToTop}
              className='flex items-center gap-2 text-gray-400 rounded-full border border-neutral-500  p-2 hover:text-white transition-colors cursor-pointer'
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-neutral-900 text-center w-full flex justify-center items-center'>
          <p className='text-gray-400 hover:text-white transition-colors cursor-default mb-6 lg:mb-0 w-fit'>
            © {new Date().getFullYear()} Heitor Barreto 
            <span className='lg:inline hidden'> - </span>
            <span className='lg:inline block'>Todos os direitos reservados</span>
          </p>
        </div>
      </div>
    </footer>
  )
}