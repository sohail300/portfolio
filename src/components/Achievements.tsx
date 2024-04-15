import { achievements } from "../utils/achievements";

const Achievements = () => {
  return (
    <div
      className=" flex flex-col z-0 px-8 py-8"
      id="achievements"
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Achievements
      </div>
      <div className=" heading text-center mb-8">
        Effectively translated my skills into tangible results through
        real-world accomplishments.
      </div>

      <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap lg:mx-auto lg:justify-between lg:px-32">
        {achievements.map((item, index) => {
          return (
            <a
              href={item.figmaLink}
              target="_blank"
              key={index}
              className="w-full sm:w-1/2 px-0 py-4 sm:px-4 lg:w-1/3 "
            >
              <img
                src={item.imageLink}
                alt=""
                className=" w-full rounded-lg cursor-pointer lg:filter lg:grayscale lg:hover:filter-none lg:rounded-sm"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
