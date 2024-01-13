const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://getwallpapers.com/wallpaper/full/2/8/1/818372-networking-wallpapers-2880x1800-laptop.jpg)",
        }}
        id="home"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              ALAKATE Network.
            </h1>
            <p className="mb-5"></p>
            <button className="btn hover:bg-black hover:bg-opacity-75 bg-opacity-5 bg-white border rounded-lg m-2 backdrop-blur-sm text-white">
              Lebih Lanjut
            </button>
            <button className="btn hover:bg-black hover:bg-opacity-75 bg-opacity-5 bg-white border rounded-lg m-2 backdrop-blur-sm text-white">
              Kontak Saya
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero