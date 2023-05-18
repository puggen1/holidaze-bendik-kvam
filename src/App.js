import Layout from "./components/layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { ThemeProvider } from "@mui/material";
import { antDTheme, theme } from "./theme/theme";
import "./theme/style.css";
import User from "./pages/user";
import Venue from "./pages/venue";
import EditVenue from "./pages/venue/editVenue";
import Booking from "./pages/booking";
import UserBookings from "./pages/user/userBookings";
import UserVenues from "./pages/user/userVenues";
import Admin from "./pages/adminPanel";
import AdminPanelVenues from "./pages/adminPanel/adminPanelVenues";
import AdminPanelBookings from "./pages/adminPanel/adminPanelBookings";
import NotFound from "./pages/notFound";
import Modal from "./context/modalContext";
import OuterModal from "./components/modal";
import { ConfigProvider } from "antd";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";
import AddVenue from "./pages/venue/addVenue";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={antDTheme}>
        <BrowserRouter>
          <Modal>
            <OuterModal />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking/:id" element={<Booking />} />
                <Route path="/venue/:id" element={<Venue />} />
                <Route path="/venue/add" element={<AddVenue />} />
                <Route path="/venue/:id/edit" element={<EditVenue />} />
                <Route path="/user/:name" element={<User />} />
                <Route path="/user/:name/bookings" element={<UserBookings />} />
                <Route path="/user/:name/venues" element={<UserVenues />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/venues" element={<AdminPanelVenues />} />
                <Route
                  path="/admin/bookings"
                  element={<AdminPanelBookings />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Modal>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
