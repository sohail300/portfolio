import Card from "./Card";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import genAIProjects, { noOfGenAIProjects } from "@/utils/genAIProjects";
import petProjects, { noOfPetProjects } from "../utils/petProjects";
import extensionProjects, {
  noOfExtensionProjects,
} from "@/utils/extensionProjects";
import appProjects, { noOfAppProjects } from "@/utils/appProjects";
import webProjects, { noOfWebProjects } from "@/utils/webProjects";
import animationProjects, {
  noOfAnimationProjects,
} from "@/utils/animationProjects";

const Projects = () => {
  const text =
    "What value does that skill hold if you're unable to apply it to the project?".split(
      " ",
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

      <Tabs defaultValue="web" className=" flex flex-col">
        <TabsList className="m-auto mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm shadow-lg text-white overflow-hidden">
          <TabsTrigger
            value="web"
            className="px-4 py-2 transition-all duration-300 hover:bg-white/20"
          >
            Web Apps
          </TabsTrigger>

          <TabsTrigger
            value="genai"
            className="px-4 py-2 transition-all duration-300 hover:bg-white/20"
          >
            AI Agent Projects
          </TabsTrigger>
          <TabsTrigger
            value="animation"
            className="px-4 py-2 transition-all duration-300 hover:bg-white/20"
          >
            UI Animations
          </TabsTrigger>
          <TabsTrigger
            value="app"
            className="px-4 py-2 transition-all duration-300 hover:bg-white/20"
          >
            Mobile Apps
          </TabsTrigger>
          <TabsTrigger
            value="extension"
            className="px-4 py-2 transition-all duration-300 hover:bg-white/20"
          >
            Extensions
          </TabsTrigger>
          {/* <TabsTrigger
            value="pet"
            className="px-4 py-2 transition-all duration-300 hover:bg-white/20"
          >
            Web Pet Projects
          </TabsTrigger> */}
        </TabsList>
        <TabsContent value="web">
          <div className=" flex flex-col sm:flex-row sm:flex-wrap">
            {webProjects.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                    noOfWebProjects % 4 == 0 ? "large:w-1/4" : ""
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
        <TabsContent value="animation">
          <div className=" flex flex-col sm:flex-row sm:flex-wrap">
            {animationProjects.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                    noOfAnimationProjects % 4 == 0 ? "large:w-1/4" : ""
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
        <TabsContent value="genai">
          <div className=" flex flex-col sm:flex-row sm:flex-wrap">
            {genAIProjects.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                    noOfGenAIProjects % 4 == 0 ? "large:w-1/4" : ""
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
        <TabsContent value="app">
          <div className=" flex flex-col sm:flex-row sm:flex-wrap">
            {appProjects.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                    noOfAppProjects % 4 == 0 ? "large:w-1/4" : ""
                  }`}
                >
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    imageUrl={item.imageUrl}
                    techStack={item.techStack}
                    liveLink={item.liveLink}
                    youtubeLink={item.youtubeLink}
                  />
                </div>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="extension">
          <div className=" flex flex-col sm:flex-row sm:flex-wrap">
            {extensionProjects.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                    noOfExtensionProjects % 4 == 0 ? "large:w-1/4" : ""
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
        <TabsContent value="pet">
          <div className=" flex flex-col sm:flex-row sm:flex-wrap">
            {petProjects.map((item) => {
              return (
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
