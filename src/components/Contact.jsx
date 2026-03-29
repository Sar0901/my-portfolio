import React, { useRef, useState } from "react";
import { Container, Typography, Box, Grid, TextField, Button, Stack, Fade, Alert } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("success");
      setTimeout(() => {
        form.current.reset();
        setStatus("idle");
      }, 5000);
    }, () => {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    });
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ 
        py: { xs: 8, md: 15 }, 
        bgcolor: "#020617", 
        color: "#fff", 
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="md"> {/* Changed to 'md' for a tighter, cleaner form width */}
        <Grid container spacing={4} justifyContent="center">
          
          <Grid item xs={12} sx={{ textAlign: "center", mb: 2 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Get in <span style={{ color: "#38bdf8" }}>Touch.</span>
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: "24px",
                bgcolor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Using Stack instead of complex Grids ensures perfect vertical alignment on mobile */}
              <Stack spacing={3}>
                
                {/* Name & Email Group */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                  <StyledInput label="Your Name" name="user_name" fullWidth required />
                  <StyledInput label="Email Address" name="user_email" fullWidth required type="email" />
                </Stack>

                <StyledInput label="Subject" name="subject" fullWidth />

                <StyledInput label="Message" name="message" fullWidth multiline rows={4} required />

                <Button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  variant="contained"
                  fullWidth
                  endIcon={status === "success" ? <CheckCircleIcon /> : <SendIcon />}
                  sx={{
                    py: 2,
                    borderRadius: "12px",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "1rem",
                    bgcolor: status === "success" ? "#22c55e" : "#38bdf8",
                    "&:hover": { bgcolor: "#0ea5e9" },
                  }}
                >
                  {status === "sending" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
                </Button>

                <Fade in={status === "success" || status === "error"}>
                  <Box>
                    {status === "success" && (
                      <Alert severity="success" sx={{ borderRadius: "10px" }}>Message sent successfully!</Alert>
                    )}
                    {status === "error" && (
                      <Alert severity="error" sx={{ borderRadius: "10px" }}>Error! Please try again.</Alert>
                    )}
                  </Box>
                </Fade>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const StyledInput = (props) => (
  <TextField
    {...props}
    variant="standard"
    InputProps={{
      disableUnderline: true,
      sx: {
        borderRadius: "12px",
        color: "#fff",
        p: 2,
        bgcolor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        fontSize: "1rem", // Fixed font size for alignment
        width: "100%",    // Forces uniformity
        "&.Mui-focused": { border: "1px solid #38bdf8", bgcolor: "rgba(255,255,255,0.07)" },
      },
    }}
    InputLabelProps={{
      shrink: true,
      sx: { 
        color: "#38bdf8", 
        fontWeight: 700, 
        textTransform: "uppercase", 
        fontSize: "0.75rem", 
        letterSpacing: 1,
        mb: 1, 
        position: "relative", 
        transform: "none" 
      },
    }}
    sx={{ 
      "& .MuiInputBase-root": { mt: 0.5 },
      width: "100%" 
    }}
  />
);