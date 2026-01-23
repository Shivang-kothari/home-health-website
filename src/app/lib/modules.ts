export type ModuleItem = {
  key: string;
  title: string;
  desc: string;
  icon?: string;
};

export const modules: ModuleItem[] = [
  { key: "staff-records", title: "Staff Records", desc: "Profiles, roles, contact details, and employment history in one place.", icon: "/file.svg" },
  { key: "credential-tracking", title: "Credential Tracking", desc: "Expiration tracking, renewals, and audit trails for required credentials.", icon: "/window.svg" },
  { key: "document-vault", title: "Document Vault", desc: "Collect, verify, store, and export documents with consistent naming.", icon: "/file.svg" },
  { key: "onboarding", title: "Onboarding Workflows", desc: "Checklists, reminders, and standardized steps for new hires.", icon: "/window.svg" },
  { key: "scheduling-support", title: "Scheduling Support", desc: "Eligibility and availability visibility to reduce last‑minute gaps.", icon: "/globe.svg" },
  { key: "payroll-exports", title: "Payroll Exports", desc: "Structured exports and reporting for payroll teams and accountants.", icon: "/globe.svg" },
  { key: "compliance-dashboard", title: "Compliance Dashboard", desc: "See what’s missing, expiring, or needs review—at a glance.", icon: "/window.svg" },
  { key: "role-based-access", title: "Role-Based Access", desc: "Permissions by role so teams see only what they need.", icon: "/file.svg" },
  { key: "reports", title: "Reports", desc: "Operational summaries and audit-ready reports for leadership.", icon: "/globe.svg" },
];

