type SkillsBtnPropType = {
  skill: string;
};
const SkillsBtn = ({
  skill,
}: SkillsBtnPropType) => {
  return (
    <div className='rounded-md h-[40px] bg-gray-300 text-gray-600 hover:text-white text-sm font-bold flex justify-center items-center px-8 hover:scale-105 transition-all duration-300 shadow-md shadow-gray-400'>
      {skill}
    </div>
  );
};

export default SkillsBtn;
