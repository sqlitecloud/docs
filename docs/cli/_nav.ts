import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

const sidebarNav: SidebarNavStruct = [
	{ title: "CLI", type: "primary" },
	{ title: "Command Line Interface", type: "secondary" },
	{ filePath: "cli/sqlitecloudcli", type: "inner", level: 0 },
	{ title: "meta-commands", type: "inner", level: 0 },
	{ title: ".download", href: "#", type: "inner", level: 1 },
	{ title: ".upload", href: "#", type: "inner", level: 1 },
	{ title: ".exit", href: "#", type: "inner", level: 1 },
	{ title: ".prepare", href: "#", type: "inner", level: 1 },
	{ title: ".step", href: "#", type: "inner", level: 1 },
	{ title: ".clear", href: "#", type: "inner", level: 1 },
	{ title: ".reset", href: "#", type: "inner", level: 1 },
	{ title: ".finalize", href: "#", type: "inner", level: 1 },
	{ filePath: "cli/sqlc", type: "inner", level: 0 },
]

export default sidebarNav;