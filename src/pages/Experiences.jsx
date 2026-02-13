const ExperienceCard = ({ title, roles }) => (
  <div className="bg-[#1a1a2e] text-white rounded-xl p-6 mb-8 shadow-lg">
    <h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
    {roles.map((role, index) => (
      <div key={index} className="mb-4">
        <div className="flex items-start gap-2">
          <div className="flex justify-between w-full">
            <div>
              <h4 className="font-semibold text-white">{role.company}</h4>
              <p className="text-sm text-gray-400">{role.location}</p>
            </div>
            <p className="text-sm text-gray-300 whitespace-nowrap">{role.duration}</p>
          </div>
        </div>
        {role.description && (
          <ul className="list-disc list-inside mt-2 text-gray-300 text-sm">
            {role.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

const Experiences = () => {
  return (
    <div className="bg-[#0f0f1b] min-h-screen px-4 sm:px-16 py-12 text-white">
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-10">Work Experiences</h2>
      <ExperienceCard
        title="Fullstack Software Engineer Intern"
        roles={[
          {
            company: 'Displayr',
            location: 'Sydney, Australia',
            duration: 'Dec 2025 - Current',
            description: [
              'Developed and maintained full-stack features using C#, TypeScript and React.',
              'Built and maintained backend services using .NET, Entity Framework and LINQ, integrating with relational databases.',
              'Wrote and optimised SQL queries to support application features and data workflows.',
              'Collaborated closely with designers, engineers and the product manager to plan features, refine requirements and deliver project milestones.',
              'Participated in sprint planning, code reviews and team discussions to improve code quality and delivery processes.'
            ]
          }
        ]}
      />
      <ExperienceCard
        title="Undergraduate Domain Engineer"
        roles={[
          {
            company: 'Telstra',
            location: 'Sydney, Australia',
            duration: 'Feb 2024 - Current',
            description: [
              'Analysed and corrected data errors within the Digital Video Network, improving quality assurance and data integrity.',
              'Collaborated with teams in an agile environment to update data processing and error detection SQL scripts.',
              'Designed a network inventory database and created API endpoints for various microservices using JavaScript and MongoDB.'
            ]
          }
        ]}
      />
			<ExperienceCard
        title="Casual Academic"
        roles={[
          {
            company: 'University of New South Wales',
            location: 'Sydney, Australia',
            duration: 'Sep 2024 - Current',
            description: [
              'Tutor for five undergraduate courses in programming (OOP, Java, C++) and engineering.',
              'Managed and led classes of engineering students, guiding them through core concepts and practical applications.',
              'Fostered a supportive and interactive learning environment.'
            ]
          }
        ]}
      />

      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-10">Clubs and Teams</h2>
      <ExperienceCard
        title="Executive Member"
        roles={[
          {
            company: 'UNSW Mechatronics Society',
            location: 'Sydney, Australia',
            duration: 'Jan 2023 - Dec 2023',
            description: [
              'Ensured the smooth operation of the society by overseeing events, workshops, and projects run by the society.',
              'Worked collaboratively with other executive members to develop and execute strategies to promote the society and attract new members.',
              'Coordinated with external stakeholders and professionals to establish partnerships and secure funding.'
            ]
          }
        ]}
      />
			<ExperienceCard
        title="Software Engineer"
        roles={[
          {
            company: 'UNSW Connected Health Team',
            location: 'Sydney, Australia',
            duration: 'Jan 2023 - Dec 2023',
            description: [
              'Developed machine learning models to identify cancerous oral lesions for oral cancer removal using Python and MATLAB.'
            ]
          }
        ]}
      />

      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-10">Events</h2>
      <ExperienceCard
        title="Women in Engineering Program Participant"
        roles={[
          {
            company: 'IMC Trading',
            location: 'Sydney, Australia',
            duration: 'Apr 2024',
            description: [
              'Introduction to trading through workshops and industry talks.',
        			'Collaborated in a coding competition to design and implement a trading bot in Python that leveraged arbitrage strategies across simulated markets.'
            ]
          }
        ]}
      />
			<ExperienceCard
        title="INSIGHT Program Participant"
        roles={[
          {
            company: 'Jane Street',
            location: 'Hong Kong',
            duration: 'Jan 2024',
            description: [
              'Explored algorithmic trading and quantitative finance through hands-on activities and seminars.',
        'Participated in logic puzzles, probability games, and mock trading simulations to develop intuition for market making and arbitrage.'
            ]
          }
        ]}
      />
			<ExperienceCard
        title="Discover Program Participant"
        roles={[
          {
            company: 'Citadel',
            location: 'Sydney, Australia',
            duration: 'Aug 2023',
            description: [
              'Gained exposure to the fundamentals of trading and quantitative research through speaker sessions and simulations.'
            ]
          }
        ]}
      />
    </div>
  );
};

export default Experiences;
