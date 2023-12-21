
import './App.css'
import Footer from './components/Footer';
import Aguila1 from './assets/img/4.svg';
import Aguila2 from './assets/img/5.svg';
import Aguila3 from './assets/img/6.svg';
import Aguila4 from './assets/img/lingoCartel10Camiseta.svg';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

function App() {

  useEffect(() => {
    Swal.fire({

      imageUrl: "https://scontent.flim19-1.fna.fbcdn.net/v/t39.30808-6/412352037_122098544570160453_1543660729525608129_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFrxPfkMD0F3fTJZq-vlkBEgGPGHwlear-AY8YfCV5qv4C5ER7GYPdEZzVynh10l09GvA2ZxFbQ2qp6xykOXZTo&_nc_ohc=-YBerPP6dAYAX916AK0&_nc_ht=scontent.flim19-1.fna&oh=00_AfCrLT4pA8qTIx40GLzKCq6tNZGCxMUBEXccDuPLUleSzA&oe=6588EEBE",
      imageHeight: 700,
      imageWidth: 800,
     
  
      html: `
      
        ¡Únete a nosotros en Lingo City, donde el aprendizaje no toma vacaciones y cada día es una nueva aventura educativa! 🌞🚀💬
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
      <a href="https://api.whatsapp.com/send/?phone=51987296990">   <i class="fa fa-thumbs-up"></i> Great! </a>
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }, []);

  return (
    <>
   <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://img.freepik.com/foto-gratis/vista-lateral-empresaria-trabajando-auriculares-portatil_23-2148788874.jpg?w=740&t=st=1703034092~exp=1703034692~hmac=13e1dd86f78d30b4ebcc0d6b08dbaceee1a91141ea7ad2af0a29b86f22876401')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-5 m-40 ml-auto mr-auto text-center">
                  <div className="pr-15">
                    <h1 className="text-white font-semibold text-5xl">
                    Bienvenido a Lingo City
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                     Donde el aprendizaje del inglés se convierte 
                    en una emocionante aventura! 
                    Descubre un nuevo mundo de posibilidades
                     con nuestras clases personalizadas y grupos reducidos. 
                     Únete a Lingo, donde nuestra amigable águila te va guiar hacia el camino de la fluidez 
                      con facilidad y diversión.
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
        </div>

        <section className="pb-20 bg-blue-800 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400">
                     <img    src={Aguila1}></img>
                    </div>
                    <h6 className="text-xl font-semibold">Clases personalizadas</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    En Lingo City, cada estudiante es único, y nuestras clases están diseñadas para adaptarse a tus necesidades y objetivos específicos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-blue-400">
                  <img src={Aguila3}></img>
                    </div>
                    <h6 className="text-xl font-semibold">
                    Actividades Interactivas para Aprender de Manera Divertida
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    ¿Aprender inglés puede ser divertido? ¡Absolutamente! En Lingo City, 
                    llevamos la diversión al aula con actividades interactivas que hacen que cada 
                    lección sea emocionante y participativa. Desde juegos educativos hasta debates 
                    estimulantes, cada clase es una oportunidad para sumergirte en el idioma de una 
                    manera única y entretenida.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-green-400">
                      <img src={Aguila2}></img>
                    </div>
                    <h6 className="text-xl font-semibold">
                    Un ambiente amigable y positivo
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Entra a nuestro mundo educativo y descubre un ambiente
                     acogedor donde te sentirás motivado y apoyado. 
                     En Lingo City, valoramos la positividad y la amabilidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 flex gap-2 flex-col mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-600">
          
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Acerca de Nosotros
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-100">
                En Lingo City, creemos que aprender inglés es accesible para todos.
                no existen limites en la comunicacion.
                 Conoce nuestra historia y al equipo apasionado detrás de esta vibrante 
                 comunidad educativa. Estamos comprometidos a proporcionar una experiencia
                  educativa única y enriquecedora.

                </p>
              
               <div className='w-[28vw]'> <img className='   static  ' src={Aguila4}></img>
               </div>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-red-500">
                  <img
                    alt="..."
                    src="https://img.freepik.com/foto-gratis/aula-virtual-espacio-estudio_23-2149178634.jpg?w=996&t=st=1703043043~exp=1703043643~hmac=2b7942f35b10a5af875fd6c4b8a59e1ab3641c49a0c80063b0e5c9f2bcc663e0"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-yellow-300 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    Creemos que aprender inglés es más efectivo 
                    cuando te sientes cómodo y confiado, por lo que creamos 
                    un entorno donde cada estudiante se sienta parte de nuestra 
                    cálida comunidad.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
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
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg my-4"
                  src="https://img.freepik.com/foto-gratis/mujer-ensenando-estudiantes-clase-ingles-linea_23-2148962952.jpg?w=360&t=st=1703171817~exp=1703172417~hmac=c26aead28c0e8626c3cde421450fea9bd93f2d4426e1f602cfe4bfc864f5a6f7"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                  Nuestros Servicios
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Descubre cómo nuestras clases, diseñadas con cuidado y atención
                   individualizada, hacen que aprender inglés sea emocionante y efectivo. 
                   Experimenta la diferencia de aprender en grupos personalizados, 
                   donde cada estudiante recibe la atención que merece.
                  </p>
                  
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-red-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                          Actividades interactivas
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-red-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Material Didactico</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-red-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Ambiente Amigable y Positivo</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-48 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                🌟 Conoce al Equipo de Lingo City: Haciendo del Aprendizaje una Aventura 🌟
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                ¡Hola a nuestra querida comunidad de aprendices!
                 Hoy, queremos presentarles al increíble equipo que
                  trabaja incansablemente detrás de escena en Lingo
                   City para hacer de cada clase una experiencia inolvidable.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap ">
              <div className="w-full md:w-6/12 lg:w-[33%] lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={Aguila1}
                    className="shadow-lg rounded-full max-w-full mx-auto bg-white"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Claudia Luna
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Cofundadora
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-[33%] lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={Aguila2}
                    className="shadow-lg rounded-full max-w-full mx-auto bg-white"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Mayra Garcia
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Cofundadora
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-[33%] lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={Aguila4}
                    className="shadow-lg rounded-full max-w-full mx-auto bg-white"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Edwar Rejas
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={Aguila3}
                    className="shadow-lg rounded-full max-w-full mx-auto bg-white"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Jenna Kardi
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                   
                  </div>
                
                </div>
                 
              </div>
               */}
            </div>
          </div>
           
        </section>

        <section className="pb-20 relative block bg-blue-800">
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

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4 ">
                <h2 className="text-4xl font-semibold text-white">
                Desbloquea Tu Potencial con Lingo City
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-100">
                Descubre cómo Lingo City, a través de su dedicado equipo, 
                está derribando barreras en el aprendizaje del inglés. 
                Según la Administración Nacional Oceánica y Atmosférica,
                 así como Ted Scambos, la extensión máxima del hielo marino 
                 podría alcanzar niveles récord este año. ¡De manera similar,
                  Lingo City está rompiendo récords en la enseñanza del inglés!
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center gap-6">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                Servicios Excelentes que Transforman tu Aprendizaje
                </h6>
                <p className="mt-2 mb-4 text-gray-100">
                Servicios excepcionales que superan tus expectativas.
                 Con Lingo City, no solo aprendes inglés, sino que
                  experimentas un cambio en tu enfoque hacia el aprendizaje.
                   Nuestro equipo apasionado está aquí para guiarte en cada paso.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Expandiendo Tu Mercado de Conocimientos
                </h5>
                <p className="mt-2 mb-4 text-gray-100">
                Así como el hielo marino se expande y contrae, 
                tu conocimiento también puede crecer y evolucionar.
                 Lingo City te brinda la plataforma para expandir
                 tu mercado de habilidades lingüísticas. 
                 ¡Sumérgete en el aprendizaje con nosotros!
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                El Momento de Despegar con Lingo City
                </h5>
                <p className="mt-2 mb-4 text-gray-100">
                Similar al lanzamiento de un cohete, 
                Lingo City te impulsa hacia nuevas alturas lingüísticas.
                 Nuestras clases son la plataforma de lanzamiento
                  para tu éxito en el aprendizaje del inglés.
                   ¡Prepárate para despegar!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blue-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
              

                <form action="https://formsubmit.co/233cdc15a00551c91997db910ffcf72e" method="POST" className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg my-6 bg-gray-700">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold text-white">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-100">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      
                      name='name'
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      name='email'
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      name='message'
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default App
