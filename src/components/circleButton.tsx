interface CircleButton {
  children: React.ReactNode;
  onClick: () => void;
}

const CrircleButton = ({ children, onClick }: CircleButton) => {
  return (
    <div
      className="bg-white-color flex justify-center items-center w-16 h-16 rounded-full z-20 hover:cursor-pointer"
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default CrircleButton;
