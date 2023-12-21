

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 pt-8 pb-6">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: "80px" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-red-600 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold text-white">
            ¡Mantengámonos en contacto con Lingo City!
          </h4>
          <h5 className="text-lg mt-0 mb-2 text-gray-100">
            Encuéntranos en estas plataformas, respondemos en 1-2 días hábiles.
          </h5>
          <div className="mt-6">
            {/* Aquí puedes personalizar los botones de redes sociales de Lingo City */}
            {/* Por ejemplo, cambiar los colores y agregar enlaces de redes sociales de Lingo City */}
            <button
              className="bg-white text-red-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
             <a href="https://www.instagram.com/lingocityenglishacademy/"> <i className="flex fab fa-instagram"></i></a>
            </button>
          
 
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
              <a href="https://www.facebook.com/profile.php?id=61554813599094"> 
               <i className="flex fab fa-facebook-square"></i></a>
              </button>
              <button
                className="bg-white text-green-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
              <a href="https://api.whatsapp.com/send/?phone=51943464938"> <i className="flex fab fa-whatsapp"></i></a> 
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-github"></i>
              </button>

          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          {/* Aquí puedes personalizar y agregar enlaces relacionados con Lingo City */}
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                Enlaces Útiles
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#"
                  >
                    Acerca de Nosotros
                  </a>
                </li>
                {/* ... Otros enlaces útiles de Lingo City ... */}
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                Otros Recursos
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#"
                  >
                    Licencia MIT
                  </a>
                </li>
                {/* ... Otros enlaces de recursos y políticas ... */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-gray-100 font-semibold py-1">
            Copyright © {new Date().getFullYear()} Lingo City.
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
}
