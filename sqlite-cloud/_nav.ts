import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

const sidebarNav: SidebarNavStruct = [
  { title: "", type: "primary" },
  // ### AI ###
  { title: "AI", type: "secondary", icon: "docs-star",},
  { title: "Overview", filePath: "ai-overview", type: "inner", level: 0 },
  { title: "SQLite-AI", filePath: "sqlite-ai", type: "inner", level: 0 },
  { title: "SQLite-JS", filePath: "sqlite-js", type: "inner", level: 0 },
  { title: "SQLite-Sync", filePath: "sqlite-sync", type: "inner", level: 0 },
  { title: "SQLite-Vector", filePath: "sqlite-vector", type: "inner", level: 0 },
  { title: "MCP (Model Context Protocol)", filePath: "mcp-server", type: "inner", level: 0 },

  // ### CLOUD ###
  { title: "Cloud", type: "secondary", icon: "docs-star",},
  { title: "Overview", filePath: "overview", type: "inner", level: 0 },
  { title: "Scaling", filePath: "architecture", type: "inner", level: 0 },
  { title: "Getting Started", type: "inner", level: 0 },
      { title: "Connecting", filePath: "connect-cluster", type: "inner", level: 1 },
      { title: "Creating a database", filePath: "create-database", type: "inner", level: 1 },
      { title: "Writing data", filePath: "write-data", type: "inner", level: 1 },
  { title: "Quick Start Guides", type: "inner", level: 0 },
      { title: "CDN", filePath: "quick-start-cdn", type: "inner", level: 1 },
      { title: "Node.js", filePath: "quick-start-node", type: "inner", level: 1 },
      { title: "React", filePath: "quick-start-react", type: "inner", level: 1 },
      { title: "React Native", filePath: "quick-start-react-native", type: "inner", level: 1 },
      { title: "Apollo / GraphQL", filePath: "quick-start-apollo-graphql", type: "inner", level: 1 },
      { title: "Next.js", filePath: "quick-start-next", type: "inner", level: 1 },
      { title: "Django", filePath: "quick-start-django", type: "inner", level: 1 },
      { title: "Flask", filePath: "quick-start-flask", type: "inner", level: 1 },
      { title: "SQLAlchemy", filePath: "quick-start-sqlalchemy-orm", type: "inner", level: 1 },
      { title: "Streamlit", filePath: "quick-start-streamlit", type: "inner", level: 1 },
      { title: "PHP / Laravel", filePath: "quick-start-php-laravel", type: "inner", level: 1 },
      { title: "Gin", filePath: "quick-start-gin", type: "inner", level: 1 },
      { title: "Knex.js", filePath: "quick-start-knex", type: "inner", level: 1 },

  // ### PLATFORM ###
  { title: "Platform", type: "secondary", icon: "docs-plat" },
      { title: "Edge Functions", filePath: "edge-functions", type: "inner", level: 0 },
      { title: "Webhooks", filePath: "webhooks", type: "inner", level: 0 },
      { title: "Pub/Sub", filePath: "pub-sub", type: "inner", level: 0 },
      //{ title: "Vector", filePath: "vector", type: "inner", level: 0 },
      { title: "Users and Roles", filePath: "security", type: "inner", level: 0 },
      { title: "API Keys", filePath: "apikey", type: "inner", level: 0 },
      { title: "Row-Level Security", filePath: "rls", type: "inner", level: 0},
      { title: "OffSync", filePath: "offsync", type: "inner", level: 0 },
      { title: "Access Tokens", filePath: "access-tokens", type: "inner", level: 0 },
      { title: "Backups", filePath: "backups", type: "inner", level: 0 },
      { title: "Query Analyzer", filePath: "analyzer", type: "inner", level: 0 },
      { title: "Extensions", filePath: "extensions", type: "inner", level: 0 },
      { title: "Weblite (REST API)", filePath: "weblite", type: "inner", level: 0 },

  // ### CLOUD SDK ###
  { title: "Cloud SDK", type: "secondary", icon: "docs-sdk" },
  { title: "C/C++", type: "inner", level: 0 },
  {
    title: "Introduction",
    type: "inner",
    filePath: "sdk-c-introduction",
    level: 1,
  },
  { title: "Basic APIs", type: "inner", level: 1 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudConnect", type: "inner", level: 2 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudConnectWithString",
    type: "inner",
    level: 2,
  },
  { filePath: "sqlite-cloud/sdks/c/SQCloudExec", type: "inner", level: 2 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudExecArray", type: "inner", level: 2 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudUUID", type: "inner", level: 2 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudDisconnect",
    type: "inner",
    level: 2,
  },
  { filePath: "sqlite-cloud/sdks/c/SQCloudConfig", type: "inner", level: 2 },

  { title: "Result APIs", type: "inner", level: 1 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudResultIsOK",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudResultIsError",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudResultType",
    type: "inner",
    level: 2,
  },
  { filePath: "sqlite-cloud/sdks/c/SQCloudResultLen", type: "inner", level: 2 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudResultInt32",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudResultInt64",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudResultFloat",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudResultDouble",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudResultFree",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudResultDump",
    type: "inner",
    level: 2,
  },

  { title: "Rowset APIs", type: "inner", level: 1 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudRowsetValueType",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudRowsetColumnName",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudRowsetValue",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudRowsetInt32Value",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudRowsetInt64Value",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudRowsetFloatValue",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudRowsetDoubleValue",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudRowsetDump",
    type: "inner",
    level: 2,
  },

  { title: "Array APIs", type: "inner", level: 1 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudArrayValueType",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudArrayCount",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudArrayValue",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudArrayInt32Value",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudArrayInt64Value",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudArrayFloatValue",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudArrayDoubleValue",
    type: "inner",
    level: 2,
  },
  { filePath: "sqlite-cloud/sdks/c/SQCloudArrayDump", type: "inner", level: 2 },

  { title: "Error APIs", type: "inner", level: 1 },
  {
    title: "SQCloudIsError",
    filePath: "sqlite-cloud/sdks/c/SQCloudError",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudIsSQLiteError",
    filePath: "sqlite-cloud/sdks/c/SQCloudError",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudErrorCode",
    filePath: "sqlite-cloud/sdks/c/SQCloudError",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudExtendedErrorCode",
    filePath: "sqlite-cloud/sdks/c/SQCloudError",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudErrorOffset",
    filePath: "sqlite-cloud/sdks/c/SQCloudError",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudErrorMsg",
    filePath: "sqlite-cloud/sdks/c/SQCloudError",
    type: "inner",
    level: 2,
  },

  { title: "VM APIs", type: "inner", level: 1 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudVMCompile", type: "inner", level: 2 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudVMStep", type: "inner", level: 2 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudVMResult", type: "inner", level: 2 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudVMClose", type: "inner", level: 2 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMErrorMsg",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMErrorCode",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMIsReadOnly",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMIsExplain",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMIsFinalized",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBindParameterCount",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBindParameterIndex",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBindParameterName",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMColumnCount",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMBindDouble",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBind",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMBindInt",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBind",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMBindInt64",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBind",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMBindNull",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBind",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMBindText",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBind",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMBindBlob",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBind",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMBindZeroBlob",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMBind",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMColumnBlob",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMColumn",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMColumnText",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMColumn",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMColumnDouble",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMColumn",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMColumnInt32",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMColumn",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMColumnInt64",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMColumn",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMColumnLen",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMColumn",
    type: "inner",
    level: 2,
  },
  {
    title: "SQCloudVMColumnType",
    filePath: "sqlite-cloud/sdks/c/SQCloudVMColumn",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMLastRowID",
    type: "inner",
    level: 2,
  },
  { filePath: "sqlite-cloud/sdks/c/SQCloudVMChanges", type: "inner", level: 2 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudVMTotalChanges",
    type: "inner",
    level: 2,
  },
  { title: "Blob APIs", type: "inner", level: 1 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudBlobOpen", type: "inner", level: 2 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudBlobReOpen",
    type: "inner",
    level: 2,
  },
  { filePath: "sqlite-cloud/sdks/c/SQCloudBlobClose", type: "inner", level: 2 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudBlobBytes", type: "inner", level: 2 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudBlobRead", type: "inner", level: 2 },
  { filePath: "sqlite-cloud/sdks/c/SQCloudBlobWrite", type: "inner", level: 2 },
  { title: "Pub/Sub APIs", type: "inner", level: 1 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudSetPubSubCallback",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudSetPubSubOnly",
    type: "inner",
    level: 2,
  },
  { title: "Upload/Download APIs", type: "inner", level: 1 },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudUploadDatabase",
    type: "inner",
    level: 2,
  },
  {
    filePath: "sqlite-cloud/sdks/c/SQCloudDownloadDatabase",
    type: "inner",
    level: 2,
  },

  { title: "JavaScript", type: "inner", level: 0 },
  {
    title: "Introduction",
    type: "inner",
    filePath: "sdk-js-introduction",
    level: 1,
  },
  { title: "Quick Starts", type: "inner", level: 1 },
  { title: "React", ref: "/docs/quick-start-react", type: "inner", level: 2 },
  { title: "Node.js", ref: "/docs/quick-start-node", type: "inner", level: 2 },
  { title: "Next.js", ref: "/docs/quick-start-next", type: "inner", level: 2 },
  { title: "Tutorials", type: "inner", level: 1 },
  {
    title: "Using SQLite Extensions - Geopoly",
    ref: "/docs/tutorial-geopoly",
    type: "inner",
    level: 2,
  },
  { title: "Classes", type: "inner", level: 1 },
  {
    title: "Database",
    filePath: "sqlite-cloud/sdks/js/classes/Database",
    type: "inner",
    level: 2,
  },
  {
    title: "SQLiteCloudConnection",
    filePath: "sqlite-cloud/sdks/js/classes/SQLiteCloudConnection",
    type: "inner",
    level: 2,
  },
  {
    title: "SQLiteCloudError",
    filePath: "sqlite-cloud/sdks/js/classes/SQLiteCloudError",
    type: "inner",
    level: 2,
  },
  {
    title: "SQLiteCloudRow",
    filePath: "sqlite-cloud/sdks/js/classes/SQLiteCloudRow",
    type: "inner",
    level: 2,
  },
  {
    title: "SQLiteCloudRowset",
    filePath: "sqlite-cloud/sdks/js/classes/SQLiteCloudRowset",
    type: "inner",
    level: 2,
  },
  {
    title: "SQLiteCloudStatement",
    filePath: "sqlite-cloud/sdks/js/classes/Statement",
    type: "inner",
    level: 2,
  },

  { title: "Interfaces", type: "inner", level: 1 },
  {
    title: "SQLCloudRowsetMetadata",
    filePath: "sqlite-cloud/sdks/js/interfaces/SQLCloudRowsetMetadata",
    type: "inner",
    level: 2,
  },
  {
    title: "SQLiteCloudConfig",
    filePath: "sqlite-cloud/sdks/js/interfaces/SQLiteCloudConfig",
    type: "inner",
    level: 2,
  },
  { title: "Modules", filePath: "sdk-js-modules", type: "inner", level: 1 },

  { title: "Python", type: "inner", level: 0 },
  {
    title: "Introduction",
    type: "inner",
    filePath: "sdk-python-introduction",
    level: 1,
  },
  { title: "Django", ref: "/docs/quick-start-django", type: "inner", level: 1 },
  { title: "Flask", ref: "/docs/quick-start-flask", type: "inner", level: 1 },
  {
    title: "SQLAlchemy",
    ref: "/docs/quick-start-sqlalchemy-orm",
    type: "inner",
    level: 1,
  },

  { title: "Go", type: "inner", level: 0 },
  {
    title: "Introduction",
    type: "inner",
    filePath: "sdk-go-introduction",
    level: 1,
  },

  { title: "PHP", type: "inner", level: 0 },
  {
    title: "Introduction",
    type: "inner",
    filePath: "sdk-php-introduction",
    level: 1,
  },
  { title: "Methods", filePath: "sdk-php-methods", type: "inner", level: 1 },

  { title: "Swift", type: "inner", level: 0 },
  {
    title: "Introduction",
    type: "inner",
    filePath: "sdk-swift-introduction",
    level: 1,
  },

  // ### REFERENCE ###
  { title: "Reference", type: "secondary", icon: "docs-ref" },
  { title: "Server-side Commands", type: "inner", level: 0 },
  {
    title: "Introduction",
    filePath: "server-side-commands",
    type: "inner",
    level: 1,
  },
  { title: "API Keys", filePath: "api-key-commands", type: "inner", level: 1 },
  {
    title: "Authentication",
    filePath: "auth-commands",
    type: "inner",
    level: 1,
  },
  { title: "Backups", filePath: "backup-commands", type: "inner", level: 1 },
  { title: "Cluster", filePath: "cluster-commands", type: "inner", level: 1 },
  { title: "Database", filePath: "database-commands", type: "inner", level: 1 },
  {
    title: "General Info",
    filePath: "general-commands",
    type: "inner",
    level: 1,
  },
  { title: "IP", filePath: "ip-commands", type: "inner", level: 1 },
  { title: "Logs", filePath: "log-commands", type: "inner", level: 1 },
  { title: "Plugins", filePath: "plugin-commands", type: "inner", level: 1 },
  {
    title: "Privileges",
    filePath: "privilege-commands",
    type: "inner",
    level: 1,
  },
  { title: "Pub/Sub", filePath: "pub-sub-commands", type: "inner", level: 1 },
  {
    title: "Query Analyzer",
    filePath: "query-analyzer-commands",
    type: "inner",
    level: 1,
  },
  { title: "Roles", filePath: "role-commands", type: "inner", level: 1 },
  { title: "Settings", filePath: "settings-commands", type: "inner", level: 1 },
  { title: "User", filePath: "user-commands", type: "inner", level: 1 },

  { title: "CLI", type: "inner", level: 0 },
  { title: "Introduction", filePath: "cli-commands", type: "inner", level: 1 },

  { title: "SQLite", type: "inner", level: 0, href: "/docs/sqlite/" },
];

export default sidebarNav;
