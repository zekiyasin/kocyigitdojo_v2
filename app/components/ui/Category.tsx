import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";

type CategoryType = {
  id: number;
  title: string;
  icon: string;
};

const Category = ({ category }: { category: CategoryType }) => {
  // Önce GiIcons'dan ara, sonra GrIcons'dan ara
  const IconComponent =
    (GiIcons as Record<string, React.ElementType>)[category.icon] ||
    (GrIcons as Record<string, React.ElementType>)[category.icon];

  if (!IconComponent) {
    console.warn(`Icon '${category.icon}' bulunamadı.`);
  }

  return (
    <a
      href="#"
      className="flex flex-col items-center justify-center bg-linear-to-b from-[#2d3748] to-[#1f2937] rounded-xl shadow-md p-6 transition-transform hover:scale-105 hover:bg-gray-700 text-white min-h-[140px] w-full aspect-square"
      style={{ textDecoration: "none" }}
    >
      <div className="bg-gray-700 group-hover:bg-gray-600 transition-colors duration-300 rounded-full p-3 shadow-inner mb-3">
        {IconComponent ? (
          <IconComponent className="text-4xl" />
        ) : (
          <span className="text-4xl">?</span>
        )}
      </div>
      <span className="text-sm sm:text-base font-semibold text-center tracking-wide">
        {category.title}
      </span>
    </a>
  );
};

export default Category;
