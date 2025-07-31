import React from 'react'
import Hero from './components/Hero'
import LoginForm from './components/LoginForm'

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow bg-gray-100 flex items-center justify-center p-4 md:p-14">
        <section className='lg:flex gap-48'>
          <Hero />
          <LoginForm />
        </section>
      </main>

      <footer className="bg-white p-4 text-center">
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
      </footer>

    </div>
  )
} 