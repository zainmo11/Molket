import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Choose your AI-assisted Environment",
      content: "You can choose a JupyterHub-like environment or MolKet studio. Use MolKet's engine on your computer in Visual Studio or program it online on the web.",
      code: `import molket_engine as me 
import molket_visual as mv 
import molket_data as md 

# define the molecular structure 

# insert H2 molecule
molecule = me.Molecule('H_2')
# define the geometry of the molecule: example H2
molecule.geometry = [('H', (0, 0, 0)), ('H', (0, 0, 0.74))]`,
      isLeft: true
    },
    {
      title: "Type your code or drag and design your simulation",
      content: "Type your code in natural language, or choose from our library. Our AI-assistant will help you filling the code writing and suggest modules that you can use. Alternatively, you can design the simulation in a flow chart format.",
      code: `# create the Hamiltonian operator with the molecule and data structure 
H_op = me.Operator('H_2')
H_op.molecule = molecule
# define the electronic basis set
H_op.elec_basis = 'sto-3g'
# define the nuclear motion basis set, the vibrational basis set
H_op.nuc_basis = ('harmonic','Gaussian')`,
      isLeft: false
    },
    {
      title: "MolKet's AI engine will assist in selecting the algorithms and computing platforms",
      content: "Depending on the computational complexity and the type of each step in the simulation, MolKet's AI engine will choose the proper quantum/HPC architecture for you. It will also optimize the execution on each type of hardware by training the general Hamiltonians and map them onto quantum.",
      code: `# define the rotational basis set (wavefunctions), ...
# Default: spherical harmonics for linear molecules,
# and Wigner D-matrices for non-linear molecules.
H_op.rot_basis = ('Ylm')
# you can also define phase or choose real 
# harmonics depending on the symmetry of the molecule

# Define the chips for the computing part: 
# the choice of the hardware and the backend
H_op.Qchip = 'Qqx2' 
# variations of Qqx4: Qqx2, Qqx3, Qqx4, Qqx5,
# Qqx20, Qqx_qasm_simulator
## accelerated computing with GPU
H_op.HPCchip = 'GPU'`,
      isLeft: true
    },
    {
      title: "Get the results and post-processing using builtin ML and AI libraries",
      content: "Depending on the computational complexity and the type of each step in the simulation, MolKet's AI engine will choose the proper quantum/HPC architecture for you.",
      code: `# choose the simulators for the quantum and HPC backends,
# to be used in analysis as well 
H_op.Qbackend = 'statevector_simulator'
H_op.HPCbackend = 'local_qasm_simulator'
vib_groundstate_energy= H_op.vib_eigE('0','groundstate')
vib_WF0 = H_op.vib_eigW('0','groundstate')

#H = H_vib + H_rot + H_elec + H_nuc`,
      isLeft: false
    }
  ];

  return (
      <section id="how-it-works" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Does It Work?</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 hidden lg:block"></div>

            {steps.map((step, index) => (
                <div key={index} className="mb-16 last:mb-0">
                  <div
                      className={`flex flex-col lg:flex-row ${step.isLeft ? '' : 'lg:flex-row-reverse'} items-stretch lg:items-center`}
                  >
                    {/* Step content box */}
                    <motion.div
                        className={`w-full lg:w-1/2 ${step.isLeft ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0 min-w-0`}
                        initial={{ opacity: 0, x: step.isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                      <div className="p-6 rounded-lg bg-gray-800 h-full">
                        <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-300 mb-6">{step.content}</p>
                        <div className="overflow-x-auto rounded-md">
                          <SyntaxHighlighter
                              language="python"
                              style={vscDarkPlus}
                              customStyle={{
                                background: 'rgb(17 24 39 / var(--tw-bg-opacity))',
                                padding: '1rem',
                                fontSize: '0.85rem',
                              }}
                          >
                            {step.code}
                          </SyntaxHighlighter>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                          <button className="px-6 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto">
                            {index % 2 === 0 ? 'MolKet SDK' : 'Start Simulation'}
                          </button>
                          {index === 1 && (
                              <button className="px-6 py-2 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 transition-colors duration-300 w-full sm:w-auto">
                                MolKet Studio
                              </button>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Step number */}
                    <motion.div
                        className="w-10 h-10 rounded-full bg-blue-600 border-4 border-gray-900 z-10 mx-auto my-4 lg:my-0 flex items-center justify-center text-white font-bold"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Right spacer for layout balance on large screens */}
                    <div className="hidden lg:block lg:w-1/2"></div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;
