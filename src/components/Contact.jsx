import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Stack,
  Fade,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");

          // Reset the form fields after 2 seconds
          setTimeout(() => {
            form.current.reset();
            setStatus("idle");
          }, 5000); // Keep the success message visible for 5 seconds
        },
        (error) => {
          console.log(error.text);
          setStatus("error");

          // Allow them to try again after 3 seconds
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: 20, bgcolor: "#020617", color: "#fff", position: "relative" }}
    >
      {/* Subtle Background Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} justifyContent="center">
          {/* Header Area */}
          <Grid item xs={12} sx={{ textAlign: "center", mb: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="overline"
                sx={{ color: "#38bdf8", fontWeight: 800, letterSpacing: 4 }}
              >
                AVAILABILITY: OPEN FOR PROJECTS
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mt: 2,
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                }}
              >
                Get in <span style={{ color: "#38bdf8" }}>Touch.</span>
              </Typography>
              <Typography
                sx={{
                  color: "#94a3b8",
                  maxWidth: "600px",
                  mx: "auto",
                  fontSize: "1.1rem",
                }}
              >
                I respond to all inquiries within 24 hours. Let's discuss your
                next big idea.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="form"
                ref={form}
                onSubmit={sendEmail}
                sx={{
                  p: { xs: 4, md: 8 },
                  borderRadius: "40px",
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <Stack spacing={4}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <StyledInput
                        label="Your Name"
                        name="user_name"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledInput
                        label="Email Address"
                        name="user_email"
                        fullWidth
                        required
                        type="email"
                      />
                    </Grid>
                  </Grid>

                  <StyledInput label="Subject" name="subject" fullWidth />

                  <StyledInput
                    label="Message"
                    name="message"
                    fullWidth
                    multiline
                    rows={5}
                    required
                  />

                  <Box sx={{ textAlign: "center", pt: 2 }}>
                    <Button
                      type="submit"
                      disabled={status === "sending" || status === "success"}
                      variant="contained"
                      endIcon={
                        status === "success" ? (
                          <CheckCircleIcon />
                        ) : (
                          <SendIcon />
                        )
                      }
                      sx={{
                        px: 8,
                        py: 2,
                        borderRadius: "16px",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                        textTransform: "none",
                        boxShadow: "0 10px 30px rgba(56, 189, 248, 0.2)",
                        transition: "0.4s",
                        bgcolor: status === "success" ? "#22c55e" : "#38bdf8",
                        "&:hover": {
                          bgcolor: "#0ea5e9",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      {status === "sending"
                        ? "Dispatching..."
                        : status === "success"
                        ? "Sent Successfully"
                        : "Send Message"}
                    </Button>
                  </Box>

                  {/* Feedback Messages */}
                  <Fade in={status === "success" || status === "error"}>
                    <Box sx={{ mt: 2 }}>
                      {status === "success" && (
                        <Alert
                          severity="success"
                          sx={{
                            borderRadius: "12px",
                            bgcolor: "rgba(34,197,94,0.1)",
                            color: "#4ade80",
                            border: "1px solid rgba(34,197,94,0.2)",
                          }}
                        >
                          Thanks Sarvesh! Your message has been sent to the
                          cloud.
                        </Alert>
                      )}
                      {status === "error" && (
                        <Alert
                          severity="error"
                          sx={{
                            borderRadius: "12px",
                            bgcolor: "rgba(239,68,68,0.1)",
                            color: "#f87171",
                          }}
                        >
                          Something went wrong. Please try again later.
                        </Alert>
                      )}
                    </Box>
                  </Fade>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Fine-tuned Text Field Style
const StyledInput = (props) => (
  <TextField
    {...props}
    variant="standard"
    InputProps={{
      disableUnderline: true,
      sx: {
        borderRadius: "15px",
        color: "#fff",
        p: 2,
        bgcolor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        transition: "0.3s",
        "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
        "&.Mui-focused": {
          border: "1px solid #38bdf8",
          bgcolor: "rgba(255,255,255,0.06)",
        },
      },
    }}
    InputLabelProps={{
      shrink: true,
      sx: {
        color: "#38bdf8",
        fontWeight: 700,
        ml: 1,
        mb: 1,
        position: "relative",
        transform: "none",
      },
    }}
    sx={{ "& .MuiInputBase-root": { mt: 3 } }}
  />
);
