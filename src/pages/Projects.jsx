const projects = [
  {
    name: 'Personal Portfolio Website',
    description: 'Designed and developed a fully responsive personal website to showcase experiences, projects, and resume. Built using React, Tailwind CSS, and deployed with GitHub Pages. Automated deployment of website using GitHub Actions, enabling continuous deployment to GitHub Pages.',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'GitHub Pages',],
  },
  {
    name: 'Bookings.com - Web-based Room Booking System',
    description: 'Developed a full-stack room booking system using React, Express.js, TypeScript, Prisma, and PostgreSQL. Communicated effectively with the client to gather and validate requirements, ensuring alignment with project goals.',
    skills: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Prisma'],
  },
  {
    name: 'Presto - Web-based Presentation App',
    description: 'Worked on frontend development of a web-based presentation app in ReactJS, ensuring high standards of UI/UX and accessibility while interfacing with RESTful APIs developed by team members.',
    skills: ['React', 'JavaScript', 'UI/UX', 'REST API'],
  },
  {
    name: 'Treats - Backend JavaScript Server',
    description: 'Developed the backend server of a communication platform that allows students to collaborate virtually. Demonstrated effective use of static testing, dynamic testing, and user testing, alongside version control, CI, and deployment tooling.',
    skills: ['JavaScript', 'Testing', 'CI/CD', 'Version Control'],
  },
  {
    name: 'Soccer Droid',
    description: 'Designed and 3D printed custom robot components using CAD software. Integrated sensors for motion tracking and obstacle detection. Programmed and tested the robot using Arduino IDE for autonomous operation.',
    skills: ['Arduino', 'CAD', '3D Printing', 'Sensors', 'Robotics'],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1b] text-white py-10 px-20">
      <h2 className="text-2xl sm:text-5xl font-bold text-white mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1f1f2e] p-6 rounded-2xl shadow-lg hover:shadow-purple-400/40 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-purple-800 text-white px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
