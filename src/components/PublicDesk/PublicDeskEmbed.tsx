import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PublicDeskEmbed = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black/30"
      >
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl border border-gray-800"
            src="https://www.canva.com/design/DAGZWs73eP8/0oFfyNZZKWjjMmQudC-mjg/view?embed"
            allowFullScreen
            allow="fullscreen"
            loading="lazy"
            referrerPolicy="strict-origin"
            title="Terra Labz Public Desk"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 text-center"
      >
        <a
          href="https://www.canva.com/design/DAGZWs73eP8/0oFfyNZZKWjjMmQudC-mjg/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full
            text-secondary hover:bg-secondary/20 transition-colors duration-300"
        >
          <span>View Full Screen</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default PublicDeskEmbed;