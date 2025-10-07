import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Linkedin, Github, ExternalLink, Award, Briefcase, Code, GraduationCap } from 'lucide-react';
import ContactForm from './components/ContactForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const skills = [
    { name: 'Python', level: 85 },
    { name: 'Frontend Development', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 75 },
    { name: 'Figma', level: 80 }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website with cart functionality, user authentication, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Portfolio Generator',
      description: 'An automated portfolio generator that creates personalized websites based on user input and preferences.',
      technologies: ['Python', 'Flask', 'JavaScript'],
      link: '#'
    }
  ];

  const certifications = [
    {
      title: 'Python Programming',
      issuer: 'Coursera',
      date: '2024'
    },
    {
      title: 'Frontend Web Development',
      issuer: 'Udemy',
      date: '2023'
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Google',
      date: '2024'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                SM
              </a>

              <div className="hidden md:flex space-x-8">
                <a href="#about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About</a>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
                <a href="#certifications" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Certifications</a>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  SM
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Sakthivel Murugan R
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
                B.Tech IT Student | Web Developer | UI/UX Designer
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-8">
                Passionate about creating beautiful, functional web experiences. Currently pursuing B.Tech in Information Technology at Adhiparasakthi Engineering College (2023-2027).
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl">
                  Get In Touch
                </a>
                <a href="#projects" className="px-8 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a third-year Information Technology student with a passion for web development and design.
                  I believe in creating digital experiences that are not only functional but also beautiful and intuitive.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My journey in tech started with Python programming and has evolved to encompass frontend development,
                  UI/UX design, and full-stack application development. I'm constantly learning and exploring new technologies
                  to expand my skill set.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-blue-600 dark:text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Education</h3>
                    <p className="text-gray-600 dark:text-gray-400">B.Tech in Information Technology</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Adhiparasakthi Engineering College</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2023 - 2027</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="text-blue-600 dark:text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Interests</h3>
                    <p className="text-gray-600 dark:text-gray-400">Web Development, UI/UX Design, Application Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <Code className="text-blue-600 dark:text-cyan-400" size={24} />
                    <a href={project.link} className="text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-cyan-400 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <Award className="text-blue-600 dark:text-cyan-400 mb-4" size={32} />
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                I'm always open to discussing new projects, opportunities, or just having a chat about technology.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <ContactForm />
              </div>

              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    <a href="mailto:sakthivel@example.com" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-gray-600 transition-colors">
                        <Mail className="text-blue-600 dark:text-cyan-400" size={24} />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">sakthivel@example.com</p>
                      </div>
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-gray-600 transition-colors">
                        <Linkedin className="text-blue-600 dark:text-cyan-400" size={24} />
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Connect with me</p>
                      </div>
                    </a>

                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                      <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-gray-600 transition-colors">
                        <Github className="text-blue-600 dark:text-cyan-400" size={24} />
                      </div>
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Check out my projects</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-8 text-white shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Looking for collaboration?</h3>
                  <p className="text-blue-100 mb-4">
                    I'm currently available for internships, freelance projects, and exciting collaboration opportunities.
                  </p>
                  <p className="text-sm text-blue-100">
                    Expected response time: Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Sakthivel Murugan R. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
