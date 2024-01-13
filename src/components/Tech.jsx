import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"

SectionWrapper
const Tech = () => {
  return (
    <div className="flex fle-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          </div>
      ))}
    </div>
  )
}

export default Tech