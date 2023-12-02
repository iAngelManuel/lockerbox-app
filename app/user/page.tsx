import { UserForm } from '@/components/user-form'
import { UserInfo } from '@/components/user-info'

export default function UserPage () {
  return (
    <>
      <article className="mx-auto max-w-7xl mt-10">
        <section className="bg-red-600 p-20 rounded-xl">
          <div>
            <img
              src="user.png"
              alt="user"
              className="mx-auto w-40 rounded-full"
            />
          </div>
          <h2 className="text-4xl text-center text-white font-extrabold">Karim Elcheikh</h2>
          <p className="text-center text-white font-bold mt-2">Empresa</p>
          <p className="text-center text-white font-bold">Elcheikh Technology</p>
        </section>
      </article>

      <article className="mx-auto max-w-7xl mt-10">
        <section className="flex flex-col md:flex-row justify-between bg-white p-20 rounded-xl">
          <div>
            <UserInfo />
          </div>
          <div className="w-full lg:w-[50%]">
            <UserForm />
          </div>
        </section>
      </article>
    </>
  )
}
