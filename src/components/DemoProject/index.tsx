import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ChatbotDemo from './ChatbotDemo';
import { Bot, Brain, Code } from 'lucide-react';

const DemoProject = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AI Medical Assistant",
      description: "Advanced medical diagnosis system powered by machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
      technologies: ["TensorFlow", "Python", "React", "AWS"],
      demoUrl: "https://demo.terralabz.io/medical-ai",
      features: ["Real-time diagnosis", "Multi-language support", "Cloud integration"]
    },
    {
      title: "Blockchain Supply Chain",
      description: "Decentralized supply chain management system with real-time tracking.",
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=800",
      technologies: ["Solidity", "Ethereum", "Web3.js", "Next.js"],
      demoUrl: "https://demo.terralabz.io/supply-chain",
      features: ["Smart contracts", "Real-time tracking", "Immutable records"]
    },
    {
      title: "Smart Drone Control",
      description: "AI-powered drone control system for precision agriculture.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800",
      technologies: ["Python", "Computer Vision", "IoT", "React"],
      demoUrl: "https://demo.terralabz.io/drone-control",
      features: ["Autonomous navigation", "Crop analysis", "Weather adaptation"]
    },
    {
      title: "NFT Marketplace",
      description: "Digital marketplace for trading unique blockchain-based assets.",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800",
      technologies: ["Solidity", "IPFS", "React", "Node.js"],
      demoUrl: "https://demo.terralabz.io/nft-market",
      features: ["Secure trading", "Digital rights", "Creator royalties"]
    },
    {
      title: "AI Content Generator",
      description: "Advanced content generation system using GPT architecture.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",
      technologies: ["PyTorch", "FastAPI", "React", "Docker"],
      demoUrl: "https://demo.terralabz.io/ai-content",
      features: ["Multi-format output", "Style customization", "Brand voice"]
    },
    {
      title: "Smart City Platform",
      description: "IoT-based platform for monitoring and managing urban infrastructure.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800",
      technologies: ["IoT", "Node.js", "MongoDB", "React"],
      demoUrl: "https://demo.terralabz.io/smart-city",
      features: ["Real-time monitoring", "Predictive maintenance", "Energy optimization"]
    }
  ];

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Assistance",
      description: "Experience our advanced AI chatbot with natural language processing capabilities."
    },
    {
      icon: Brain,
      title: "Smart Learning",
      description: "Our AI adapts to your needs and provides personalized responses."
    },
    {
      icon: Code,
      title: "Technical Expertise",
      description: "Get detailed technical insights about our innovative solutions."
    }
  ];

  return (
    <section id="demo-projects" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title gradient-text mb-6">
            Experience Our Latest Innovations
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-16">
            Explore our cutting-edge demo projects and experience firsthand how our technologies 
            can transform your business. Each project showcases our expertise in different domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h3 className="text-3xl font-bold mb-16 gradient-text">
            Experience Our AI Assistant
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="bg-gradient-to-br from-black/40 to-black/60 p-8 rounded-xl backdrop-blur-sm
                  border border-gray-800 hover:border-secondary/50 transition-all duration-300
                  transform hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <feature.icon className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
                <p className="text-gray-400 text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Our AI assistant is powered by advanced natural language processing and machine learning 
            algorithms. Experience seamless interaction and get instant responses to your queries.
          </p>
        </motion.div>

        <ChatbotDemo />
      </div>
    </section>
  );
};

export default DemoProject;