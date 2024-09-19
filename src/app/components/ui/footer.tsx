import { TextHoverEffect } from "../acertenity/text-hover-effect";


export default function Footer() {
  return (
    <footer className="p-8 text-gray-300  bg-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold "><a href="#">Intellis AI</a></h2>
          <p className="mt-2">Empowering your AI journey.</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Quick links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="/" className="text-gray-300 hover:text-white transition ease-in-out">Home</a></li>
            <li><a href="/#about" className="text-gray-300 hover:text-white transition ease-in-out">about</a></li>
            <li><a href="/#Products" className="text-gray-300 hover:text-white transition ease-in-out">Products</a></li>
            <li><a href="/#Pricing" className="text-gray-300 hover:text-white transition ease-in-out">Pricing</a></li>
            <li><a href="/free" className="text-gray-300 hover:text-white transition ease-in-out">Try for Free</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact us</h3>
          <p className="mt-2">Singkawang, West Kalimantan, Indonesia</p>
          <p className="mt-1">bimadev06@gmail.com</p>
        </div>
      </div>
        <TextHoverEffect text="INTELLIS AI" />
      <div className="mt-6 text-center text-sm">Web design by <a href="https://bimadev.xyz">Bimadev</a></div>
    </footer>
  )
}