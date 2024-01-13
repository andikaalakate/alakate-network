const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-tr from-dark to-secondary" id="about">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">ALAKATE NETWORK.</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptas vel vero ut enim inventore dolore odio eum magni repellat, nihil aperiam consectetur minima! Quo vitae ab dolorem eaque minima deleniti numquam itaque, expedita aspernatur? Voluptate, perferendis a. Suscipit eaque sequi accusantium officiis eos, non expedita et hic veritatis ratione!
            </p>
            <button className="btn btn-primary">Pesan</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About