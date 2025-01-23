import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./assets/css/style.css";
// import "./components/upgrade-member/member.css"
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.min.css';
// import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";
import "./assets/css/project.css"

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setIsLogin } from "./slice/auth";
import { getToken2 } from "./utils/localStorage";
import LoginPage from "./pages/login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LoginPasswordReset from "./pages/paswordResetPages";
import PrivateRoute from "./privateRote/PrivateRoute";
import DasBoardRight from "./pages/dasBoardRight/DasBoardRight";
import DashboardLeadPage from "./pages/Dashboard-Lead/Index";
import PageNotFound from "./common/pageNotFound/PageNotFound";
import PlansPage from "./pages/plans";
import CreateDeal from "./pages/createDeal";
import ListDeal from "./pages/listDeal";
import ListDealEdit from "./pages/listDealEdit";
import SequencePage from "./pages/engage/sequences";
import SequencesAdd from "./components/engage/sequences/sequencesAdd/SequencesAdd";
import EmailPage from "./pages/engage/emails";
import EmailAdd from "./components/engage/emails/emailsAdd/EmailAdd";
import MeatingPage from "./pages/meetings";
import PlayListPage from "./pages/playlists";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log(getToken());
    // requestPermissions()
    if (getToken2()) {
      dispatch(setIsLogin({ isLogin: true }));
      navigate(location?.pathname);
    }

  }, []);

  useEffect(() => {
    setIsAuthenticated(isLogin);

  }, [isLogin]);



  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/loginPage"} />} />  */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to={"/loginPage"} />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<LoginPasswordReset />} />
            <Route path="*" element={<Navigate to="/loginPage" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to={`${window.localStorage.getItem('dashRout')}`} />} />
            {/* <Route path="/" element={<Navigate to={`/admin`} />} /> */}
            <Route
              path=""
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              {/* <Route path={`${location?.pathname}`} element={<DasBoardRight />} /> */}
              <Route path={`contest_dashboard`} element={<DasBoardRight />} />
              <Route path={`lead_dashboard`} element={<DashboardLeadPage />} />

              {/* junaid */}
              <Route path="plans/list" element={<PlansPage />} />
              <Route path="deal/create" element={<CreateDeal />} />
              <Route path="deals/list" element={<ListDeal />} />
              <Route path="deals/edit/:id" element={<ListDealEdit />} />
              <Route path="sequences" element={<SequencePage />} />
              <Route path="sequences-add" element={<SequencesAdd />} />
              <Route path="email" element={<EmailPage />} />
              <Route path="email-add" element={<EmailAdd />} />
              <Route path="meetings" element={<MeatingPage />} />
              <Route path="playlists" element={<PlayListPage />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
