import type { CategorieCardType } from "@/app/types/CategorieCardType";
import { FaIndustry } from "react-icons/fa";
import { MdApartment, MdBusinessCenter, MdLandscape, MdHomeWork } from "react-icons/md";

 export const categories: CategorieCardType[] = [
            {name: "Residenciais", icon: <MdApartment size="50"/> },
            {name: "Comerciais", icon: <MdBusinessCenter size="50"/> },
            {name: "Terrenos", icon: <MdLandscape size="50"/> },
            {name: "Industriais", icon: <FaIndustry size="50"/> },
            {name: "Empreendimentos", icon: <MdHomeWork size="50"/> },
      ];