const Chip = ({ text }: { text: String }) => {
  return (
    <div className="flex items-center justify-center bg-error-color w-fit text-xs rounded-full px-2 py-1 text-center text-white">
      {text}
    </div>
  );
};

export default Chip;
