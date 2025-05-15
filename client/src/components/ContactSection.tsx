import { motion } from "framer-motion";

const ContactSection = () => {
  // Data kontak
  const contacts = [
    {
      id: 1,
      type: "Email",
      value: "haris.setiadi@example.com",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-accent-color" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        </svg>
      ),
      action: {
        text: "Kirim Email",
        url: "mailto:haris.setiadi@example.com",
        primary: false
      }
    },
    {
      id: 2,
      type: "WhatsApp",
      value: "+62 812 3456 7890",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-accent-color" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
          />
        </svg>
      ),
      action: {
        text: "Chat WhatsApp",
        url: "https://wa.me/6281234567890",
        primary: true
      }
    }
  ];

  // Kode sampel untuk ditampilkan sebagai contoh keterampilan coding
  const codeSnippet = `
/* 
 * Haris Setiadi - Goodbye Message Generator
 * Kode ini menampilkan pesan perpisahan yang animatif
 */

class GoodbyeMessage {
  constructor(name, language = 'id') {
    this.name = name;
    this.language = language;
    this.messages = {
      id: ["Sampai jumpa!", "Terima kasih telah mengunjungi!", "Sampai bertemu lagi!"],
      en: ["Goodbye!", "Thank you for visiting!", "See you again!"],
      jp: ["さようなら!", "訪問してくれてありがとう!", "また会いましょう!"]
    };
  }
  
  getRandomMessage() {
    const availableMessages = this.messages[this.language] || this.messages.id;
    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    return availableMessages[randomIndex];
  }
  
  displayMessage() {
    const message = this.getRandomMessage();
    console.log(\`\${message} - \${this.name}\`);
    
    // Animasi pesan perpisahan di konsol
    const colors = ['\x1b[31m', '\x1b[33m', '\x1b[32m', '\x1b[36m', '\x1b[35m'];
    let colorIndex = 0;
    
    const interval = setInterval(() => {
      console.clear();
      console.log(\`\${colors[colorIndex]}\${message} - \${this.name}\x1b[0m\`);
      colorIndex = (colorIndex + 1) % colors.length;
    }, 500);
    
    // Berhenti setelah 5 detik
    setTimeout(() => {
      clearInterval(interval);
      console.log("Kunjungi lagi website saya kapanpun!");
    }, 5000);
    
    return message;
  }
}

const goodbye = new GoodbyeMessage("Haris Setiadi");
goodbye.displayMessage();
`;

  return (
    <section id="kontak" className="py-20 bg-secondary-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-poppins mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-color">04.</span> Hubungi Saya
        </motion.h2>
        
        <motion.p 
          className="text-text-light max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Untuk informasi lebih lanjut atau kerja sama, Anda dapat menghubungi saya melalui kontak di bawah ini.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto mb-16">
          {contacts.map((contact, index) => (
            <motion.div 
              key={contact.id}
              className="bg-primary-bg p-8 rounded-lg shadow-lg card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{contact.icon}</div>
                <h3 className="text-xl font-semibold font-poppins mb-2">{contact.type}</h3>
                <p className="text-text-light mb-4">{contact.value}</p>
                <a 
                  href={contact.action.url} 
                  target={contact.action.url.startsWith("https") ? "_blank" : undefined}
                  rel={contact.action.url.startsWith("https") ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center justify-center ${
                    contact.action.primary 
                      ? "bg-accent-color text-primary-bg hover:bg-accent-color/90" 
                      : "bg-transparent border-2 border-accent-color text-accent-color hover:bg-accent-color/10 btn-hover-effect"
                  } px-6 py-3 rounded font-medium transition duration-300`}
                >
                  {contact.type === "WhatsApp" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  )}
                  {contact.type === "Email" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  )}
                  {contact.action.text}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tampilkan code snippet sebagai contoh keterampilan coding */}
        <motion.div
          className="max-w-3xl mx-auto bg-primary-bg/80 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-secondary-bg/90 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-text-light/70">goodbye-message.js</div>
          </div>
          <pre className="p-4 overflow-x-auto text-sm text-left text-text-light bg-primary-bg/90">
            <code>{codeSnippet}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;