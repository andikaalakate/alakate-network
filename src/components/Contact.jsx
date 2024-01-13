const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="px-1 w-full bg-gradient-to-tr from-dark to-secondary min-h-dvh pt-16"
      >
        <div className="container py-16 animate__animated animate__fadeInUp">
          <div className="w-full px-4 pb-4">
            <div className="max-w-5xl mx-auto text-center pt-8 animate__animated animate__fadeInUp">
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Hubungi Kami
              </h2>
              <p className="font-medium text-md text-slate-300 md:text-lg pb-4">
                Untuk informasi lebih lanjut atau pertanyaan, jangan ragu untuk
                menghubungi kami melalui formulir di bawah ini atau melalui
                kontak yang tersedia. Kami akan dengan senang hati membantu
                Anda.
              </p>
            </div>

            <form>
              <div className="w-full lg:w-2/3 lg:mx-auto">
                <div className="w-full px-4 pb-8">
                  <label
                    htmlFor="name"
                    className="text-base font-bold text-white animate__animated animate__slideInDown"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-2 bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-dark focus:ring-1 focus:border-dark animate__animated animate__slideInRight"
                    required
                  />
                </div>
                <div className="w-full px-4 pb-8">
                  <label
                    htmlFor="email"
                    className="text-base font-bold text-white animate__animated animate__slideInDown"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-2 bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-dark focus:ring-1 focus:border-dark animate__animated animate__slideInRight"
                    required
                  />
                </div>
                <div className="w-full px-4 pb-4">
                  <label
                    htmlFor="pesan"
                    className="text-base font-bold text-white animate__animated animate__slideInDown"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    className="w-full mt-2 p-3 bg-slate-200 text-dark rounded-md focus:outline-none focus:ring-dark focus:ring-1 focus:border-dark h-32 animate__animated animate__slideInRight"
                    required
                  ></textarea>
                </div>
                <div className="w-full px-4 pb-8">
                  <button className="text-sm font-semibold text-dark bg-white py-3 px-8 rounded-lg hover:shadow-lg hover:opacity-75 transition-all duration-500 ease-in-out mini:py-2 mini:px-5 animate__animated animate__slideInDown">
                    Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
