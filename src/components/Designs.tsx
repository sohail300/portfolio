import { designs } from "../utils/designs";

const Designs = () => {
  return (
    <div
      id="designs"
      style={{
        backgroundImage: "url(./grid.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" flex flex-col z-0 px-8 pb-8"
    >
      <div className=" font-heading text-heading heading text-center">
        Hello Designers
      </div>
      <div className=" heading text-center mb-8">
        As an element of design, I've crafted several minimal user interfaces.
      </div>
      <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap">
        {designs.map((item, index) => {
          return (
            <a href={item.figmaLink} target="_blank" key={index} className="w-full sm:w-1/2 px-0 py-4 sm:px-4">
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

export default Designs;
