const Chip = ({ text }: { text: String }) => {
  return (
    <div className="bg-error-color w-fit text-xs rounded-full p-1 text-white-color">
      {text}
    </div>
  );
};

export default Chip;
