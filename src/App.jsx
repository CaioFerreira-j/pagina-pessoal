import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { MonitorSmartphone, Settings, ChevronDown, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SiReact, SiVuedotjs, SiJavascript } from 'react-icons/si'
import { FaJava, FaCss3Alt } from 'react-icons/fa'
import './index.css'


const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)


function Background() {
  return (
    <div className="background-canvas">
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none'
        }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          bgColor1="#000000"
          bgColor2="#000000"
          brightness={0.8}
          cAzimuthAngle={180}
          cDistance={2.61}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#606080"
          color2="#2031ca"
          color3="#212121"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={40}
          frameRate={10}
          gizmoHelper="hide"
          grain="on"
          lightType="3d"
          pixelDensity={1.1}
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.3}
          uStrength={1.5}
          uTime={8}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  )
}

function App() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Background />
      
      {/* Hero Section */}
      <section className="hero">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transformando <br />
          <span style={{ color: 'var(--primary)' }}>Ideias em Realidade</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Especialista em criar soluções tecnológicas inovadoras, 
          desde sites modernos até automações que escalam o seu negócio.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="btn btn-primary" onClick={() => handleScroll('services')}>
            Conheça meus serviços <ChevronDown size={20} />
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Meus Serviços
        </motion.h2>
        
        <div className="services-grid">
          <motion.div 
            className="service-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="service-icon">
              <MonitorSmartphone size={32} />
            </div>
            <h3 className="service-title">Criação de Sites</h3>
            <p className="service-desc">
              Desenvolvimento de sites modernos, responsivos e otimizados para conversão. 
              Utilizando as melhores tecnologias do mercado para garantir velocidade e SEO.
            </p>
          </motion.div>

          <motion.div 
            className="service-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="service-icon">
              <Settings size={32} />
            </div>
            <h3 className="service-title">Automação de Processos</h3>
            <p className="service-desc">
              Elimine tarefas manuais e repetitivas. Crio automações inteligentes que 
              economizam tempo, reduzem erros e aumentam a produtividade da sua equipe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tecnologias
        </motion.h2>
        <div className="tech-container">
          {[
            { icon: <SiReact color="#61DAFB" size={40} />, name: 'React' },
            { icon: <SiVuedotjs color="#4FC08D" size={40} />, name: 'Vue' },
            { icon: <SiJavascript color="#F7DF1E" size={40} />, name: 'JavaScript' },
            { icon: <FaCss3Alt color="#1572B6" size={40} />, name: 'CSS' },
            { icon: <FaJava color="#007396" size={40} />, name: 'Java' },
          ].map((tech, i) => (
            <motion.div 
              key={tech.name}
              className="tech-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="tech-icon-wrapper">
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Sobre Mim
        </motion.h2>
        <div className="about-content glass-panel">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/profile-person.png" alt="Minha Foto" />
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Olá, eu sou o Caio Ferreira</h3>
            <p>
              Olá! Sou um desenvolvedor focado em resolver problemas reais através do código.
              Ajudo empresas e empreendedores a escalarem seus resultados com soluções digitais
              inteligentes e de alto desempenho. Construo sistemas robustos, sites dinâmicos e 
              automações que otimizam fluxos de trabalho e impulsionam o seu sucesso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ paddingBottom: '100px' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Vamos Conversar?
        </motion.h2>
        <div className="contact-links">
          <motion.a 
            href="https://www.linkedin.com/in/jferreirax/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link contact-linkedin glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <LinkedinIcon />
            LinkedIn
          </motion.a>
          
          <motion.a 
            href="https://www.instagram.com/jotasolution_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link contact-instagram glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <InstagramIcon />
            Instagram
          </motion.a>
          
          <motion.a 
            href="https://wa.me/5598985879276" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link contact-whatsapp glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MessageCircle size={24} />
            WhatsApp
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default App
