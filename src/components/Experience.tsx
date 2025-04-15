import { experienceData } from "./data/experienceData";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <section className="w-[1150px] mx-auto flex justify-end py-16 h-screen overflow-y-scroll scrollbar-hide">
        <section className="w-[870px] text-lg flex flex-col gap-7">
          {experienceData.map((data) => {
            return (
              <ExperienceCard
                title={data.title}
                type={data.type}
                period={data.period}
                intro={data.intro}
                image={data.image}
              />
            );
          })}
        </section>
      </section>
    </motion.div>
  );
};

export default Experience;
