import { ProjectCard } from './ProjectCard'
import { motion } from 'framer-motion'
import { PROJECTS } from './data/projectsData'

export default function Projects() {
    return (
        <section className='container mx-auto px-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='text-4xl mb-8 text-center cursor-default'>
                    Projetos
            </motion.h1>

            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        webUrl={project.webUrl}
                        gitUrl={project.gitUrl}
                    />
                ))}
            </motion.div>
        </section>
    )
}