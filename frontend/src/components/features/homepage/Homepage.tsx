import React from 'react'
import Hero from './components/Hero'
import LoginForm from './components/LoginForm'
import Footer from '../footer/Footer'

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-100 flex items-center justify-center p-4 md:p-14">
        <section className='lg:flex gap-48'>
          <Hero />
          <LoginForm />
        </section>
      </main>
      <Footer />
    </div>
  )
} 