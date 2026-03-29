import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box, Stack, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Added for better UX

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <AppBar 
        position="sticky" 
        sx={{
          backgroundColor: "rgba(2, 6, 23, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "#38bdf8" }}>
              Sarvesh S
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <Stack direction="row" spacing={1}>
                {navItems.map((item) => (
                  <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      href={`#${item.toLowerCase()}`} 
                      sx={{ color: "#94a3b8", textTransform: "none", fontWeight: 600, "&:hover": { color: "#38bdf8" } }}
                    >
                      {item}
                    </Button>
                  </motion.div>
                ))}
              </Stack>
            </Box>
            
            {/* Hamburger Icon */}
            <IconButton 
              sx={{ display: { md: "none" }, color: "#38bdf8" }} 
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* --- MOBILE DRAWER ADDED BELOW --- */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: "70%",
            backgroundColor: "#020617", // Matches your theme
            backgroundImage: "none",
            color: "#fff",
            p: 3
          }
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#38bdf8" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding sx={{ mb: 2 }}>
              <ListItemButton 
                component="a" 
                href={`#${item.toLowerCase()}`} 
                onClick={handleDrawerToggle} // Closes drawer after clicking
                sx={{ 
                  borderRadius: "12px",
                  "&:hover": { bgcolor: "rgba(56, 189, 248, 0.1)" }
                }}
              >
                <ListItemText 
                  primary={item} 
                  primaryTypographyProps={{ 
                    fontSize: "1.2rem", 
                    fontWeight: 800, 
                    color: "#f8fafc" 
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </motion.div>
  );
}