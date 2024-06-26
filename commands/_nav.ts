import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

const sidebarNav: SidebarNavStruct = [
	{ title: "Commands", type: "primary" },
	{ title: "API KEY", type: "secondary" },
	{ filePath: "commands/create-apikey-user", type: "inner", level: 0 },
	{ filePath: "commands/list-apikeys", type: "inner", level: 0 },
	{ filePath: "commands/list-my-apikeys", type: "inner", level: 0 },
	{ filePath: "commands/remove-apikey", type: "inner", level: 0 },
	{ filePath: "commands/set-apikey", type: "inner", level: 0 },
	{ title: "AUTHENTICATION", type: "secondary" },
	{ filePath: "commands/auth-user", type: "inner", level: 0 },
	{ title: "BACKUP", type: "secondary" },
	{ filePath: "commands/apply-backup-settings", type: "inner", level: 0 },
	{ filePath: "commands/list-backup-settings", type: "inner", level: 0 },
	{ filePath: "commands/list-backups", type: "inner", level: 0 },
	{ filePath: "commands/list-backups-database", type: "inner", level: 0 },
	{ filePath: "commands/restore-backup-database", type: "inner", level: 0 },
	{ title: "CLUSTER", type: "secondary" },
	{ filePath: "commands/get-leader", type: "inner", level: 0 },
	{ filePath: "commands/list-nodes", type: "inner", level: 0 },
	{ filePath: "commands/transfer-leadership-to-node", type: "inner", level: 0 },
	{ title: "DATABASE", type: "secondary" },
	{ filePath: "commands/create-database", type: "inner", level: 0 },
	{ filePath: "commands/decrypt-database", type: "inner", level: 0 },
	{ filePath: "commands/disable-database", type: "inner", level: 0 },
	{ filePath: "commands/enable-database", type: "inner", level: 0 },
	{ filePath: "commands/encrypt-database", type: "inner", level: 0 },
	{ filePath: "commands/get-database", type: "inner", level: 0 },
	{ filePath: "commands/list-database", type: "inner", level: 0 },
	{ filePath: "commands/list-database-connections", type: "inner", level: 0 },
	{ filePath: "commands/list-databases", type: "inner", level: 0 },
	{ filePath: "commands/remove-database", type: "inner", level: 0 },
	{ filePath: "commands/unuse-database", type: "inner", level: 0 },
	{ filePath: "commands/use-database", type: "inner", level: 0 },
	{ title: "GENERAL", type: "secondary" },
	{ filePath: "commands/close-connection", type: "inner", level: 0 },
	{ filePath: "commands/get-info", type: "inner", level: 0 },
	{ filePath: "commands/get-sql", type: "inner", level: 0 },
	{ filePath: "commands/list-commands", type: "inner", level: 0 },
	{ filePath: "commands/list-connections", type: "inner", level: 0 },
	{ filePath: "commands/list-indexes", type: "inner", level: 0 },
	{ filePath: "commands/list-info", type: "inner", level: 0 },
	{ filePath: "commands/list-keywords", type: "inner", level: 0 },
	{ filePath: "commands/list-metadata", type: "inner", level: 0 },
	{ filePath: "commands/list-stats", type: "inner", level: 0 },
	{ filePath: "commands/list-tables", type: "inner", level: 0 },
	{ filePath: "commands/ping", type: "inner", level: 0 },
	{ filePath: "commands/sleep", type: "inner", level: 0 },
	{ filePath: "commands/test", type: "inner", level: 0 },
	{ title: "IP COMMANDS", type: "secondary" },
	{ filePath: "commands/add-allowed-ip", type: "inner", level: 0 },
	{ filePath: "commands/list-allowed-ip", type: "inner", level: 0 },
	{ filePath: "commands/remove-allowed-ip", type: "inner", level: 0 },
	{ title: "LOG", type: "secondary" },
	{ filePath: "commands/list-log", type: "inner", level: 0 },
	{ title: "PLUGIN", type: "secondary" },
	{ filePath: "commands/disable-plugin", type: "inner", level: 0 },
	{ filePath: "commands/enable-plugin", type: "inner", level: 0 },
	{ filePath: "commands/list-plugins", type: "inner", level: 0 },
	{ filePath: "commands/load-plugin", type: "inner", level: 0 },
	{ title: "PRIVILEGES", type: "secondary" },
	{ filePath: "commands/grant-privilege", type: "inner", level: 0 },
	{ filePath: "commands/list-privileges", type: "inner", level: 0 },
	{ filePath: "commands/revoke-privilege", type: "inner", level: 0 },
	{ filePath: "commands/set-privilege", type: "inner", level: 0 },
	{ title: "PUBSUB", type: "secondary" },
	{ filePath: "commands/create-channel", type: "inner", level: 0 },
	{ filePath: "commands/list-channels", type: "inner", level: 0 },
	{ filePath: "commands/listen", type: "inner", level: 0 },
	{ filePath: "commands/notify", type: "inner", level: 0 },
	{ filePath: "commands/remove-channel", type: "inner", level: 0 },
	{ filePath: "commands/unlisten", type: "inner", level: 0 },
	{ title: "QUERY ANALYZER", type: "secondary" },
	{ filePath: "commands/analyzer-plan-id", type: "inner", level: 0 },
	{ filePath: "commands/analyzer-reset", type: "inner", level: 0 },
	{ filePath: "commands/analyzer-suggest-id", type: "inner", level: 0 },
	{ filePath: "commands/list-analyzer", type: "inner", level: 0 },
	{ title: "ROLES", type: "secondary" },
	{ filePath: "commands/create-role", type: "inner", level: 0 },
	{ filePath: "commands/grant-role", type: "inner", level: 0 },
	{ filePath: "commands/list-roles", type: "inner", level: 0 },
	{ filePath: "commands/remove-role", type: "inner", level: 0 },
	{ filePath: "commands/rename-role", type: "inner", level: 0 },
	{ filePath: "commands/revoke-role", type: "inner", level: 0 },
	{ title: "SETTINGS", type: "secondary" },
	{ filePath: "commands/get-client-key", type: "inner", level: 0 },
	{ filePath: "commands/get-database-key", type: "inner", level: 0 },
	{ filePath: "commands/get-key", type: "inner", level: 0 },
	{ filePath: "commands/list-client-keys", type: "inner", level: 0 },
	{ filePath: "commands/list-keys", type: "inner", level: 0 },
	{ filePath: "commands/remove-client-key", type: "inner", level: 0 },
	{ filePath: "commands/remove-database-key", type: "inner", level: 0 },
	{ filePath: "commands/remove-key", type: "inner", level: 0 },
	{ filePath: "commands/set-client-key", type: "inner", level: 0 },
	{ filePath: "commands/set-database", type: "inner", level: 0 },
	{ filePath: "commands/set-key", type: "inner", level: 0 },
	{ filePath: "commands/env-commands", type: "inner", level: 0 },
	{ title: "USER", type: "secondary" },
	{ filePath: "commands/create-user", type: "inner", level: 0 },
	{ filePath: "commands/disable-user", type: "inner", level: 0 },
	{ filePath: "commands/enable-user", type: "inner", level: 0 },
	{ filePath: "commands/get-user", type: "inner", level: 0 },
	{ filePath: "commands/list-users", type: "inner", level: 0 },
	{ filePath: "commands/remove-user", type: "inner", level: 0 },
	{ filePath: "commands/rename-user", type: "inner", level: 0 },
	{ filePath: "commands/set-my-password", type: "inner", level: 0 },
	{ filePath: "commands/set-password", type: "inner", level: 0 },
]

export default sidebarNav;
