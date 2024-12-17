import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, content: 'info@terralabz.io', href: 'mailto:info@terralabz.io' },
  { icon: Phone, content: '+94 77 888 8897\n+94 76 034 9099' },
  { icon: MapPin, content: 'Sri Lanka | Singapore' },
];

const ContactInfo = () => {
  return (
    <ul className="space-y-4">
      {contactInfo.map(({ icon: Icon, content, href }) => (
        <li key={content} className="flex items-start space-x-3">
          <Icon size={20} className="text-secondary mt-1 flex-shrink-0" />
          {href ? (
            <a
              href={href}
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              {content}
            </a>
          ) : (
            <span className="text-gray-400 whitespace-pre-line">{content}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ContactInfo;