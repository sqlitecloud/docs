import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

const sidebarNav: SidebarNavStruct = [
	{ title: "SDK", type: "primary" },

	{ title: "C/C++", type: "secondary" },
	{ filePath: 'sdk/c/intro', type: "inner", level: 0 },

	{ title: 'Basic APIs', type: "inner", level: 0 },
	{ filePath: 'sdk/c/SQCloudConnect', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudConnectWithString', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudExec', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudExecArray', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudUUID', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudDisconnect', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudConfig', type: "inner", level: 1 },

	{ title: 'Result APIs', type: "inner", level: 0 },
	{ filePath: 'sdk/c/SQCloudResultIsOK', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudResultIsError', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudResultType', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudResultLen', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudResultInt32', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudResultInt64', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudResultFloat', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudResultDouble', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudResultFree', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudResultDump', type: "inner", level: 1 },

	{ title: "Rowset APIs", type: "inner", level: 0 },
	{ filePath: 'sdk/c/SQCloudRowsetValueType', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudRowsetColumnName', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudRowsetValue', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudRowsetInt32Value', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudRowsetInt64Value', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudRowsetFloatValue', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudRowsetDoubleValue', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudRowsetDump', type: "inner", level: 1 },


	{ title: "Array APIs", type: "inner", level: 0 },
	{ filePath: 'sdk/c/SQCloudArrayValueType', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudArrayCount', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudArrayValue', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudArrayInt32Value', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudArrayInt64Value', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudArrayFloatValue', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudArrayDoubleValue', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudArrayDump', type: "inner", level: 1 },

	{ title: "Error APIs", type: "inner", level: 0 },
	{ title: 'SQCloudIsError', filePath: 'sdk/c/SQCloudError', type: "inner", level: 1 },
	{ title: 'SQCloudIsSQLiteError', filePath: 'sdk/c/SQCloudError', type: "inner", level: 1 },
	{ title: 'SQCloudErrorCode', filePath: 'sdk/c/SQCloudError', type: "inner", level: 1 },
	{ title: 'SQCloudExtendedErrorCode', filePath: 'sdk/c/SQCloudError', type: "inner", level: 1 },
	{ title: 'SQCloudErrorOffset', filePath: 'sdk/c/SQCloudError', type: "inner", level: 1 },
	{ title: 'SQCloudErrorMsg', filePath: 'sdk/c/SQCloudError', type: "inner", level: 1 },

	{ title: "VM APIs", type: "inner", level: 0 },
	{ filePath: 'sdk/c/SQCloudVMCompile', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMStep', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMResult', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMClose', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMErrorMsg', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMErrorCode', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMIsReadOnly', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMIsExplain', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMIsFinalized', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMBindParameterCount', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMBindParameterIndex', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMBindParameterName', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMColumnCount', type: "inner", level: 1 },
	{ title: 'SQCloudVMBindDouble', filePath: 'sdk/c/SQCloudVMBind', type: "inner", level: 1 },
	{ title: 'SQCloudVMBindInt', filePath: 'sdk/c/SQCloudVMBind', type: "inner", level: 1 },
	{ title: 'SQCloudVMBindInt64', filePath: 'sdk/c/SQCloudVMBind', type: "inner", level: 1 },
	{ title: 'SQCloudVMBindNull', filePath: 'sdk/c/SQCloudVMBind', type: "inner", level: 1 },
	{ title: 'SQCloudVMBindText', filePath: 'sdk/c/SQCloudVMBind', type: "inner", level: 1 },
	{ title: 'SQCloudVMBindBlob', filePath: 'sdk/c/SQCloudVMBind', type: "inner", level: 1 },
	{ title: 'SQCloudVMBindZeroBlob', filePath: 'sdk/c/SQCloudVMBind', type: "inner", level: 1 },
	{ title: 'SQCloudVMColumnBlob', filePath: 'sdk/c/SQCloudVMColumn', type: "inner", level: 1 },
	{ title: 'SQCloudVMColumnText', filePath: 'sdk/c/SQCloudVMColumn', type: "inner", level: 1 },
	{ title: 'SQCloudVMColumnDouble', filePath: 'sdk/c/SQCloudVMColumn', type: "inner", level: 1 },
	{ title: 'SQCloudVMColumnInt32', filePath: 'sdk/c/SQCloudVMColumn', type: "inner", level: 1 },
	{ title: 'SQCloudVMColumnInt64', filePath: 'sdk/c/SQCloudVMColumn', type: "inner", level: 1 },
	{ title: 'SQCloudVMColumnLen', filePath: 'sdk/c/SQCloudVMColumn', type: "inner", level: 1 },
	{ title: 'SQCloudVMColumnType', filePath: 'sdk/c/SQCloudVMColumn', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMLastRowID', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMChanges', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudVMTotalChanges', type: "inner", level: 1 },


	{ title: "Blob APIs", type: "inner", level: 0 },
	{ filePath: 'sdk/c/SQCloudBlobOpen', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudBlobReOpen', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudBlobClose', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudBlobBytes', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudBlobRead', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudBlobWrite', type: "inner", level: 1 },

	// { title: "Backup APIs", type: "inner", level: 0 },
	// { title: 'SQCloudBackupInit', href: 'sdk/c/SQCloudBackupInit', type: "inner", level: 1 },
	// { title: 'SQCloudBackupStep', href: 'sdk/c/SQCloudBackupStep', type: "inner", level: 1 },
	// { title: 'SQCloudBackupFinish', href: 'sdk/c/SQCloudBackupFinish', type: "inner", level: 1 },
	// { title: 'SQCloudBackupPageRemaining', href: 'sdk/c/SQCloudBackupPageRemaining', type: "inner", level: 1 },
	// { title: 'SQCloudBackupPageCount', href: 'sdk/c/SQCloudBackupPageCount', type: "inner", level: 1 },
	// { title: 'SQCloudBackupSetData', href: 'sdk/c/SQCloudBackupSetData', type: "inner", level: 1 },
	// { title: 'SQCloudBackupData', href: 'sdk/c/SQCloudBackupData', type: "inner", level: 1 },
	// { title: 'SQCloudBackupConnection', href: 'sdk/c/SQCloudBackupConnection', type: "inner", level: 1 },


	{ title: "Pub/Sub APIs", type: "inner", level: 0 },
	{ filePath: 'sdk/c/SQCloudSetPubSubCallback', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudSetPubSubOnly', type: "inner", level: 1 },


	{ title: "Upload/Download APIs", type: "inner", level: 0 },
	{ filePath: 'sdk/c/SQCloudUploadDatabase', type: "inner", level: 1 },
	{ filePath: 'sdk/c/SQCloudDownloadDatabase', type: "inner", level: 1 },


	{ title: "PHP", type: "secondary" },
	{ filePath: 'sdk/php/intro', type: "inner", level: 0 },
	{ filePath: 'sdk/php/admin', type: "inner", level: 0 },

	{ title: 'SQLiteCloud', type: "inner", level: 0 },
	{ filePath: 'sdk/php/connect', type: "inner", level: 1 },
	{ filePath: 'sdk/php/disconnect', type: "inner", level: 1 },
	{ filePath: 'sdk/php/execute', type: "inner", level: 1 },

	{ title: 'SQLiteCloudRowset', type: "inner", level: 0 },
	{ filePath: 'sdk/php/value', type: "inner", level: 1 },
	{ filePath: 'sdk/php/name', type: "inner", level: 1 },
	{ filePath: 'sdk/php/dump', type: "inner", level: 1 },


	{ title: "GO", type: "secondary" },
	{ filePath: 'sdk/go/intro', type: "inner", level: 0 },
	{ filePath: 'sdk/go/gettingstarted', type: "inner", level: 0 },


	{ title: "JS", type: "secondary" },
	{ filePath: 'sdk/js/intro', type: "inner", level: 0 },
	{ filePath: 'sdk/js/modules', type: "inner", level: 0 },

	{ title: 'Classes', type: "inner", level: 0 },
	{ filePath: 'sdk/js/classes/Database', type: "inner", level: 1 },
	{ filePath: 'sdk/js/classes/SQLiteCloudConnection', type: "inner", level: 1 },
	{ filePath: 'sdk/js/classes/SQLiteCloudError', type: "inner", level: 1 },
	{ filePath: 'sdk/js/classes/SQLiteCloudRow', type: "inner", level: 1 },
	{ filePath: 'sdk/js/classes/SQLiteCloudRowset', type: "inner", level: 1 },
	{ filePath: 'sdk/js/classes/Statement', type: "inner", level: 1 },

	{ title: 'Interfaces', type: "inner", level: 0 },
	{ filePath: 'sdk/js/interfaces/SQLCloudRowsetMetadata', type: "inner", level: 1 },
	{ filePath: 'sdk/js/interfaces/SQLiteCloudConfig', type: "inner", level: 1 }

]

export default sidebarNav;