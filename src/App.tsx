    import React, { useState, useEffect } from 'react';
    import { Github, Linkedin, Mail, TowerControl as GameController, Code, Brain, Users, Zap, Award, BookOpen, ChevronDown } from 'lucide-react';
    import emailjs from 'emailjs-com';

    function App() {
      const [activeSection, setActiveSection] = useState('');
      const [isHovered, setIsHovered] = useState('');
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [emailSent, setEmailSent] = useState(false);

      const handleScroll = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const serviceId = 'service_905gynh';
        const templateId = 'template_75kx3ku';
        const userId = 'PDhZ06hwzdtNMKzSA';

        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
          .then((response) => {
            console.log('Email sent successfully!', response);
            setEmailSent(true);
            setName('');
            setEmail('');
            setMessage('');
          }, (error) => {
            console.error('Error sending email:', error);
            setEmailSent(false);
          });
      };

      useEffect(() => {
        const handleScrollChange = () => {
          const sections = ['about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
          let currentSection = '';

          const scrollPosition = window.scrollY;
          const sectionElements = sections.map(section => document.getElementById(section));

          for (let i = 0; i < sectionElements.length; i++) {
            const element = sectionElements[i];
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
                currentSection = sections[i];
                break;
              }
            }
          }
          setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScrollChange);
        return () => window.removeEventListener('scroll', handleScrollChange);
      }, []);

      return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
          {/* Navigation */}
          <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-center space-x-6">
                {['about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => handleScroll(section)}
                    className={`capitalize text-sm font-medium transition-colors
                      ${activeSection === section ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <header className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20" />
            <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center relative z-10">
              <div className="w-40 h-40 rounded-full gradient-bg mb-8 flex items-center justify-center animate-float">
                <GameController size={64} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text tracking-tight">Bhuvan Shetty</h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 tracking-wide">Game Developer & Software Engineer</h2>
              <p className="text-3xl md:text-4xl font-bold mb-12 gradient-text tracking-tight">
                Unlock Your Coding Potential
              </p>
              <ChevronDown 
                size={48} 
                className="animate-bounce text-blue-400 cursor-pointer"
                onClick={() => handleScroll('about')}
              />
            </div>
          </header>

          {/* About Section */}
          <section id="about" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
            <div className="container mx-auto px-4 relative">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text tracking-tight">About Me</h2>
              <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover">
                <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
                  Hi, I'm Bhuvan Shetty, a passionate Game Developer and Software Engineer specializing in Unity 3D, 
                  AI-driven gameplay, and multiplayer systems. With experience in developing optimized game mechanics, 
                  real-time multiplayer functionality, and cinematic animations, I bring creativity and technical 
                  expertise to every project.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text tracking-tight">Experience</h2>
              <div className="space-y-8 max-w-4xl mx-auto">
                {[
                  {
                    title: "Software Engineer I",
                    company: "Juego Studios, Bangalore",
                    period: "Oct 2024 – Present",
                    color: "blue",
                    achievements: [
                      { icon: Users, text: "Developed multiplayer features using SmartFox Server, supporting 100+ concurrent users." },
                      { icon: Zap, text: "Optimized 3D rendering pipelines, improving performance by 30%." },
                      { icon: Brain, text: "Integrated AI-driven NPC behaviors using Unity's NavMesh for realistic interactions." }
                    ]
                  },
                  {
                    title: "Trainee Software Engineer",
                    company: "Juego Studios, Bangalore",
                    period: "Aug 2023 – Sep 2024",
                    color: "purple",
                    achievements: [
                      { icon: Code, text: "Developed optimized game physics algorithms, improving accuracy by 25%." },
                      { icon: Zap, text: "Implemented dynamic UI elements using Unity UI Toolkit, reducing UI dev time by 30%." },
                      { icon: Brain, text: "Conducted performance profiling for mobile platforms, achieving a 20% frame rate boost." }
                    ]
                  },
                  {
                    title: "Intern Programmer",
                    company: "Juego Studios, Bangalore",
                    period: "Mar 2023 – Aug 2023",
                    color: "green",
                    achievements: [
                      { icon: Code, text: "Designed automated testing scripts, cutting regression testing time by 40%." },
                      { icon: Users, text: "Integrated analytics tools to track player behavior and improve UX." },
                      { icon: Zap, text: "Developed Unity Editor scripts to streamline asset import workflows, reducing setup time by 50%." }
                    ]
                  }
                ].map((job, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover"
                    onMouseEnter={() => setIsHovered(`job-${index}`)}
                    onMouseLeave={() => setIsHovered('')}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold gradient-text tracking-tight">{job.title}</h3>
                        <p className="text-gray-400 tracking-wide">{job.company}</p>
                      </div>
                      <span className="text-gray-400 tracking-wide">{job.period}</span>
                    </div>
                    <ul className="space-y-4">
                      {job.achievements.map((achievement, i) => (
                        <li 
                          key={i} 
                          className={`flex items-start transition-transform duration-300
                            ${isHovered === `job-${index}` ? 'translate-x-2' : ''}`}
                        >
                          <achievement.icon className={`mr-3 h-6 w-6 mt-1 text-${job.color}-400 flex-shrink-0`} />
                          <span className="text-gray-300 leading-relaxed tracking-wide">{achievement.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 relative bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text tracking-tight">Projects</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    title: "Image to Pencil Sketch",
                    tech: "Python, OpenCV, Google Colab",
                    points: [
                      "Developed an advanced image processing pipeline with OpenCV.",
                      "Implemented Gaussian filters to enhance the pencil sketch effect.",
                      "Achieved 96% accuracy in generating realistic sketches."
                    ]
                  },
                  {
                    title: "Custom Image Detection Using Unity 3D",
                    tech: "Python, C#, Unity, OpenCV",
                    points: [
                      "Built a cross-platform mobile app using Unity Engine.",
                      "Integrated YOLOv4 for advanced image recognition with 92% accuracy.",
                      "Combined machine learning with Unity development for real-world applications."
                    ]
                  }
                ].map((project, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover"
                    onMouseEnter={() => setIsHovered(`project-${index}`)}
                    onMouseLeave={() => setIsHovered('')}
                  >
                    <h3 className="text-2xl font-bold mb-4 gradient-text tracking-tight">{project.title}</h3>
                    <p className="text-gray-400 mb-4 tracking-wide">{project.tech}</p>
                    <ul className="space-y-3">
                      {project.points.map((point, i) => (
                        <li 
                          key={i}
                          className={`flex items-start transition-transform duration-300
                            ${isHovered === `project-${index}` ? 'translate-x-2' : ''}`}
                        >
                          <Code className="mr-3 h-5 w-5 mt-1 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed tracking-wide">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10"></div>
            <div className="container mx-auto px-4 relative">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text tracking-tight">Technical Skills</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "Programming",
                    icon: Code,
                    skills: ["C", "C#", "Java", "Python", "Basic SQL"],
                    color: "blue"
                  },
                  {
                    title: "Frameworks & Engines",
                    icon: Zap,
                    skills: ["Unity (Timeline, UI Toolkit)", ".NET", "REST API", "VR Development"],
                    color: "purple"
                  },
                  {
                    title: "Tools",
                    icon: Brain,
                    skills: ["Git", "Visual Studio", "SmartFoxServer", "Unity Editor Scripting", "Google Colab"],
                    color: "green"
                  },
                  {
                    title: "Expertise",
                    icon: Award,
                    skills: ["Game Development (2D/3D, AAA)", "AR/VR", "Multiplayer Systems", "Cinematic Animation"],
                    color: "pink"
                  }
                ].map((category, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 skill-card group"
                    onMouseEnter={() => setIsHovered(`skill-${index}`)}
                    onMouseLeave={() => setIsHovered('')}
                  >
                    <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-${category.color}-500/20`}>
                      <category.icon className={`h-8 w-8 text-${category.color}-400`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 gradient-text tracking-tight">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li 
                          key={i}
                          className={`text-gray-300 transition-all duration-300 tracking-wide
                            ${isHovered === `skill-${index}` ? 'translate-x-2' : ''}`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text tracking-tight">Certifications & Courses</h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  "Microsoft Undergraduate & Masters Asia Virtual Experience – InsideSherpa",
                  "Programming for Everybody (Python) – University of Michigan, Coursera",
                  "A Day in the Life of an RPA Developer – UiPath",
                  "Machine Learning Training – Internship Studio",
                  "Foundational C# – Microsoft, freeCodeCamp"
                ].map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 card-hover flex items-center space-x-4"
                  >
                    <Award className="text-blue-400 flex-shrink-0 h-8 w-8" />
                    <span className="text-gray-300 tracking-wide leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <footer id="contact" className="py-20 bg-black">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-12 gradient-text tracking-tight">Contact & Social Links</h2>
              <div className="flex justify-center space-x-12">
                {[
                  { icon: Mail, text: "Email", href: "mailto:heyybhuvan@gmail.com" },
                  { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/bhu1" },
                  { icon: Github, text: "GitHub", href: "https://github.com/BHUVANSHETTY9686" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center space-y-2 card-hover"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                      <link.icon className="h-8 w-8 text-gray-300 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="text-gray-300 group-hover:text-blue-400 transition-colors tracking-wide">{link.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </footer>

          {/* Message Field */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8 gradient-text tracking-tight">Send a Message</h2>
              <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover">
                {emailSent ? (
                  <p className="text-green-400 mb-4">Email sent successfully!</p>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                      type="text"
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <textarea
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                      rows={5}
                      placeholder="Your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      );
    }

    export default App;
