import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

const sidebarNav: SidebarNavStruct = [
	{ title: "", type: "primary" },
	{ title: "Getting Started", type: "secondary", icon: "docs-star" },
	{ title: "Introduction", href: "/docs/sqlite-cloud", type: "inner", level: 0 }, // should be index page for /docs and highlight "introduction" in nav
	{ title: "Quick Start Guides", type: "inner", level: 0 },
	{ title: "React", filePath: "sqlite-cloud/quick-start-react", type: "inner", level: 1 },

	{ title: "Database", type: "secondary", icon: "docs-db" },
	{ title: "Fundamentals", type: "inner", level: 0 },
	{ title: "Connecting", filePath: "sqlite-cloud/connect-cluster", type: "inner", level: 1 },
	{ title: "Creating a database", filePath: "sqlite-cloud/create-database", type: "inner", level: 1 },
	{ title: "Writing data", filePath: "sqlite-cloud/write-data", type: "inner", level: 1 },
	{ title: "Backups", filePath: "sqlite-cloud/backup", type: "inner", level: 0 },
	// { title: "Storage", type: "inner", level: 0 },
	// { title: "Partitioning", type: "inner", level: 0 },
	{ title: "Extensions", filePath: "sqlite-cloud/extensions", type: "inner", level: 0 },

	{ title: "Platform", type: "secondary", icon: "docs-plat" },
	// { title: "Overview", type: "inner", level: 0 },
	{ title: "Edge Functions", filePath: "sqlite-cloud/edge-functions", type: "inner", level: 0 },
	{ title: "Webhooks", filePath: "sqlite-cloud/webhooks", type: "inner", level: 0 },
	{ title: "Pub/Sub", filePath: "sqlite-cloud/pub-sub", type: "inner", level: 0 },
	{ title: "Scaling", type: "inner", filePath: "sqlite-cloud/scaling", level: 0 },
	{ title: "Security and Access Control", filePath: "sqlite-cloud/security", type: "inner", level: 0 },
	{ title: "Query Analyzer", filePath: "sqlite-cloud/analyzer", type: "inner", level: 0 },
	{ title: "Settings", filePath: "sqlite-cloud/settings", type: "inner", level: 0 },

	{ title: "Reference", type: "secondary", icon: "docs-ref" },
	{ title: "Server-side Commands", type: "inner", filePath: "sqlite-cloud/server-side-commands", level: 0 },
	{ title: "API Keys", filePath: "sqlite-cloud/api-key-commands", type: "inner", level: 1 },
	{ title: "Authentication", filePath: "sqlite-cloud/auth-commands", type: "inner", level: 1 },
	{ title: "Backups", filePath: "sqlite-cloud/backup-commands", type: "inner", level: 1 },
	{ title: "Cluster", filePath: "sqlite-cloud/cluster-commands", type: "inner", level: 1 },
	{ title: "Database", filePath: "sqlite-cloud/database-commands", type: "inner", level: 1 },
	{ title: "General Info", filePath: "sqlite-cloud/general-commands", type: "inner", level: 1 },
	{ title: "IP", filePath: "sqlite-cloud/ip-commands", type: "inner", level: 1 },
	{ title: "Logs", filePath: "sqlite-cloud/log-commands", type: "inner", level: 1 },
	{ title: "Plugins", filePath: "sqlite-cloud/plugin-commands", type: "inner", level: 1 },
	{ title: "Privileges", filePath: "sqlite-cloud/privilege-commands", type: "inner", level: 1 },
	{ title: "Pub/Sub", filePath: "sqlite-cloud/pub-sub-commands", type: "inner", level: 1 },
	{ title: "Query Analyzer", filePath: "sqlite-cloud/query-analyzer-commands", type: "inner", level: 1 },
	{ title: "Roles", filePath: "sqlite-cloud/role-commands", type: "inner", level: 1 },
	{ title: "Settings", filePath: "sqlite-cloud/settings-commands", type: "inner", level: 1 },
	{ title: "User", filePath: "sqlite-cloud/user-commands", type: "inner", level: 1 },

	{ title: "CLI", filePath: "sqlite-cloud/cli-commands", type: "inner", level: 0 },

	{ title: "SDKs", type: "inner", level: 0 },
	{ title: "C/C++", type: "inner", filePath: "sqlite-cloud/sdk-c/getting-started", level: 1 },
	{ title: 'Basic APIs', type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudConnect', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudConnectWithString', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudExec', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudExecArray', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudUUID', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudDisconnect', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudConfig', type: "inner", level: 3 },

	{ title: 'Result APIs', type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultIsOK', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultIsError', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultType', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultLen', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultInt32', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultInt64', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultFloat', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultDouble', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultFree', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudResultDump', type: "inner", level: 3 },

	{ title: "Rowset APIs", type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudRowsetValueType', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudRowsetColumnName', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudRowsetValue', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudRowsetInt32Value', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudRowsetInt64Value', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudRowsetFloatValue', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudRowsetDoubleValue', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudRowsetDump', type: "inner", level: 3 },


	{ title: "Array APIs", type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudArrayValueType', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudArrayCount', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudArrayValue', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudArrayInt32Value', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudArrayInt64Value', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudArrayFloatValue', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudArrayDoubleValue', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudArrayDump', type: "inner", level: 3 },

	{ title: "Error APIs", type: "inner", level: 2 },
	{ title: 'SQCloudIsError', filePath: 'sqlite-cloud/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudIsSQLiteError', filePath: 'sqlite-cloud/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudErrorCode', filePath: 'sqlite-cloud/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudExtendedErrorCode', filePath: 'sqlite-cloud/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudErrorOffset', filePath: 'sqlite-cloud/sdk-c/SQCloudError', type: "inner", level: 3 },
	{ title: 'SQCloudErrorMsg', filePath: 'sqlite-cloud/sdk-c/SQCloudError', type: "inner", level: 3 },

	{ title: "VM APIs", type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMCompile', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMStep', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMResult', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMClose', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMErrorMsg', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMErrorCode', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMIsReadOnly', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMIsExplain', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMIsFinalized', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMBindParameterCount', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMBindParameterIndex', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMBindParameterName', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMColumnCount', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindDouble', filePath: 'sqlite-cloud/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindInt', filePath: 'sqlite-cloud/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindInt64', filePath: 'sqlite-cloud/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindNull', filePath: 'sqlite-cloud/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindText', filePath: 'sqlite-cloud/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindBlob', filePath: 'sqlite-cloud/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMBindZeroBlob', filePath: 'sqlite-cloud/sdk-c/SQCloudVMBind', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnBlob', filePath: 'sqlite-cloud/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnText', filePath: 'sqlite-cloud/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnDouble', filePath: 'sqlite-cloud/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnInt32', filePath: 'sqlite-cloud/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnInt64', filePath: 'sqlite-cloud/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnLen', filePath: 'sqlite-cloud/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ title: 'SQCloudVMColumnType', filePath: 'sqlite-cloud/sdk-c/SQCloudVMColumn', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMLastRowID', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMChanges', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudVMTotalChanges', type: "inner", level: 3 },
	{ title: "Blob APIs", type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudBlobOpen', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudBlobReOpen', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudBlobClose', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudBlobBytes', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudBlobRead', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudBlobWrite', type: "inner", level: 3 },
	{ title: "Pub/Sub APIs", type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudSetPubSubCallback', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudSetPubSubOnly', type: "inner", level: 3 },
	{ title: "Upload/Download APIs", type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudUploadDatabase', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-c/SQCloudDownloadDatabase', type: "inner", level: 3 },

	{ title: "JavaScript", filePath: "sqlite-cloud/sdk-js/getting-started", type: "inner", level: 1 },
	{ title: "Modules", filePath: 'sqlite-cloud/sdk-js/modules', type: "inner", level: 2 },
	{ title: "Classes", type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-js/classes/Database', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-js/classes/SQLiteCloudConnection', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-js/classes/SQLiteCloudError', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-js/classes/SQLiteCloudRow', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-js/classes/SQLiteCloudRowset', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-js/classes/Statement', type: "inner", level: 3 },
	{ title: 'Interfaces', type: "inner", level: 2 },
	{ filePath: 'sqlite-cloud/sdk-js/interfaces/SQLCloudRowsetMetadata', type: "inner", level: 3 },
	{ filePath: 'sqlite-cloud/sdk-js/interfaces/SQLiteCloudConfig', type: "inner", level: 3 },

	{ title: "Go", filePath: "sqlite-cloud/sdk-go/getting-started", type: "inner", level: 1 },

	{ title: "PHP", filePath: "sqlite-cloud/sdk-php/getting-started", type: "inner", level: 1 },
	{ title: "Methods", filePath: "sqlite-cloud/sdk-php/methods", type: "inner", level: 2 },

	{ title: "SQLite", type: "inner", level: 0, href: "/docs/sqlite/" },

];

export default sidebarNav
