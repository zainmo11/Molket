import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Youtube, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const Team: React.FC = () => {
  const { t } = useTranslation(); // Initialize translation functionality

  const teamMembers = [
    {
      name: t('team.founder_1.name'), // Fetch localized name
      title: t('team.founder_1.role'), // Fetch localized role
      image: "./taha_profile_bw_enhance_circle_wbackn.png",
      credentials: [
        t('team.founder_1.credentials.item_1'),
        t('team.founder_1.credentials.item_2'),
        t('team.founder_1.credentials.item_3'),
        t('team.founder_1.credentials.item_4'),
      ],
      talks: [
        {
          title: t('team.founder_1.talks.item_1'),
          url: "https://pretalx.com/juliacon2024/talk/U9NF3A/",
        },
        {
          title: t('team.founder_1.talks.item_2'),
          url: "https://meetings.aps.org/Meeting/MAR24/Session/LL03.3",
        },
        {
          title: t('team.founder_1.talks.item_3'),
          url:"https://www.youtube.com/watch?v=5yBo3Jb71so"
        }
      ],
      publications: [
        {
          title: t('team.founder_1.publications.item_1'),
          url: "https://meetings.aps.org/Meeting/MAR24/Session/LL03.3",
        },
        {
          title: t('team.founder_1.publications.item_2'),
          url: "https://doi.org/10.1063/5.0174787",
        },
      ],
      linkedin: "https://www.linkedin.com/in/tiselim/",
      github: "https://github.com/tahaselim",
    },
    {
      name: t('team.founder_2.name'),
      title: t('team.founder_2.role'),
      image: "./Alain_Chance-modified.png",
      credentials: [
        t('team.founder_2.credentials.item_1'),
        t('team.founder_2.credentials.item_2'),
        t('team.founder_2.credentials.item_3'),
        t('team.founder_2.credentials.item_4'),
        t('team.founder_2.credentials.item_5'),
        t('team.founder_2.credentials.item_6'),
        t('team.founder_2.credentials.item_7'),
      ],
      talks: [
        {
          title: t('team.founder_2.talks.item_1'),
          url: "https://pretalx.com/juliacon2024/talk/U9NF3A/",
        },
        {
          title: t('team.founder_2.talks.item_2'),
          url: "#",
        },
        {
          title: t('team.founder_1.talks.item_3'),
          url:"https://www.youtube.com/watch?v=5yBo3Jb71so"
        }
      ],
      publications: [
        {
          title: t('team.founder_2.publications.item_1'),
          url: "https://github.com/AlainChance/QPP-Alain",
        },
        {
          title: t('team.founder_2.publications.item_2'),
          url: "https://doi.org/10.1007/978-3-031-59619-3_12",
        },
        {
          title: t('team.founder_2.publications.item_3'),
          url: "https://www.amazon.com/Quantum-Chemistry-Computing-Curious-Illustrated/dp/1803243902"
        }
      ],
      linkedin: "https://www.linkedin.com/in/alainchance/",
      github: "https://github.com/AlainChance",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('team.title')} {/* Localized title */}
            </h2>
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
                  {/* Image container */}
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
                      <h4 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                        {t('team.founder_1.credentials.title')} {/* Localized credentials title */}
                      </h4>
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
                      <h4 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                        {t('team.founder_1.publications.title')} {/* Localized publications title */}
                      </h4>
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
                      <h4 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                        {t('team.founder_1.talks.title')} {/* Localized talks title */}
                      </h4>
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

                    <div className="mt-auto flex space-x-3">
                      <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full text-blue-600 transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5"/>
                      </a>
                      <a
                          href="https://www.youtube.com/channel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 hover:bg-red-100 rounded-full text-red-600 transition-colors duration-300"
                      >
                        <Youtube className="w-5 h-5"/>
                      </a>
                      <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer mt-2"
                      >
                        {t('team.founder_1.view_profile')} {/* Localized 'View Full Profile' link */}
                      </a>
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