import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box, Stack, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <Stack direction="row" spacing={1}>
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button href={`#${item.toLowerCase()}`} sx={{ color: "#94a3b8", textTransform: "none", fontWeight: 600 }}>
                      {item}
                    </Button>
                  </motion.div>
                ))}
              </Stack>
            </Box>
            
            <IconButton sx={{ display: { md: "none" }, color: "#38bdf8" }} onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}