import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

const sidebarNav: SidebarNavStruct = [
	{ title: "", type: "primary" },

	{ title: "Getting Started", type: "secondary" },
	{ title: "Introduction", filePath: "new-docs/index", type: "inner", level: 0 }, // should be index page for /docs and highlight "introduction" in nav
  // { title: "Core Concepts", filePath: "new-docs/core-concepts", type: "inner", level: 0 },
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
  // { title: "Server-side Commands", type: "inner", level: 0 },
  // { title: "API Keys", type: "inner", level: 1 },
  // { title: "Authentication", type: "inner", level: 1 },
  // { title: "Backups", type: "inner", level: 1 },
  // { title: "Cluster", type: "inner", level: 1 },
  // { title: "Database", type: "inner", level: 1 },
  // { title: "General", type: "inner", level: 1 },
  // { title: "IP Commands", type: "inner", level: 1 },
  // { title: "Log", type: "inner", level: 1 },
  // { title: "Plugin", type: "inner", level: 1 },
  // { title: "Privileges", type: "inner", level: 1 },
  // { title: "Pub/Sub", type: "inner", level: 1 },
  // { title: "Query Analyzer", type: "inner", level: 1 },
  // { title: "Roles", type: "inner", level: 1 },
  // { title: "Settings", type: "inner", level: 1 },
  // { title: "User", type: "inner", level: 1 },
  // { title: "Environment Variables", type: "inner", level: 1 },
  // { title: "CLI", type: "inner", level: 0 },
  // { title: "SDKs", type: "inner", level: 0 },

  
  
];

export default sidebarNav
