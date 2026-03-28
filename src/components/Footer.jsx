import React from "react";
import { Container, Typography, Box, Stack, IconButton, Divider, Link } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 8, 
        bgcolor: "#020617", 
        color: "#94a3b8", 
        borderTop: "1px solid rgba(255, 255, 255, 0.05)" 
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={4}
        >
          {/* Brand & Mission */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#fff", mb: 1 }}>
              SARVESH<span style={{ color: "#38bdf8" }}>.</span>S
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: "300px", lineHeight: 1.6 }}>
              Designing and developing high-performance digital solutions with a focus on scalability and user experience.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Stack direction="row" spacing={3}>
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                underline="none"
                sx={{ 
                  color: "#94a3b8", 
                  fontSize: "0.9rem", 
                  fontWeight: 600, 
                  transition: "0.3s",
                  "&:hover": { color: "#38bdf8" } 
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>

          {/* Back to Top Button */}
          <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
            <IconButton 
              onClick={scrollToTop}
              sx={{ 
                bgcolor: "rgba(255,255,255,0.03)", 
                color: "#38bdf8", 
                border: "1px solid rgba(56, 189, 248, 0.2)",
                p: 1.5
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </motion.div>
        </Stack>

        <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.05)" }} />

        <Stack 
          direction={{ xs: "column", md: "row" }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
        >
          <Typography variant="caption" sx={{ letterSpacing: 1 }}>
            © {new Date().getFullYear()} ALL RIGHTS RESERVED.
          </Typography>
          
          <Typography variant="caption" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            BUILT WITH 
            <Box component="span" sx={{ color: "#38bdf8", fontWeight: 800 }}>REACT</Box> 
            & 
            <Box component="span" sx={{ color: "#38bdf8", fontWeight: 800 }}>MUI</Box>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}