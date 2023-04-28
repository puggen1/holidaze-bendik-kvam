import Layout from "./components/layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import "./theme/style.css"
function App() {
  return (
    <ThemeProvider theme={theme}>
            <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/booking/:id" element={<div>booking</div>}/>
            <Route path="/venue/:id" element={<div>venue</div>}/>
            <Route path="/venue/:id/edit" element={<div>edit venue</div>}/>
            <Route path="/user/:name" element={<div>user</div>}/>
            <Route path="/user/:name/bookings" element={<div>users' bookings</div>}/>
            <Route path="/user/:name/venues" element={<div>users' venues</div>}/>
            <Route path="/admin" element={<div>admin</div>}/>
            <Route path="/admin/venues" element={<div>admin venues</div>}/>
            <Route path="/admin/venues/:id" element={<div>admin venues single</div>}/>
            <Route path="/admin/bookings" element={<div>admin bookings</div>}/>
            <Route path="/admin/bookings/:id" element={<div>admin bookings single</div>}/>
            <Route path="*" element={<div>404 not found</div>}/>
          </Routes>
      </Layout>
   </BrowserRouter>
</ThemeProvider>
  );
}

export default App;
