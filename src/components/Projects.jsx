import React from "react";
import { Container, Typography, Box, Stack, Chip, Button, IconButton } from "@mui/material";
import { motion } from "framer-motion"; 
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const projects = [
  {
    title: "AI Resume Analyzer",
    category: "Natural Language Processing",
    description: "Architected an end-to-end pipeline using FastAPI and Spacy to parse high-density PDF structures into actionable recruitment data.",
    tech: ["React", "FastAPI", "NLP", "Python"],
    color: "#38bdf8"
  },
  {
    title: "Library Ecosystem",
    category: "Full Stack Architecture",
    description: "A centralized management system with high-concurrency handling for book transactions, featuring JWT-based security protocols.",
    tech: ["Python", "FastAPI", "MySQL", "Docker"],
    color: "#818cf8"
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Projects() {
  return (
    <Box 
      component="section" 
      id="projects" 
      sx={{ py: 20, bgcolor: "#020617", color: "#f8fafc", overflow: "hidden" }}
    >
      <Container maxWidth="lg">
        
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="overline" sx={{ color: "#38bdf8", fontWeight: 800, letterSpacing: 4 }}>
            02 / SELECTED WORKS
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, mb: 10, fontSize: { xs: "3rem", md: "5rem" } }}>
            Building the <br /> 
            <span style={{ color: "rgba(255,255,255,0.1)", WebkitTextStroke: "1px #f8fafc" }}>Future</span> of Web.
          </Typography>
        </motion.div>

        {/* Project List with Reveal Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Box
                sx={{
                  py: 6,
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { md: "center" },
                  justifyContent: "space-between",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.02)",
                    px: { md: 4 },
                    "& .project-arrow": { transform: "rotate(45deg)", color: "#38bdf8" }
                  }
                }}
              >
                {/* Info Side */}
                <Box sx={{ maxWidth: { md: "60%" } }}>
                  <Typography variant="caption" sx={{ color: project.color, fontWeight: 700, mb: 1, display: "block" }}>
                    {project.category}
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "1.75rem", md: "2.5rem" } }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#94a3b8", mb: 3, fontSize: "1.1rem" }}>
                    {project.description}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {project.tech.map(t => (
                      <Typography key={t} sx={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 700 }}>
                        // {t}
                      </Typography>
                    ))}
                  </Stack>
                </Box>

                {/* Actions Side */}
                <Stack direction="row" spacing={3} alignItems="center" sx={{ mt: { xs: 4, md: 0 } }}>
                  <IconButton sx={{ color: "#f8fafc", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <GitHubIcon />
                  </IconButton>
                  <Button
                    variant="text"
                    endIcon={<ArrowOutwardIcon className="project-arrow" sx={{ transition: "0.3s" }} />}
                    sx={{ color: "#f8fafc", fontWeight: 700, fontSize: "1.1rem", textTransform: "none" }}
                  >
                    View Project
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </Box>
  );
}