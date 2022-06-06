import React, { Fragment } from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import CheckYourEmail from "../pages/ForgotPassword/CheckYourEmail";
import SetNewPassword from "../pages/ForgotPassword/SetPassword";
import PasswordReset from "../pages/ForgotPassword/PasswordReset";
import UserInfo from "../pages/UserInfo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchResults from "../pages/SearchResults";
import ServiceProviderProfile from "../pages/ServiceProviderProfile";
import Payment from "../pages/Payment";
import Messages from "../pages/Messages";
import Blog from "../pages/Blog";
import JobHistory from "../pages/JobHistory";
import Dashboard from "../pages/Dashboard";
import ReferFriend from "../pages/ReferFriend";
import Verification from "../pages/Verification";
import CustomerSupport from "../pages/CustomerSupport";
import NotFound from "./NotFound";

const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default function AppRoutes() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search-results" element={<SearchResults />} />
            <Route
              path="service-provider-profile"
              element={<ServiceProviderProfile />}
            />
            <Route
              path="my-profile"
              element={<ServiceProviderProfile mode="edit" />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="earning" element={<Dashboard mode="earning" />} />
            <Route path="refer-friend" element={<ReferFriend />} />
            <Route path="verification" element={<Verification />} />
            <Route path="customer-support" element={<CustomerSupport />} />
            <Route path="billing-info" element={<Payment />} />
            <Route path="payment-options" element={<Payment />} />
            <Route path="chat" element={<Messages />} />
            <Route path="blog" element={<Blog />} />
            <Route path="job-history" element={<JobHistory />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" exact element={<Login />} />
          <Route path="/sign-up" exact element={<Signup />} />
          <Route path="/forgot-password" exact element={<ForgotPassword />} />
          <Route path="/check-your-email" exact element={<CheckYourEmail />} />
          <Route
            path="/create-new-password"
            exact
            element={<SetNewPassword />}
          />
          <Route path="/password-reset" exact element={<PasswordReset />} />
          <Route path="/user-info" exact element={<UserInfo />} />
        </Routes>
      </Fragment>
    </Router>
  );
}
