interface CircleButton {
  children: React.ReactNode;
  onClick: () => void;
}

const CrircleButton = ({ children, onClick }: CircleButton) => {
  return (
    <div
      className="bg-dark-background-color opacity-50 flex justify-center items-center w-12 h-12 rounded-xl z-20 hover:cursor-pointer"
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default CrircleButton;
