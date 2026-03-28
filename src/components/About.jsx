import React from "react";
import { Container, Typography, Box, Grid, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";

const skills = ["React.js", "FastAPI", "Python", "MySQL", "TypeScript", "Node.js", "AWS", "UI/UX"];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 12, md: 20 },
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* 1. Animated Watermark Background */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ position: "absolute", top: "10%", left: "-5%", zIndex: 0 }}
      >
        <Typography
          sx={{
            fontSize: { xs: "5rem", md: "12rem" },
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            userSelect: "none",
            whiteSpace: "nowrap"
          }}
        >
          DEVELOPER
        </Typography>
      </motion.div>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="flex-start">
          
          {/* 2. Left Side: Heading with Line Reveal */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative", mb: 4 }}>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  left: 0,
                  width: "4px",
                  backgroundColor: "#38bdf8",
                }}
              />
              <Box sx={{ pl: 3 }}>
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                  <Typography variant="overline" sx={{ color: "#38bdf8", fontWeight: 800, letterSpacing: 3 }}>
                    01. DISCOVER
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: "3rem", md: "4rem" },
                      lineHeight: 1,
                      mt: 1
                    }}
                  >
                    About <br />
                    <span style={{ color: "#38bdf8" }}>Me.</span>
                  </Typography>
                </motion.div>
              </Box>
            </Box>
            
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
              <Typography sx={{ color: "#94a3b8", fontSize: "1.1rem", mb: 4, maxWidth: "400px" }}>
                I don't just write code; I architect digital experiences that are 
                efficient by design and beautiful by default.
              </Typography>
            </motion.div>

            {/* 3. Staggered Skill Chips */}
            <Typography variant="subtitle2" sx={{ mb: 2, color: "#f8fafc", fontWeight: 700 }}>
              CORE SPECIALTIES:
            </Typography>
            <Stack component={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" direction="row" flexWrap="wrap" gap={1.5}>
              {skills.map((skill) => (
                <motion.div key={skill} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Chip 
                    label={skill} 
                    sx={{ 
                      bgcolor: "rgba(56, 189, 248, 0.1)", 
                      color: "#38bdf8", 
                      fontWeight: 600,
                      borderRadius: "6px",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                      cursor: "pointer",
                      "&:hover": { bgcolor: "#38bdf8", color: "#0f172a" }
                    }} 
                  />
                </motion.div>
              ))}
            </Stack>
          </Grid>

          {/* 4. Right Side: Content Reveal */}
          <Grid item xs={12} md={7}>
            <Box 
              component={motion.div} 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{ mt: { md: 10 } }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#f8fafc", fontWeight: 400, lineHeight: 1.6, mb: 4, fontStyle: "italic" }}
              >
                "The best code is the one that solves a business problem while 
                remaining invisible to the end user."
              </Typography>

              <Typography sx={{ color: "#94a3b8", fontSize: "1.15rem", lineHeight: 1.9, mb: 3 }}>
                I am <strong style={{ color: "#f8fafc" }}>Sarvesh</strong>. My journey as a 
                Full Stack Developer is driven by a simple goal: **Scale**. 
              </Typography>

              <Typography sx={{ color: "#94a3b8", fontSize: "1.15rem", lineHeight: 1.9 }}>
                I bridge the gap between heavy data processing and human-centric design. 
                Based in Coimbatore, I work with global standards to ensure your next 
                digital product is 100% future-proof.
              </Typography>

              {/* 5. Animated Focus Box */}
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box sx={{ mt: 6, p: 3, bgcolor: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                   <Typography variant="body2" sx={{ color: "#38bdf8", fontWeight: 700 }}>
                      CURRENT FOCUS:
                   </Typography>
                   <Typography variant="body1" sx={{ color: "#f8fafc" }}>
                      Advanced Microservices & AI-Integrated Web Apps
                   </Typography>
                </Box>
              </motion.div>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}