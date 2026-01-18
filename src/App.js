import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import psg from "./images/psg.png"
function App() {
  return (
    <div>
      <Header />
      <main>
        {/* Add sections for Home, About, Contact, etc. */}
        <section id="home" className="h-screen p-5 bg-gradient-to-b from-blue-500 to-blue-300 flex items-center gap-52 justify-center">
          <div className='flex flex-col gap-5'> 
              <h1 className="text-black text-2xl font-bold"> I am Prabhjeet Singh </h1>
              <p className='text-2xl font-mono font-semibold'>"Building Innovative Solutions with Full-Stack Expertise"</p>
              <div className='text-xl font-semibold text-orange-900 flex  gap-5'>
                <p>prabhjeetsingh2000@gmail.com</p>
                <p>prabhjeetsg100@gmail.com</p>
                <p>+91 8920197546</p>
              </div>
          </div>

          <img src={psg} className='rounded-full w-96 h-96'/>

        </section>
        <section id="about" className="py-20 bg-gray-100">
           <About/> 
        </section>
        <section id="ExpSection" className="py-20 bg-gray-100">
           <Experience/>
        </section>
        <section id = "projects">
          <Projects />
        </section>
        <section id="contact" className="py-20 bg-gray-100">
           <Contact/>
        </section>
      </main>
    </div>
  );
}

export default App;
