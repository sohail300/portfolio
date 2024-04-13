import { achievements } from "../utils/achievements";

const Achievements = () => {
  return (
    <div
      className=" flex flex-col z-0 px-12 py-8"
      id="achievements"
      style={{
        backgroundImage: "url(./grid.svg)",
        width: "100vw",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Achievements
      </div>
      <div className=" heading text-center mb-8">
        Effectively translated my skills into tangible results through
        real-world accomplishments.
      </div>

      <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap">
        {achievements.map((item, index) => {
          return (
            <a
              href={item.figmaLink}
              target="_blank"
              key={index}
              className="w-full sm:w-1/2 px-4 py-4"
            >
              <img
                src={item.imageLink}
                alt=""
                className=" w-full rounded-lg filter grayscale hover:filter-none cursor-pointer "
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
