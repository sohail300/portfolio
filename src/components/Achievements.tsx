
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
        Effectively translated my skills into tangible results through real-world accomplishments.
        </div>

        <div className=" flex flex-col items-center">
          <a href="https://www.figma.com/file/lIIDMGg3PQZiTm7L49be2D/SIH?type=design&node-id=0%3A1&mode=design&t=tuRsfLbZYqIucO8y-1" target="_blank">
          <img src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872069/portfolio/achievement/achievement1_vpcxw2.png" alt="" className=" w-full rounded-lg filter grayscale hover:filter-none cursor-pointer " />
          </a>

          <a href="https://www.figma.com/file/qt8sXimxe3PDxTGpFXEfx4/Streeya?type=design&node-id=339%3A380&mode=design&t=o2DNjtENGCVEiY1o-1" target="_blank">
          <img src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872069/portfolio/achievement/achievement2_jtzp8v.png" alt="" className=" w-full rounded-lg filter grayscale hover:filter-none cursor-pointer my-16 " />
          </a>

          <a href="https://www.figma.com/file/jy9dlBnoItnKxPHuPEwtXG/Mama?type=design&node-id=124%3A142&mode=design&t=2eNbFatsGsuyzuxO-1" target="_blank">
          <img src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872069/portfolio/achievement/achievement3_qfzqnu.png" alt="" className=" w-full rounded-lg filter grayscale hover:filter-none cursor-pointer " />
          </a>
        </div>
        </div>
  )
}

export default Achievements