import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Youtube, Award } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Taha Selim",
      title: "Directeur Général - General Manager",
      image: "./taha_profile_bw_enhance_circle_wbackn.png",
      credentials: [
        "Lecturer/Researcher (QC Education Officer), Amsterdam University of Applied Sciences",
        "MVP Founder Member QSECDEF",
        "PhD Quantum Theoretical & Computational Chemistry",
        "M.Sc. of Quantum physics, Lasers, & Materials"
      ],
      talks: [
        { title: "Co-speaker lightning talk Simulating quantum molecular dynamics with Julia at JuliaCon 2024", url: "https://pretalx.com/juliacon2024/talk/U9NF3A/" },
        { title: "Speaker, Carbon dioxide (CO2) as a quantum molecular sensor in protoplanetary disks, at APS March Meeting 2024", url: "https://meetings.aps.org/Meeting/MAR24/Session/LL03.3" },
        { title: "Speaker, Carbon dioxide (CO2) as a quantum molecular sensor in protoplanetary disks, at APS March Meeting 2024", url: "https://meetings.aps.org/Meeting/MAR24/Session/LL03.3" }
      ],
      publications: [
        { title: "Carbon dioxide (CO2) as a quantum molecular sensor in protoplanetary disks, at APS March Meeting 2024", url: "https://meetings.aps.org/Meeting/MAR24/Session/LL03.3" },
        { title: "State-to-state rovibrational transition rates for CO2 in the bend mode in collisions with He atoms, J. Chem. Phys., 159, 164310 (2023)", url: "https://doi.org/10.1063/5.0174787" }
      ],
      linkedin: "https://www.linkedin.com/in/tiselim/"
    },
    {
      name: "Alain Chancé",
      title: "Président - President",
      image: "./Alain_Chance-modified.png",
      credentials: [
        "Principal consultant with 30+ years experience in major management consulting firms",
        "MVP Founder Member QSECDEF",
        "IEEE Senior Member",
        "Society affiliate American Chemical Society (ACS)",
        "Member American Physical Society (APS)",
        "Qiskit Advocate & IBM Certified Associate Developer"
      ],
      talks: [
        { title: "Co-speaker lightning talk Simulating quantum molecular dynamics with Julia at JuliaCon 2024", url: "https://pretalx.com/juliacon2024/talk/U9NF3A/" },
        { title: "Keynote co-speaker \"Combining the power of AI with Quantum\" at the World Artificial Intelligence Cannes Festival (WAICF), Cannes, France, Feb. 9, 2024", url: "#" }
      ],
      publications: [
        { title: "QPP-Alain, repository of the conference paper Quantum Permutation Pad with Qiskit Runtime", url: "https://github.com/AlainChance/QPP-Alain" },
        { title: "Quantum Permutation Pad Corinthians, In: Femmam, S., Lorenz, P. (eds) Recent Advances in Communication Networks and Embedded Systems", url: "https://doi.org/10.1007/978-3-031-59619-3_12" }
      ],
      linkedin: "https://www.linkedin.com/in/alainchance/"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">MolKet Founders</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
          </motion.div>

          <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row"
                    variants={item}
                >
                  {/* Image container with gradient background */}
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center p-6">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full h-40 w-40 object-cover border-4 border-white shadow-lg"
                    />
                  </div>

                  {/* Content container */}
                  <div className="md:w-2/3 p-6 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.title}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase mb-2">Credentials</h4>
                      <ul className="space-y-1">
                        {member.credentials.map((credential, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {credential}
                            </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase mb-2">Publications</h4>
                      <ul className="space-y-1">
                        {member.publications.map((pub, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              <a href={pub.url} className="text-blue-600 hover:underline flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                {pub.title}
                              </a>
                            </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase mb-2">Talks</h4>
                      <ul className="space-y-1">
                        {member.talks.map((talk, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              <a href={talk.url} className="text-blue-600 hover:underline flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                {talk.title}
                              </a>
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* Buttons at the bottom */}
                    <div className="mt-auto flex space-x-3">
                      <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full text-blue-600 transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                          href="https://www.youtube.com/watch?v=C0rrzae7IGY"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 hover:bg-red-100 rounded-full text-red-600 transition-colors duration-300"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                      <a
                          href={`#${member.name.toLowerCase().replace(' ', '-')}-full-profile`}
                          className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full text-blue-600 transition-colors duration-300"
                      >
                        <Award className="w-5 h-5" />
                      </a>
                      <button
                          className="ml-auto text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                          onClick={() => window.open(`#${member.name.toLowerCase().replace(' ', '-')}-full-profile`, '_self')}
                      >
                        View Full Profile
                      </button>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Team;