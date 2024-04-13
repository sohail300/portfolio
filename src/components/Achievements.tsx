import { achievements } from "../utils/achievements";

const Achievements = () => {
  return (
    <div
      className=" flex flex-col z-0 px-8 py-8"
      id="achievements"
      style={{
        backgroundImage: "url(./grid.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
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
              className="w-full sm:w-1/2 px-0 py-4 sm:px-4"
            >
              <img
                src={item.imageLink}
                alt=""
                className=" w-full rounded-lg cursor-pointer "
                // filter grayscale hover:filter-none
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
