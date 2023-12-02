import Link from 'next/link'

export default function HomePage () {
  return (
    <>
      <article className="mx-auto max-w-7xl mt-5">
        <section className="w-full bg-red-600 p-10 rounded-2xl shadow-xl">
          <h2 className="text-4xl md:text-6xl lg:text-9xl text-center text-white">📦LockerBox📦</h2>
        </section>
      </article>

      <article className="mx-auto max-w-7xl mt-10">
        <section className="w-full md:flex md:justify-center md:items-center">
          <div className="md:mx-auto md:w-1/2">
            <h3 className="text-4xl text-center font-bold mt-5 mb-5">¿Qué es LockerBox?</h3>
            <p className="text-2xl">
              LockerBox es tu puerta de acceso a la diversidad de productos de Estados Unidos a precios mayoristas. Somos una plataforma que facilita a emprendedores la importación de productos de alta calidad para distribuir en sus países, permitiéndoles ofrecer a sus clientes una amplia gama de opciones a costos competitivos.
            </p>
          </div>
          <div className="mx-auto md:w-auto">
            <img
              src="home.png"
              alt="LockerBox"
            />
          </div>
        </section>
      </article>

      <article className="mx-auto max-w-7xl mt-10">
        <section className="w-full md:flex md:justify-center md:items-center">
          <div className="mx-auto md:w-1/2">
            <img
              src="home2.webp"
              alt="LockerBox"
            />
          </div>
          <div className="mx-auto md:w-1/2">
            <h3 className="text-4xl text-center font-bold mt-5 mb-5">¿Cómo funciona?</h3>
            <p className="text-2xl">
              Navegar por nuestro catálogo en línea y seleccionar productos de marcas reconocidas es tan sencillo como abrir una puerta. Una vez elegidos los artículos, te los enviamos a través de nuestro eficiente sistema de casilleros, garantizando la entrega segura y oportuna de tus pedidos. Además, ofrecemos la opción de dropshipping, permitiéndote comenzar tu propio negocio con una inversión mínima y una mensualidad.
            </p>
          </div>
        </section>
      </article>

      <article className="mx-auto max-w-7xl mt-10">
        <section className="w-full md:flex md:justify-center md:items-center">
          <div className="mx-auto md:w-1/2">
            <h3 className="text-4xl text-center font-bold mt-5 mb-5">¿Quiénes somos?</h3>
            <p className="text-2xl">
              LockerBox es un equipo comprometido con el éxito de emprendedores en todo el mundo. Establecemos alianzas estratégicas con empresas de renombre en Estados Unidos para ofrecer un catálogo diverso y de alta calidad. Nuestra misión es brindarte las herramientas necesarias para que tu emprendimiento crezca, con un enfoque en la simplicidad, eficiencia y transparencia en cada paso del proceso.
            </p>
          </div>
          <div className="mx-auto md:w-auto">
            <img
              src="home3.avif"
              alt="LockerBox"
            />
          </div>
        </section>
      </article>

      <article className="mx-auto max-w-7xl mt-20">
        <section className="w-full bg-red-600 p-10 rounded-2xl shadow-xl">
          <h3 className="text-4xl text-center font-bold mt-5 mb-5 text-white">¿Qué esperas para usar LockerBox?</h3>
          <div className="flex justify-center">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Link
                href="/product"
              >¡Usar LockerBox!</Link>
            </button>
          </div>
        </section>
      </article>
    </>
  )
}
