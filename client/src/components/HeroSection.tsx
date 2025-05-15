import { useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const floatingElements = [
    { top: "1/4", left: "1/4", size: "h-32 w-32", delay: 0 },
    { top: "3/4", left: "1/2", size: "h-40 w-40", delay: 0.5 },
    { top: "1/2", left: "3/4", size: "h-24 w-24", delay: 1 },
    { top: "1/3", left: "10", size: "h-16 w-16", delay: 1.5 },
    { top: "2/3", left: "1/3", size: "h-20 w-20", delay: 2 },
    { top: "1/5", left: "3/4", size: "h-28 w-28", delay: 0.7 },
    { top: "2/5", left: "1/5", size: "h-36 w-36", delay: 1.2 },
    { top: "4/5", left: "1/6", size: "h-20 w-20", delay: 1.8 },
    { top: "3/5", left: "5/6", size: "h-24 w-24", delay: 2.2 },
  ];

  // SVG untuk karakter Susanoo
  const susanooSVG = `
    <svg width="320" height="450" viewBox="0 0 320 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Aura Susanoo dan Efek Energi -->
      <ellipse cx="160" cy="230" rx="140" ry="170" fill="url(#susanooGlow)" opacity="0.8" class="susanoo-glow"/>
      
      <!-- Tubuh Susanoo -->
      <path d="M140 100 Q160 80 180 100 L190 220 Q160 240 130 220 Z" fill="#4338CA" class="susanoo-body"/>
      
      <!-- Rusuk/Ribcage Susanoo -->
      <path d="M130 140 Q160 130 190 140 L200 200 Q160 220 120 200 Z" fill="#5B21B6" stroke="#818CF8" stroke-width="2" class="susanoo-ribcage"/>
      <path d="M140 150 L140 190" stroke="#818CF8" stroke-width="2" class="susanoo-rib"/>
      <path d="M155 145 L155 195" stroke="#818CF8" stroke-width="2" class="susanoo-rib"/>
      <path d="M170 145 L170 195" stroke="#818CF8" stroke-width="2" class="susanoo-rib"/>
      <path d="M185 150 L185 190" stroke="#818CF8" stroke-width="2" class="susanoo-rib"/>
      
      <!-- Kepala Susanoo (Tengkorak) -->
      <path d="M130 100 Q160 70 190 100 Q200 120 190 140 Q160 150 130 140 Q120 120 130 100 Z" fill="#312E81" class="susanoo-skull"/>
      
      <!-- Mata Susanoo (Sharingan) -->
      <circle cx="145" cy="110" r="8" fill="#111827" class="susanoo-eye"/>
      <circle cx="175" cy="110" r="8" fill="#111827" class="susanoo-eye"/>
      <circle cx="145" cy="110" r="5" fill="#FF0000" class="susanoo-sharingan"/>
      <circle cx="175" cy="110" r="5" fill="#FF0000" class="susanoo-sharingan"/>
      
      <!-- Pola Mangekyo Sharingan -->
      <path d="M140 110 L150 110" stroke="#FFF" stroke-width="1" class="susanoo-pattern"/>
      <path d="M145 105 L145 115" stroke="#FFF" stroke-width="1" class="susanoo-pattern"/>
      <path d="M170 110 L180 110" stroke="#FFF" stroke-width="1" class="susanoo-pattern"/>
      <path d="M175 105 L175 115" stroke="#FFF" stroke-width="1" class="susanoo-pattern"/>
      
      <!-- Tangan Susanoo -->
      <path d="M130 170 L90 220" stroke="#4F46E5" stroke-width="18" stroke-linecap="round" class="susanoo-arm"/>
      <path d="M90 220 L110 260" stroke="#4F46E5" stroke-width="16" stroke-linecap="round" class="susanoo-arm"/>
      <path d="M190 170 L230 220" stroke="#4F46E5" stroke-width="18" stroke-linecap="round" class="susanoo-arm"/>
      <path d="M230 220 L210 260" stroke="#4F46E5" stroke-width="16" stroke-linecap="round" class="susanoo-arm"/>
      
      <!-- Senjata Susanoo - Busur di tangan kiri -->
      <path d="M80 230 Q60 250 80 270" stroke="#818CF8" stroke-width="4" fill="none" class="susanoo-weapon"/>
      <path d="M80 250 L120 250" stroke="#818CF8" stroke-width="2" fill="none" class="susanoo-arrow"/>
      
      <!-- Senjata Susanoo - Pedang di tangan kanan -->
      <path d="M230 250 L280 200" stroke="#A5B4FC" stroke-width="6" class="susanoo-sword"/>
      <path d="M280 200 L290 190" stroke="#C7D2FE" stroke-width="4" class="susanoo-sword-tip"/>
      
      <!-- Kaki Susanoo -->
      <path d="M140 220 L130 300" stroke="#4338CA" stroke-width="22" stroke-linecap="round" class="susanoo-leg"/>
      <path d="M180 220 L190 300" stroke="#4338CA" stroke-width="22" stroke-linecap="round" class="susanoo-leg"/>
      
      <!-- Efek Chakra di sekitar Susanoo -->
      <circle cx="160" cy="180" r="80" fill="url(#chakraGlow)" opacity="0.4" class="chakra-aura"/>
      <path d="M80 180 Q100 200 80 220" stroke="#818CF8" stroke-width="2" stroke-dasharray="5,5" class="chakra-flow"/>
      <path d="M240 180 Q220 200 240 220" stroke="#818CF8" stroke-width="2" stroke-dasharray="5,5" class="chakra-flow"/>
      <path d="M160 80 Q180 100 160 120" stroke="#818CF8" stroke-width="2" stroke-dasharray="5,5" class="chakra-flow"/>
      <path d="M130 250 Q150 270 170 250" stroke="#818CF8" stroke-width="2" stroke-dasharray="5,5" class="chakra-flow"/>
      
      <!-- Efek kilatan/percikan energi -->
      <path d="M100 150 L120 170" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
      <path d="M220 150 L200 170" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
      <path d="M140 270 L120 290" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
      <path d="M180 270 L200 290" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
      <path d="M160 140 L170 120" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
      
      <!-- Pendar chakra di belakang -->
      <circle cx="100" cy="200" r="10" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
      <circle cx="220" cy="200" r="10" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
      <circle cx="160" cy="100" r="10" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
      <circle cx="130" cy="250" r="8" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
      <circle cx="190" cy="250" r="8" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
      
      <!-- Definisi gradien untuk efek glow -->
      <defs>
        <radialGradient id="susanooGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
          <stop offset="0%" stop-color="#818CF8" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#4338CA" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="chakraGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
          <stop offset="0%" stop-color="#C7D2FE" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#4338CA" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  `;

  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(item => {
        const windowHeight = window.innerHeight;
        const elementTop = (item as HTMLElement).getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          item.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements(); // Call once on load
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <section id="beranda" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-primary-bg">
          {/* Animated background elements */}
          {floatingElements.map((el, index) => (
            <motion.div
              key={index}
              className={`absolute ${el.top} left-${el.left} ${el.size} rounded-full bg-accent-color/5 float`}
              animate={{
                y: [0, -15, 10, -5, 0],
                x: [0, 8, -5, 3, 0],
                scale: [1, 1.1, 0.95, 1.05, 1],
                rotate: [0, 5, -5, 2, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: el.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 mt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-poppins mb-4 text-text-color reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Haris Setiadi<span className="text-accent-color">.</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-semibold font-poppins mb-6 text-text-light reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Junior Programmer & Graphic Designer
            </motion.h2>
            
            <motion.p 
              className="text-text-light mb-8 max-w-xl reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Website ini berisi informasi mengenai perjalanan belajar dan proyek yang sedang saya kerjakan di bidang pemrograman dan desain.
            </motion.p>
          </div>
          
          <div className="md:w-1/3 mt-12 md:mt-0">
            <motion.div
              className="relative mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Susanoo beranimasi */}
              <motion.div
                className="w-80 h-96 mx-auto"
                animate={{ 
                  y: [0, -15, 10, -5, 0],
                  rotate: [0, 2, -2, 1, 0],
                  scale: [1, 1.05, 0.98, 1.02, 1]
                }}
                transition={{ 
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                dangerouslySetInnerHTML={{ __html: susanooSVG }}
              />
              
              {/* Efek Chakra utama di sekitar Susanoo */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-600/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.6, 1.3, 1.5, 1],
                  opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
                  borderRadius: ["50%", "45%", "50%", "40%", "50%"]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Efek Amaterasu (Api hitam) */}
              <motion.div
                className="absolute top-20 right-10 w-16 h-16 bg-purple-900/50 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.8, 0.9, 1.6, 1],
                  opacity: [0.3, 0.7, 0.5, 0.8, 0.3],
                  x: [0, 8, -5, 3, 0],
                  y: [0, -5, 3, -8, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Efek Percikan/Kilatan Chakra 1 */}
              <motion.div
                className="absolute top-40 left-10 w-8 h-14 bg-blue-500/40 rounded-full blur-md transform -rotate-45"
                animate={{
                  scale: [1, 1.5, 0.8, 1.3, 1],
                  opacity: [0.4, 0.8, 0.3, 0.7, 0.4],
                  rotate: ['-45deg', '-30deg', '-50deg', '-35deg', '-45deg']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Efek Percikan/Kilatan Chakra 2 */}
              <motion.div
                className="absolute bottom-40 right-10 w-10 h-16 bg-indigo-400/40 rounded-full blur-md transform rotate-45"
                animate={{
                  scale: [1, 1.4, 0.9, 1.2, 1],
                  opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
                  rotate: ['45deg', '60deg', '40deg', '55deg', '45deg']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Lingkaran efek di bawah karakter */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-16 bg-indigo-600/30 rounded-full blur-xl"
                animate={{
                  width: ['14rem', '16rem', '13rem', '15rem', '14rem'],
                  opacity: [0.3, 0.5, 0.3, 0.6, 0.3],
                  y: [0, -3, 2, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Gelombang Chakra Susanoo */}
              <motion.div 
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-4 border-indigo-500/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1.1, 1.3, 1],
                  opacity: [0.2, 0, 0.2, 0, 0.2],
                  borderWidth: ["4px", "2px", "4px", "1px", "4px"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-accent-color"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;