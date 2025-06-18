import profile from '../assets/portrait.jpg';
import resume from '../assets/resume.pdf';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="min-h-screen bg-[#0f0f1b] text-white flex flex-col items-center justify-center px-6 sm:px-12 py-12 space-y-10 sm:space-y-0 sm:flex-row sm:space-x-12">
      
      {/* Profile Image */}
      <div className="sm:order-1">
        <img
          src={profile}
          alt="Nicole Portrait"
          className="w-40 h-40 sm:w-64 sm:h-64 object-cover rounded-full shadow-2xl border-4 border-purple-600"
        />
      </div>

      {/* Intro and Resume Button */}
      <div className="text-center sm:text-left max-w-xl sm:order-2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-purple-400">Nicole</span>
        </h1>
        <h2 className="text-xl sm:text-2xl mb-4">I study Computer Science & Mechatronics Engineering</h2>
        <p className="text-sm text-gray-400 mb-6">
          Passionate about people, technology, and impact. Curious and always eager to learn.
        </p>
        <a
          href={resume}
          download
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded shadow-lg"
        >
          Resume →
        </a>
      </div>

      {/* Social icons */}
      <div className="flex sm:flex-col justify-center items-center space-x-6 sm:space-x-0 sm:space-y-10 sm:order-3">
        <a href="https://www.linkedin.com/in/nicole-leow-40b117214/" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://github.com/nicoleleoww" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a href="mailto:nicole.leow@hotmail.com">
          <FaEnvelope className="text-2xl hover:text-pink-400" />
        </a>
      </div>
    </section>
  );
};

export default Home;
