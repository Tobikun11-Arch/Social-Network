import React from 'react'

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-100 flex items-center justify-center">
        <section className='flex gap-10'>
          <article>
            <h1>Facebook</h1>
          </article>

          <aside>
            <p>Form</p>
          </aside>
        </section>
      </main>

      <footer className="bg-white p-4 text-center">
        <p>Footer</p>
      </footer>
    </div>
  )
} 