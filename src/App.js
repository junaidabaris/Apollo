import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./assets/css/style.css";
// import "./components/upgrade-member/member.css"
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";
import "./assets/css/project.css";

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
import AnalyticsPage from "./pages/tools&automationPage/analytics";
import WorkFlowsPage from "./pages/tools&automationPage/workFlows";
import FilterWf from "./components/tools&automation/workflows/workflowHeader/filterWf/FilterWf";
import TasksPage from "./pages/tools&automationPage/tasks";
import SequencePage from "./pages/engage/sequences";
import SequencesAdd from "./components/engage/sequences/sequencesAdd/SequencesAdd";
import EmailPage from "./pages/engage/emails";
import EmailAdd from "./components/engage/emails/emailsAdd/EmailAdd";
import MeatingPage from "./pages/meetings";
import PlayListPage from "./pages/playlists";
import PlaylistsAdd from "./components/playlists/playlistsAdd/PlaylistsAdd";
import SingnalPage from "./pages/idealCustomerProfile/signals";
import SignalsAdd from "./components/idealCustomerProfile/signals/signalsAdd/SignalsAdd";
import ScoringPage from "./pages/idealCustomerProfile/scoring";
import ScoringAdd from "./components/idealCustomerProfile/scoring/scoringAdd/ScoringAdd";
import PersonasPage from "./pages/idealCustomerProfile/personas";
import PersonasAdd from "./components/idealCustomerProfile/personas/personasAdd/PersonasAdd";
import AccountSegmentsPage from "./pages/idealCustomerProfile/accountSegments";
import NotificationsPage from "./pages/settingsPage/notifications";
import PermissionProfilesPage from "./pages/settingsPage/users&teams/permissionProfiles";
import TeamsPage from "./pages/settingsPage/users&teams/teams";
import UsersPage from "./pages/settingsPage/users&teams/users";
import ListPages from "./pages/Lists";
import CompaniesPage from "./pages/companies";
import PeoplesPage from "./pages/peoples";
import SequencePages from "./pages/sequense";
import ProfilePage from "./pages/profile";
import MailboxesPages from "./pages/Mailboxes";
import IntegrationsPages from "./pages/integrations";
import ContactsPages from "./pages/objects/contacts";
import AccountPages from "./pages/objects/accounts";
import DealsPages from "./pages/objects/deals";
import BillOfMaterials from "./pages/billOfMaterials";
import ApInvoice from "./pages/apInvoice/apInvoice";
import SalesAnalysisReport from "./pages/salesAnalysisReport";
import AnalysisQuarterly from "./pages/analysisQuarterly";
import ResourceCapacity from "./pages/resourceCapacity";
import ProjectServer from "./pages/projectServer";
import PurchaseDashboard from "./pages/purchasedashboard/index.js";
import BusinessPatner from "./pages/Bussniss/index.js";
import CrmDahboard from "./pages/crmdashboard/index.js";
import SecurityPage from "./pages/settingsPage/users&teams/security";
import PlaneOverviewPage from "./pages/settingsPage/billingPage/planeOverview/index.js";
import CreditUsagePage from "./pages/settingsPage/billingPage/creditUsage/index.js";
import ConfigurationPage from "./pages/prospectingPages/configurationPage/index.js";
import WebsiteVisitorsPage from "./pages/prospectingPages/websiteVisitorsPage/index.js";
import ContextsPage from "./pages/prospectingPages/contextsPage/index.js";
import TrackingSubdomainPage from "./pages/salesEngagementPages/trackingSubdomainPage/index.js";
import SequencesSalesEngagementPage from "./pages/salesEngagementPages/sequencesSalesEngagementPage/index.js";
import EditScheduletab from "./components/salesEngagementComps/sequencesSalesEngagement/EditScheduletab.js";

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
            <Route
              path="/"
              element={
                <Navigate to={`${window.localStorage.getItem("dashRout")}`} />
              }
            />
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
              <Route path="playlists-add" element={<PlaylistsAdd />} />
              <Route path="signals" element={<SingnalPage />} />
              <Route path="signals-add" element={<SignalsAdd />} />

              <Route path="list" element={<ListPages />} />
              <Route path="companies" element={<CompaniesPage />} />
              <Route path="peoples" element={<PeoplesPage />} />
              <Route path="sequences-edit/:id" element={<SequencePages />} />

              <Route path="profile" element={<ProfilePage />} />
              <Route path="mailboxes" element={<MailboxesPages />} />
              <Route path="integrations" element={<IntegrationsPages />} />
              <Route path="contacts/stages" element={<ContactsPages />} />
              <Route path="accounts/stages" element={<AccountPages />} />
              <Route path="settings/deals" element={<DealsPages />} />

              <Route path="scoring-models" element={<ScoringPage />} />
              <Route path="scoring-add" element={<ScoringAdd />} />
              <Route path="personas" element={<PersonasPage />} />
              <Route path="personas-add" element={<PersonasAdd />} />
              <Route path="account-segment" element={<AccountSegmentsPage />} />
              <Route path="*" element={<PageNotFound />} />

              {/* daud--route */}

              <Route path="analytics" element={<AnalyticsPage />} />
              <Route path="workflows" element={<WorkFlowsPage />} />
              <Route path="workflows/filterWF" element={<FilterWf />} />

              <Route path="tasks" element={<TasksPage />} />

              {/* --settings----25:01:25--- */}
              {/* --settings----25:01:25--- */}

              <Route path="Notifications" element={<NotificationsPage />} />
              <Route
                path="permissionProfiles"
                element={<PermissionProfilesPage />}
              />
              <Route path="teams" element={<TeamsPage />} />
              <Route path="users" element={<UsersPage />} />
              {/* meraj  */}

              <Route path="bill-materials" element={<BillOfMaterials />} />
              <Route path="ap-invoice" element={<ApInvoice />} />
              <Route path="sales-analysis" element={<SalesAnalysisReport />} />
              <Route
                path="analysis-quarterly"
                element={<AnalysisQuarterly />}
              />
              <Route path="resource-capacity" element={<ResourceCapacity />} />
              <Route path="project-server" element={<ProjectServer />} />

              {/* atif */}
              <Route path="purchasedashboard" element={<PurchaseDashboard />} />
              {/* <Route path="alerts" element={<Alerts />} /> */}
              <Route path="businesspatner" element={<BusinessPatner />} />

              <Route path="crm" element={<CrmDahboard />} />

              {/* apollo -settings--security-- 27:01:25-- */}

              <Route path="security" element={<SecurityPage />} />
              <Route path="plan-overview" element={<PlaneOverviewPage />} />

              <Route path="credit-usage" element={<CreditUsagePage />} />

              <Route path="configuration" element={<ConfigurationPage />} />
              <Route path="websiteVisitors" element={<WebsiteVisitorsPage />} />
              <Route path="contexts" element={<ContextsPage />} />
              <Route path="tracking-subdomains" element={<TrackingSubdomainPage />} />
              <Route path="salesEngagement/sequences" element={<SequencesSalesEngagementPage />} />
              <Route path="scheduletab/edit/:id" element={<EditScheduletab />} />

            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
