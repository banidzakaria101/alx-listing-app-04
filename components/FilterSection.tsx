import { useState } from "react";
import Pill from "./Pills";

const filter = [
    "Top Villa",
    "Self Checkin",
    "Free PArking",
    "Pet Friendly",
    "Beach Front",
    "Mountain View"
];

const FilterSection: React.FC = () => {
    const [ activeFilter, SetActiveFilter] = useState<string>("");

    const handleFilterClick = (filter: string) => {
        SetActiveFilter(filter=== activeFilter ? "" : filter);
    };

    return (
        <div className="flex flax-wrap gap-2 my-4">
            {filter.map((filter) => (
                <Pill key={filter} label={filter} onClick={() => handleFilterClick(filter)} 
                isActive={activeFilter === filter}></Pill>
            ))}
        </div>
    );
};

export default FilterSection;