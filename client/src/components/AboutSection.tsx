import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 reveal"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 flex items-center">
              <span className="mr-4 text-accent-color">01.</span> Tentang Saya
              <div className="ml-4 h-px bg-text-light/30 w-32"></div>
            </h2>
            
            <div className="space-y-4 text-text-light">
              <p>Nama saya <span className="text-accent-color font-medium">Haris Setiadi</span>.</p>
              <p>
                Saya adalah junior programmer dan pelajar di SMKN 2 Magelang. Saat ini saya sedang mengembangkan kemampuan di bidang pemrograman dengan mempelajari bahasa seperti <span className="text-text-color font-medium">Python, JavaScript, PHP, Java, dan Flutter</span>.
              </p>
              <p>
                Selain itu, saya juga mengembangkan keterampilan di desain grafis menggunakan <span className="text-text-color font-medium">CorelDRAW, Figma, dan Adobe Photoshop</span>.
              </p>
              <p>
                Saya berkomitmen untuk terus belajar dan meningkatkan kemampuan dalam teknologi dan desain.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 reveal"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <motion.div 
                className="relative rounded-md overflow-hidden border-2 border-accent-color z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition duration-300"
                whileHover={{ scale: 1.05 }}
                animate={{
                  rotate: [0, 1, 0, -1, 0],
                  scale: [1, 1.01, 1, 1.01, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" 
                  alt="Representasi seorang pengembang web dan desainer"
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-accent-color/20 group-hover:bg-transparent transition"></div>
              </motion.div>
              <div className="absolute top-4 left-4 w-full h-full border-2 border-accent-color rounded-md z-0"></div>
              
              {/* Code snippets decoration - animated */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-bg rounded-lg shadow-lg p-3 z-20 hidden md:block"
                initial={{ opacity: 0, rotate: 8 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  rotate: [8, 12, 10, 14, 8],
                  y: [0, -5, 0, -8, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <pre className="text-[8px] text-accent-color overflow-hidden font-mono">
{`function createAnimation() {
  const element = document.querySelector(".element");
  element.addEventListener("mouseover", () => {
    element.classList.add("animated");
  });
}

// Initialize animations
window.onload = () => {
  createAnimation();
  setupEvents();
};`}
                </pre>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-5 -left-5 w-32 h-32 bg-secondary-bg rounded-lg shadow-lg p-3 z-20 hidden md:block"
                initial={{ opacity: 0, rotate: -4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  rotate: [-4, -8, -6, -10, -4],
                  x: [0, 5, 0, 8, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7
                }}
              >
                <pre className="text-[7px] text-accent-color overflow-hidden font-mono">
{`<div class="container">
  <header class="header">
    <h1>Haris Setiadi</h1>
    <p>Web Developer</p>
  </header>
  <main>
    <section class="about">
      <!-- Content -->
    </section>
  </main>
</div>`}
                </pre>
              </motion.div>
              
              {/* Tambahan elemen kode yang bergerak */}
              <motion.div
                className="absolute top-10 right-0 w-28 h-28 bg-secondary-bg rounded-lg shadow-lg p-2 z-20 hidden md:block"
                initial={{ opacity: 0, rotate: 5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  rotate: [5, 9, 7, 3, 5],
                  y: [0, 8, 0, 5, 0],
                  x: [0, -5, 0, -3, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9
                }}
              >
                <pre className="text-[7px] text-accent-color overflow-hidden font-mono">
{`import Flutter from 'flutter';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomePage(),
    );
  }
}`}
                </pre>
              </motion.div>
              
              <motion.div
                className="absolute top-0 left-5 w-24 h-24 bg-secondary-bg rounded-lg shadow-lg p-2 z-20 hidden md:block"
                initial={{ opacity: 0, rotate: -3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  rotate: [-3, -7, -5, -1, -3],
                  y: [0, -8, 0, -5, 0],
                  x: [0, 5, 0, 3, 0]
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.1
                }}
              >
                <pre className="text-[6px] text-accent-color overflow-hidden font-mono">
{`public class Java {
  public static void main(String[] args) {
    System.out.println("Hello Haris!");
    
    // Create animation
    Animation anim = new Animation();
    anim.start();
  }
}`}
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;