import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

const sidebarNav: SidebarNavStruct = [
	{ title: "Introduction", type: "primary" },
	{ title: "Dashboard", type: "secondary" },
	{ filePath: "introduction/login", type: "inner", level: 0 },
	{ filePath: "introduction/projects", type: "inner", level: 0 },
	{ filePath: "introduction/nodes", type: "inner", level: 0 },

	{ filePath: "introduction/databases", type: "inner", level: 0 },
	{ filePath: "introduction/tables", type: "inner", level: 1 },
	{ filePath: "introduction/backup", type: "inner", level: 1 },

	{ filePath: "introduction/console", type: "inner", level: 0 },
	//{ filePath: "introduction/weblite", type: "inner", level: 1 },

	{ title: "Security", type: "inner", level: 0 },
	{ filePath: "introduction/users", type: "inner", level: 1 },
	{ filePath: "introduction/roles", type: "inner", level: 1 },
	{ filePath: "introduction/ip", type: "inner", level: 1 },
	{ filePath: "introduction/apikey", type: "inner", level: 1 },

	{ title: "Advanced", type: "inner", level: 0 },
	{ filePath: "introduction/analyzer", type: "inner", level: 1 },
	{ filePath: "introduction/webhooks", type: "inner", level: 1 },
	{ filePath: "introduction/edge_functions", type: "inner", level: 1 },
	{ filePath: "introduction/settings", type: "inner", level: 1 },
	
	//{ filePath: "introduction/plugins", type: "inner", level: 0 },
	//{ filePath: "introduction/commands", type: "inner", level: 0 },
	//{ filePath: "introduction/api", type: "inner", level: 0 },

	{ title: "Role-Based Access Control", type: "secondary" },
	{ filePath: "introduction/ac_intro", type: "inner", level: 0 },
	{ filePath: "introduction/ac_roles", type: "inner", level: 0 },
	{ filePath: "introduction/ac_privileges", type: "inner", level: 0 },
	
	{ title: "Pub/Sub", type: "secondary" },
	{ filePath: "introduction/pubsub_implementation", type: "inner", level: 0 },
	{ filePath: "introduction/pubsub_payload", type: "inner", level: 0 },
	{ title: "Commands", filePath: "commands/create-channel", type: "inner", level: 0 },
];

export default sidebarNav
