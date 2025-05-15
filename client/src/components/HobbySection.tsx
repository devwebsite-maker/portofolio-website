import { motion } from "framer-motion";

const HobbySection = () => {
  const hobbies = [
    {
      id: 1,
      title: "Mendaki Gunung",
      description: "Menjelajahi keindahan alam dan mencapai puncak memberikan perspektif baru dan ketenangan pikiran.",
      image: "https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      smallImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      id: 2,
      title: "Lari",
      description: "Aktivitas lari membantu saya menjaga kebugaran serta meningkatkan fokus dan semangat dalam belajar.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      smallImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <section id="hobi" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-poppins mb-12 flex items-center reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mr-4 text-accent-color">03.</span> Hobi
          <div className="ml-4 h-px bg-text-light/30 w-32"></div>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {hobbies.map((hobby, index) => (
            <motion.div 
              key={hobby.id}
              className="rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden h-64">
                <motion.img 
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover transition duration-700 transform group-hover:scale-110" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/90 via-primary-bg/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold font-poppins mb-2 text-white group-hover:text-accent-color transition duration-300">{hobby.title}</h3>
                  <p className="text-white/80 max-w-md">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-text-light max-w-2xl mx-auto mb-8">
            Kegiatan-kegiatan di atas membantu saya menjaga keseimbangan antara dunia teknologi dan alam. Mereka memberikan inspirasi dan energi baru untuk terus berkreasi.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {hobbies.map((hobby) => (
              <motion.div 
                key={`small-${hobby.id}`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={hobby.smallImage}
                  alt={hobby.title}
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HobbySection;
