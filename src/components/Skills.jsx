import React, { useState } from "react";
import { Container, Typography, Box, Grid, Stack, IconButton, Divider } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import TerminalIcon from "@mui/icons-material/Terminal";
import LayersIcon from "@mui/icons-material/Layers";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    icon: <LayersIcon />,
    color: "#38bdf8",
    description: "Creating immersive, responsive user interfaces with modern React ecosystems.",
    tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MUI"]
  },
  {
    id: "backend",
    title: "Backend Systems",
    icon: <TerminalIcon />,
    color: "#818cf8",
    description: "Building high-concurrency APIs and robust server-side logic architectures.",
    tools: ["Python", "FastAPI", "Node.js", "RESTful APIs", "JWT Auth", "Pydantic"]
  },
  {
    id: "database",
    title: "Data Management",
    icon: <StorageIcon />,
    color: "#fb7185",
    description: "Designing scalable relational and document-based database schemas.",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLAlchemy", "Prisma"]
  },
  {
    id: "devops",
    title: "DevOps & Workflow",
    icon: <SettingsIcon />,
    color: "#34d399",
    description: "Streamlining deployment pipelines and maintaining development environments.",
    tools: ["Docker", "AWS", "Git/GitHub", "CI/CD", "Postman", "Linux/Bash"]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <Box component="section" id="skills" sx={{ py: 20, bgcolor: "#020617", color: "#f8fafc" }}>
      <Container maxWidth="lg">
        
        {/* Header with Neon Underline */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="overline" sx={{ color: "#38bdf8", fontWeight: 800, letterSpacing: 4 }}>
            TECH STACK
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, mt: 1 }}>
            Modern <span style={{ color: "rgba(255,255,255,0.2)" }}>Tooling.</span>
          </Typography>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            style={{ height: "4px", backgroundColor: "#38bdf8", marginTop: "16px", borderRadius: "2px" }}
          />
        </Box>

        <Grid container spacing={6}>
          {/* Left Side: Category Selection */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              {skillCategories.map((cat) => (
                <Box
                  key={cat.id}
                  component={motion.div}
                  onClick={() => setActiveTab(cat.id)}
                  onMouseEnter={() => setActiveTab(cat.id)}
                  whileHover={{ x: 10 }}
                  sx={{
                    p: 3,
                    cursor: "pointer",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: activeTab === cat.id ? "rgba(255,255,255,0.05)" : "transparent",
                    border: "1px solid",
                    borderColor: activeTab === cat.id ? cat.color : "transparent",
                    transition: "0.3s"
                  }}
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Box sx={{ color: activeTab === cat.id ? cat.color : "#64748b" }}>
                      {cat.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: activeTab === cat.id ? "#fff" : "#64748b" }}>
                      {cat.title}
                    </Typography>
                  </Stack>
                  <ArrowForwardIosIcon sx={{ fontSize: 14, opacity: activeTab === cat.id ? 1 : 0, color: cat.color }} />
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Right Side: Animated Tool Detail */}
          <Grid item xs={12} md={7}>
            <AnimatePresence mode="wait">
              <Box
                key={activeTab}
                component={motion.div}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                sx={{
                  p: { xs: 4, md: 6 },
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.02)",
                  borderRadius: "32px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)"
                }}
              >
                {skillCategories.filter(c => c.id === activeTab).map(current => (
                  <Box key={current.id}>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: current.color }}>
                      {current.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#94a3b8", mb: 6, fontSize: "1.2rem", lineHeight: 1.6 }}>
                      {current.description}
                    </Typography>
                    
                    <Divider sx={{ mb: 4, borderColor: "rgba(255,255,255,0.1)" }} />

                    <Grid container spacing={2}>
                      {current.tools.map((tool, index) => (
                        <Grid item xs={6} key={tool}>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: current.color }} />
                              <Typography sx={{ fontWeight: 600, color: "#f8fafc" }}>{tool}</Typography>
                            </Box>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </Box>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}