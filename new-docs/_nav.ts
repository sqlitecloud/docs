import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

const sidebarNav: SidebarNavStruct = [
	{ title: "", type: "primary" },

	{ title: "Getting Started", type: "secondary" },
	{ title: "Introduction", filePath: "new-docs/index", type: "inner", level: 0 }, // should be index page for /docs and highlight "introduction" in nav
  // { title: "Core Concepts", filePath: "new-docs/core-concepts", type: "inner", level: 0 }, // should remove new-docs
  { title: "Quick Start Guides", type: "inner", level: 0},
  { title: "React", filePath: "new-docs/quick-start-react", type: "inner", level: 1 },

  { title: "Database" , type: "secondary" },
  // { title: "Fundamentals", type: "inner", level: 0 },
  // { title: "Connecting", type: "inner", level: 1 },
  // { title: "Importing data", type: "inner", level: 1 },
  // { title: "Transactions", type: "inner", level: 1 },
  // { title: "Backups", type: "inner", level: 0 },
  // { title: "Storage", type: "inner", level: 0 },
  // { title: "Partitioning", type: "inner", level: 0 },
  // { title: "Extensions", type: "inner", level: 0 },

  { title: "Platform" , type: "secondary" },
  // { title: "Overview", type: "inner", level: 0 },
  // { title: "Scaling", type: "inner", level: 0 },
  // { title: "Security", type: "inner", level: 0 },
  // { title: "Edge Functions", type: "inner", level: 0 },
  // { title: "Webhooks", type: "inner", level: 0 },
  // { title: "Pub/Sub", type: "inner", level: 0 },
  // { title: "Query Analyzer", type: "inner", level: 0 },

  { title: "Reference" , type: "secondary" },
  { title: "Server-side Commands", type: "inner", filePath: "new-docs/server-side-commands", level: 0 },
  { title: "API Keys", filePath: "new-docs/api-key-commands", type: "inner", level: 1 },
  { title: "Authentication", filePath: "new-docs/auth-commands", type: "inner", level: 1 },
  { title: "Backups", filePath: "new-docs/backup-commands", type: "inner", level: 1 },
  { title: "Cluster", filePath: "new-docs/cluster-commands", type: "inner", level: 1 },
  { title: "Database", filePath: "new-docs/database-commands", type: "inner", level: 1 },
  { title: "General Info", filePath: "new-docs/general-commands", type: "inner", level: 1 },
  { title: "IP", filePath: "new-docs/ip-commands", type: "inner", level: 1 },
  { title: "Logs", filePath: "new-docs/log-commands", type: "inner", level: 1 },
  { title: "Plugins",filePath: "new-docs/plugin-commands", type: "inner", level: 1 },
  { title: "Privileges", filePath: "new-docs/privilege-commands", type: "inner", level: 1 },
  { title: "Pub/Sub", filePath: "new-docs/pub-sub-commands", type: "inner", level: 1 },
  { title: "Query Analyzer", filePath: "new-docs/query-analyzer-commands", type: "inner", level: 1 },
  { title: "Roles", filePath: "new-docs/role-commands", type: "inner", level: 1 },
  { title: "Settings", filePath: "new-docs/settings-commands", type: "inner", level: 1 },
  // { title: "User", type: "inner", level: 1 },
  // { title: "Environment Variables", type: "inner", level: 1 },
  // { title: "CLI", type: "inner", level: 0 },
  // { title: "SDKs", type: "inner", level: 0 },
];

export default sidebarNav
