import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import psg from "./images/psg.png";

function App() {
  return (
    <div>
      <Header />
      <main>
       <section
  id="home"
  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-300 px-8"
>
  <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-16">

    {/* LEFT TEXT */}
    <div className="space-y-6">

      <h2 className="text-white text-lg tracking-widest uppercase font-semibold">
        Hello 👋
      </h2>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
        I am <span className="text-yellow-300">Prabhjeet Singh</span>
      </h1>

      <p className="text-xl text-white/90 font-medium max-w-xl">
        Building innovative solutions with strong
        <span className="font-bold text-yellow-200"> Full-Stack Development </span>
        expertise using modern technologies.
      </p>

      {/* CONTACT */}
      <div className="flex flex-col gap-2 text-white text-lg font-medium">
        <span>📧 prabhjeetsingh2000@gmail.com</span>
        <span>📧 prabhjeetsg100@gmail.com</span>
        <span>📱 +91 8920197546</span>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 pt-4">
        <a href='#projects' className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition">
          View Projects
        </a>

        <a href='#contact' className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition">
          Contact Me
        </a>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">

      <div className="relative">
        <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-40 rounded-full"></div>

        <img
          src={psg}
          alt="Prabhjeet Singh profile"
          className="relative w-80 h-80 md:w-96 md:h-[90%] object-cover rounded-full border-8 border-white shadow-2xl hover:scale-105 transition duration-500"
        />
      </div>

    </div>
  </div>
</section>

        <section id="about" className="py-20 bg-gray-100">
          <About />
        </section>

        <section id="ExpSection" className="py-20 bg-gray-100">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact" className="py-20 bg-gray-100">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
