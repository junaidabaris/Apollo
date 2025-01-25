import Card from "./Card";

function CardsComp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Card
            name={"Free"}
            pera={
              "Explore the Apollo platform to find leads, manage pipeline & close deals."
            }
            price={"0"}
            p2={"."}
            arr={[
              "2 Sequences",
              "LinkedIn, Gmail & Salesforce Extension",
              "Basic Filters",
            ]}
          />
        </div>
        <div className="col-3">
          <Card
            name={"Basic"}
            pera={
              "Take prospecting, outreach & deal management to the next level."
            }
            price={"49"}
            p2={"Per user, per month Billed annually"}
            arr={[
              "2 Sequences",
              "LinkedIn, Gmail & Salesforce Extension",
              "Advanced Filters",
              "CRM Integrations",
              "Schedule Meetings",
              "6 Intent Topics & Intent Filters",
              "Enrichment for data & CRM",
            ]}
          />
        </div>
        <div className="col-3">
          <Card
            name={"Professional"}
            pera={
              "Optimize your sales process with multi-touch outreach, AI & automation."
            }
            price={"79"}
            p2={`Per user, per month
Billed annually`}
            arr={[
              "Unlimited Sequences",
              "LinkedIn, Gmail & Salesforce Extension",
              "Advanced Filters",
              "CRM Integrations",
              "Unlimited Round Robin Meetings",
              "6 Intent Topics & Intent Filters",
              "Enrichment for data & CRM",
              "US Dialer",
              "5 Mailboxes per user",
              "Automated Workflows",
              "AI Research Intelligence",
              "Call Recordings & AI Insights (4,000 mins)",
              "Pre-built Advanced Reports & Dashboards",
            ]}
          />
        </div>
        <div className="col-3">
          <Card
            name={"Organization"}
            pera={
              "Transform go-to-market with advanced tools, custom solutions & expert help."
            }
            price={"199"}
            p2={`Per user, per month (min 3 users)
Billed annually`}
            arr={[
              "Unlimited Sequences",
              "LinkedIn, Gmail & Salesforce Extension",
              "Advanced Filters",
              "CRM Integrations",
              "Unlimited Round Robin Meetings",
              "12 Intent Topics & Intent Filters",
              "Enrichment for data & CRM",
              "US Dialer & International Dialer",
              "15 Mailboxes per user",
              "Automated Workflows",
              "AI Research Intelligence",
              "Call Recordings & AI Insights (8,000 mins)",
              "Pre-built Advanced Reports & Dashboards",
              "Customizable Reports & Dashboards",
              "Advanced Security Configurations",
              "Single Sign-on (SSO)",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default CardsComp;
