import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  delay = 0
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="group bg-gradient-to-br from-black/40 to-black/60 rounded-xl overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex gap-3">
            {demoUrl && (
              <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;