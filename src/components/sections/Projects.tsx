import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 180px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${theme.colors.glass.card}, transparent);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const projects = [
  {
    id: 1,
    title: "PI Proyect",
    description: "Este proyecto es una experiencia interactiva desarrollada con React, Three.js y @react-three/fiber, que busca explicar de manera visual y educativa algunas enfermedades del corazón. A través de modelos 3D realistas e información clara..",
    image: "/public/Images/Vite.png/400x200",
    techStack: ["React", "Vite", "3D", "UX/UI"],
    githubUrl: "https://github.com/camilo1210/PI-Proyect",
    liveUrl: "https://pi-proyect.vercel.app/",
  },
  {
    id: 2,
    title: "Django Proyect",
    description: "Este proyecto consiste en el desarrollo de un sistema de inventario para una panadería llamada Pan y Arte. El objetivo principal es llevar un control eficiente de las materias primas utilizadas en la producción, facilitando el registro, la actualización y el seguimiento del inventario en tiempo real..",
    image: "https://impulso06.com/wp-content/uploads/2023/11/Python-y-Django-Herramientas-esenciales-para-el-desarrollo-web-moderno.png/400x200",
    techStack: ["HTML5", "Django", "Python", "My SQL"],
    githubUrl: "https://github.com/camilo1210/ProyectoDjango",
    liveUrl: "",
  },

  {
    id: 3,
    title: "Proyecto Estadistica",
    description: "Este proyecto consiste en el desarrollo de un analisis estadistico sobre las ganacias y las perdidas sobre la panaderia Pan y Arte, haciendo su analisis en excel ademas de un pequeño codigo en Python mostrando sus estadistica.",
    image: "https://impulso06.com/wp-content/uploads/2023/11/Python-y-Django-Herramientas-esenciales-para-el-desarrollo-web-moderno.png/400x200",
    techStack: ["Excel", "Analisis De Datos", "Python",],
    githubUrl: "https://github.com/camilo1210/ProyectoDjango",
    liveUrl: "",
  },
{
    id: 4 ,
    title: "Sistema Bancario Simulacion",
    description: "Este sistema simula el funcionamiento básico de un banco, permitiendo al usuario realizar acciones como crear cuentas, consultar información, realizar operaciones financieras y gestionar su cuenta. El programa está diseñado con el paradigma de programación orientada a objetos (POO), utilizando clases que encapsulan comportamientos específicos del sistema bancario.",
    image: "https://impulso06.com/wp-content/uploads/2023/11/Python-y-Django-Herramientas-esenciales-para-el-desarrollo-web-moderno.png/400x200",
    techStack: ["POO", "C++", "Simulación",],
    githubUrl: "https://github.com/camilo1210/ProyectoDjango",
    liveUrl: "",
  },

];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleLiveClick = (event: React.MouseEvent<HTMLAnchorElement>, liveUrl: string) => {
    event.preventDefault(); // Evita la navegación inmediata
    if (!liveUrl) {
      alert("Este proyecto se implementó de manera local.");
    } else {
      window.open(liveUrl, '_blank', 'noopener,noreferrer'); // Abre la URL si existe
    }
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Featured Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <ProjectImage
                  imageUrl={project.image}
                  role="img"
                  aria-label={`Screenshot of ${project.title}`}
                />
                <ProjectContent>
                  <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub aria-hidden="true" />
                      <span className="sr-only">GitHub repository</span>
                    </a>
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.liveUrl ? `Visit ${project.title} live site` : `Este proyecto se implementó de manera local`}
                      onClick={(event) => handleLiveClick(event, project.liveUrl)}
                      style={{ pointerEvents: !project.liveUrl ? 'auto' : undefined }}
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                      <span className="sr-only">{project.liveUrl ? 'Live site' : 'Implementación local'}</span>
                    </a>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;