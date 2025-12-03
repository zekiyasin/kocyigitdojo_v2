// components/AthletesMenuList.tsx
import { FaUser } from "react-icons/fa";

const athletes = [
  "Edanur Koçyiğit",
  "Zeki Yasin Koçyiğit",
  "Şuranur Koçyiğit",
  "Rana Karduz",
  "Rana Aktaş",
  "Saliha Nur Dülgerog",
  "Muhammet Dülgerog",
  "Muhammed Dönmez",
  "Sümeyye Ebrar Şahin",
  "Sueda Şahin",
  "Yiğit Alp Bayrakcı",
  "Betül Zeynep Yaşar",
  "Arsen Karasungur",
  "Bengü Koral",
];

const AthletesMenuList = () => {
  return (
    <div className="mt-2 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
      <div className="flex flex-col gap-2">
        {athletes.map((name, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-white text-sm px-3 py-1 rounded-md hover:bg-white/10 transition-all"
          >
            <FaUser className="text-xs opacity-70" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AthletesMenuList;
