import CountUp from "react-countup";

function Stats() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={2} duration={5} delay={2} className="block w-[60px]" />+
        </div><span>Years <br/> experiences</span>
      </div>
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={12} duration={5} delay={2} className="block w-[60px]" />
        </div>
        <span>
          projects  <br />completed
        </span>
      </div> 
    </div>
  )
}

export default Stats
