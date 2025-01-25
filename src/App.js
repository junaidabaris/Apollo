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
import ListPages from "./pages/Lists";
import CompaniesPage from "./pages/companies";
import PeoplesPage from "./pages/peoples";
import SequencePages from "./pages/sequense";
import ProfilePage from "./pages/profile";
import MailboxesPages from "./pages/Mailboxes";
import IntegrationsPages from "./pages/integrations";
import ContactsPages from "./pages/objects/contacts";
import AccountPages from "./pages/objects/accounts";


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

              <Route path="list" element={<ListPages />} />
              <Route path="companies" element={<CompaniesPage />} />
              <Route path="peoples" element={<PeoplesPage />} />
              <Route path="sequences-edit/:id" element={<SequencePages/>} />

              <Route path="profile" element={<ProfilePage />} />
              <Route path="mailboxes" element={<MailboxesPages />} />
              <Route path="integrations" element={<IntegrationsPages />} />
              <Route path="contacts/stages" element={<ContactsPages />} />
              <Route path="accounts/stages" element={<AccountPages />} />
              
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
