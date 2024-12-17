const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Innovations', href: '#innovations' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

const QuickLinks = () => {
  return (
    <ul className="space-y-3">
      {quickLinks.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            className="text-gray-400 hover:text-secondary transition-colors"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default QuickLinks;