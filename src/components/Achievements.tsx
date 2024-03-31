
const Achievements = () => {
  return (
    <div>
        <div
        className=" flex flex-col z-0 px-24 py-8"
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

        <div className=" flex flex-row justify-between items-center mx-auto">
          <a href="https://www.figma.com/file/lIIDMGg3PQZiTm7L49be2D/SIH?type=design&node-id=0%3A1&mode=design&t=tuRsfLbZYqIucO8y-1" target="_blank">
          <img src="./achievement/achievement1.png" alt="" className=" h-64 rounded-sm cursor-pointer" />
          </a>

          <a href="https://www.figma.com/file/qt8sXimxe3PDxTGpFXEfx4/Streeya?type=design&node-id=339%3A380&mode=design&t=o2DNjtENGCVEiY1o-1" target="_blank">
          <img src="./achievement/achievement2.png" alt="" className=" h-64 rounded-sm mx-6 cursor-pointer"/>
          </a>

          <a href="https://www.figma.com/file/jy9dlBnoItnKxPHuPEwtXG/Mama?type=design&node-id=124%3A142&mode=design&t=2eNbFatsGsuyzuxO-1" target="_blank">
          <img src="./achievement/achievement3.png" alt="" className=" h-64 rounded-sm cursor-pointer"/>
          </a>
        </div>
        </div>
    </div>
  )
}

export default Achievements