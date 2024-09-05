import Card from "./Card";
import megaProjects from "../utils/megaProjects";
import petProjects from "../utils/petProjects";
import { noOfMegaProjects } from "../utils/megaProjects";
import { noOfPetProjects } from "../utils/petProjects";
import { motion } from "framer-motion";
import innovativeProjects, {
  noOfInnovativeProjects,
} from "../utils/innovativeProjects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const text =
    "What value does that skill hold if you're unable to apply it to the project?".split(
      " "
    );

  return (
    <div
      className=" flex flex-col z-0 px-4 py-8 lg:px-24"
      id="projects"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Projects
      </div>
      <div className=" heading text-center mb-8">
        {text.map((el, i) => (
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>

      {/* background:
              "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
            color: "#fff", */}

      <Tabs defaultValue="mega" className=" flex flex-col">
        <TabsList className=" m-auto bg-slate-800 text-white mb-8">
          <TabsTrigger value="mega">Mega Projects</TabsTrigger>
          <TabsTrigger value="innovative">Innovative Projects</TabsTrigger>
          <TabsTrigger value="pet">Pet Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="mega">
          <div className=" flex flex-col sm:flex-row sm:flex-wrap">
            {megaProjects.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                    noOfMegaProjects % 4 == 0 ? "large:w-1/4" : ""
                  }`}
                >
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    imageUrl={item.imageUrl}
                    techStack={item.techStack}
                    gitLink={item.gitLink}
                    liveLink={item.liveLink}
                    youtubeLink={item.youtubeLink}
                  />
                </div>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="innovative">
          <div className=" flex flex-col sm:flex-row sm:flex-wrap">
            {innovativeProjects.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                    noOfInnovativeProjects % 4 == 0 ? "large:w-1/4" : ""
                  }`}
                >
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    imageUrl={item.imageUrl}
                    techStack={item.techStack}
                    gitLink={item.gitLink}
                    liveLink={item.liveLink}
                    // youtubeLink={item.youtubeLink}
                  />
                </div>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="pet">
          {" "}
          <div className=" flex flex-col sm:flex-row sm:flex-wrap">
            {petProjects.map((item) => {
              return (
                //
                <div
                  key={item.title}
                  className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                    noOfPetProjects % 4 == 0 ? "large:w-1/4" : ""
                  }`}
                >
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    imageUrl={item.imageUrl}
                    techStack={item.techStack}
                    gitLink={item.gitLink}
                    liveLink={item.liveLink}
                  />
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
