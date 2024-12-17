export type LogoSizes = 'sm' | 'md' | 'lg';

export const getLogoSize = (size: LogoSizes): string => {
  const sizes = {
    sm: 'h-16 md:h-20', // Increased from h-10/h-12
    md: 'h-20 md:h-24', // Increased from h-14/h-16
    lg: 'h-24 md:h-32', // Increased from h-20/h-24
  };

  return sizes[size];
};