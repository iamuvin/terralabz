import StarField from './StarField';
import GridOverlay from './GridOverlay';

const Background = () => {
  return (
    <>
      <StarField />
      <GridOverlay />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/80" />
    </>
  );
};

export default Background;