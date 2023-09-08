type SkillsBtnPropType = {
  skill: string;
};
const SkillsBtn = ({ skill }: SkillsBtnPropType) => {
  return (
    <div className="rounded-md h-[40px] border-black/10 border bg-gray-200 text-gray-600 hover:text-[#763bf6] text-xs md:text-sm font-bold flex justify-center items-center px-4 sm:px-8 hover:scale-105 transition-all duration-300 shadow-md shadow-gray-400 
    dark:text-white dark:shadow dark:bg-neutral-800">
      {skill}
    </div>
  );
};

export default SkillsBtn;
