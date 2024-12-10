import Image from "next/image";
import { Box, Container } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container className={styles.container}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        TEST
      </Box>
    </Container>
  );
}
