import { motion } from "framer-motion";
import { Container, Typography, Box, Stack, IconButton, Button, Tooltip, Grid } from "@mui/material";

export default function Hero() {
  return (
    <Box component="section" sx={{ minHeight: "90vh", display: "flex", alignItems: "center", bgcolor: "#020617", color: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
              <motion.div transition={{ duration: 0.5 }}>
                 <Typography variant="overline" sx={{ color: "#38bdf8", fontWeight: 800 }}>FULL STACK DEVELOPER</Typography>
              </motion.div>
              <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: "3.5rem", md: "5rem" } }}>
                I build <span style={{ color: "#38bdf8" }}>digital</span> excellence.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button variant="contained" size="large" sx={{ borderRadius: "12px", px: 4 }}>View Work</Button>
              </Stack>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* <Box component="img" src="YOUR_IMAGE_URL" sx={{ width: "100%", filter: "drop-shadow(0 0 30px rgba(56,189,248,0.2))" }} /> */}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}