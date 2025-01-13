import React, { ReactNode } from "react";

interface ButtonWithSoundProps {
  children: ReactNode; // For the button text or child elements
  onClick: () => void; // The button's click handler
  className?: string; // Optional additional styles
}

const ButtonWithSound: React.FC<ButtonWithSoundProps> = ({ children, onClick, className }) => {
  const playSound = () => {
    const buttonSound = new Audio(`${process.env.PUBLIC_URL}/static/media/button-click.mp3`);
    buttonSound.play();
  };

  const handleClick = () => {
    playSound(); // Play the sound
    onClick(); // Execute the button's click handler
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ButtonWithSound;
