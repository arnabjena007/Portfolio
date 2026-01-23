import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        // Removing className from item to avoid conflict or need to merge carefully in basic version
                        // But basic BentoGridItem accepts className.
                        className={item.className}
                        // Mapping img to header for now as a simple image
                        header={item.img ? <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-xl" /> : <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
