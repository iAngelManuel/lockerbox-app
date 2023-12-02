import { NavbarItems } from './navbar-items'

export function Header () {
  return (
    <nav className='border-b border-zinc-300 py-3'>
      <section className='container mx-auto flex gap-3 justify-between items-center'>
        <div className="flex gap-2 items-center">
          <img
            src="logo.jpg"
            alt="LockerBox"
            className="w-10 h-10" />
          <h1>LockerBox</h1>
        </div>
        <ul className='hidden lg:flex gap-5'>
          <NavbarItems />
        </ul>
      </section>
    </nav>
  )
}
