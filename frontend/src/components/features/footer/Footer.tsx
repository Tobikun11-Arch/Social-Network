import React from 'react'

export default function Footer() {
  const languages = ["English", "Filipino", "Spanish", "French", "German", "Japanese", "Korean", "Chinese"];

  return (
    <footer className="bg-white p-4 text-left text-xs">
    <div className="flex items-center justify-center">
      <p className="text-gray-600 text-sm">{languages.join("  ")}</p>
      <button className='px-2 flex justify-center items-center bg-gray-100 ml-3'>+</button>
    </div>

    <div className='flex justify-center mt-5 text-gray-600'>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <p>Sign Up</p>
        <p>Log In</p>
        <p>Messenger</p>
        <p>Facebook Lite</p>
        <p>Video</p>
        <p>Meta Pay</p>
        <p>Meta Store</p>
        <p>Meta Quest</p>
        <p>Ray-Ban Meta</p>
        <p>Meta AI</p>
        <p>Meta AI more content</p>
        <p>Instagram</p>
        <p>Threads</p>
        <p>Voting Information Center</p>
      </div>
    </div>

    <div className='flex justify-center text-gray-600'>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <p>Privacy Policy</p>
        <p>Privacy Center</p>
        <p>About</p>
        <p>Create ad</p>
        <p>Create Page</p>
        <p>Developers</p>
        <p>Careers</p>
        <p>Cookies</p>
        <p>Ad choices</p>
        <p>Terms</p>  
        <p>Help</p>
        <p>Contact Uploading & Non-Users</p>
      </div>
    </div>

    <p className="mt-2 text-left">&copy; 2025 Social Network</p>
  </footer>
  )
}
