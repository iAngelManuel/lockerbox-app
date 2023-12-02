import { NavbarItems } from './navbar-items'

export function Footer (): JSX.Element {
  return (
    <>
      <article className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:justify-center lg:items-start p-5 relative bottom-0 left-0 border-t border-zinc-300">
        <section className="mt-5 animate-fade-down">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl text-center lg:text-start font-bold text-red-600">Contacto</h3>
            <p className="text-xl text-center lg:text-start font-bold">
              Teléfono: <span className="text-lg text-center font-normal">+1 12345678</span>
            </p>

            <p className="text-xl text-center lg:text-start font-bold">
              Correo: <span className="text-lg text-center font-normal">ventas@lockerbox.com</span>
            </p>

            <p className="text-xl text-center lg:text-start font-bold">
              Ubicación: <span className="text-lg text-center font-normal">Miami - Florida</span>
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-5 mt-5 animate-fade-down">
          <h3 className="text-center lg:text-start text-3xl font-bold text-red-600">Navegación</h3>
          <ul className=" mx-auto flex flex-col justify-center gap-5">
            <NavbarItems />
          </ul>
        </section>

        <section className="mt-5 animate-fade-down">
          <div className="flex flex-col gap-5">
            <h3 className="text-center lg:text-start text-3xl font-bold text-red-600">Horarios</h3>
            <p className="text-center lg:text-start text-xl font-bold">Lunes a Viernes: <span className="text-lg font-normal">8:00 am - 5:00 pm</span></p>
            <p className="text-center lg:text-start text-xl font-bold">Sábados: <span className="text-lg font-normal">10:00 am - 4:00 pm</span></p>
            <p className="text-center lg:text-start text-xl font-bold">Domingos: <span className="text-lg font-normal">Cerrado</span></p>
          </div>
        </section>
      </article>

      <article
        className="flex flex-col lg:flex-row gap-14 lg:gap-20 lg:justify-center lg:items-start border-t border-zinc-300 relative bottom-0 left-0">
        <p className="text-xl text-center font-bold">LockerBox &copy; {new Date().getFullYear()}</p>
      </article>
    </>
  )
}
