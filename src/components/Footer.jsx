import Marquee from "react-fast-marquee"

const Footer = () => {
  return (
    <>
    <div className="sticky bottom-0 left-0 right-0 bg-dark">
        <Marquee gradient={false} speed={100}>
            <h2 className="text-white">Alakate Network.</h2>
        </Marquee>
    </div>
    </>
  )
}

export default Footer