import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@terralabz.io',
      href: 'mailto:info@terralabz.io',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+94 77 888 8897\n+94 76 034 9099',
    },
    {
      icon: MapPin,
      title: 'Locations',
      content: ['Sri Lanka', 'Singapore'],
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Let's Build the Future Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-4 sm:p-6 bg-gradient-to-br from-black/40 to-black/60 rounded-xl"
            >
              <div className="flex justify-center mb-4">
                <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{info.title}</h3>
              {info.href ? (
                <a 
                  href={info.href}
                  className="text-gray-400 hover:text-secondary whitespace-pre-line"
                >
                  {info.content}
                </a>
              ) : info.title === 'Locations' ? (
                <div className="space-y-2">
                  {(info.content as string[]).map((location) => (
                    <div key={location} className="text-gray-400">
                      {location}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 whitespace-pre-line">{info.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto space-y-4 sm:space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary"
          />
          <button className="w-full btn btn-primary">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;