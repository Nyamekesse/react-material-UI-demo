import Add from "./components/Add";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import Feed from "./components/Feed";
import { Navbar } from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
