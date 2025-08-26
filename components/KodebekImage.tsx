'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function KodebekImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ 
        duration: 1, 
        ease: "easeOut",
        delay: 0.5 
      }}
      className="relative pointer-events-none"
    >
      {/* Desktop version */}
      <div className="hidden lg:block">
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative"
        >
                     <Image
             src="/images/Kodebek1.png"
             alt="Кодбек"
             width={280}
             height={380}
             className="object-contain"
             style={{
               transform: 'translateX(40%) translateY(30%)',
               filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))'
             }}
           />
        </motion.div>
      </div>

      {/* Tablet version */}
      <div className="hidden md:block lg:hidden">
        <motion.div
          animate={{ 
            y: [0, -6, 0],
            rotate: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative"
        >
                     <Image
             src="/images/Kodebek1.png"
             alt="Кодбек"
             width={180}
             height={250}
             className="object-contain"
             style={{
               transform: 'translateX(35%) translateY(35%)',
               filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2))'
             }}
           />
        </motion.div>
      </div>

      {/* Mobile version */}
      <div className="block md:hidden">
        <motion.div
          animate={{ 
            y: [0, -4, 0],
            rotate: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative"
        >
                     <Image
             src="/images/Kodebek1.png"
             alt="Кодбек"
             width={120}
             height={160}
             className="object-contain"
             style={{
               transform: 'translateX(20%) translateY(-10%)',
               filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
             }}
           />
        </motion.div>
      </div>
    </motion.div>
  )
}
