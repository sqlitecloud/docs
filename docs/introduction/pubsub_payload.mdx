---
title: Pub/Sub Payload Format
description: SQLite Cloud Pub/Sub
---

**PUB/SUB FORMAT**

JSON is used to deliver payload to all listening clients. JSON format depends on the operation type. In case of database tables, notifications occur on COMMIT so the same JSON can collect more changes related to that table. **SQLite Cloud** guarantees **one JSON per channel**.

**1. NOTIFY payload**
```json
{
    sender: "UUID",
    channel: "name",
    type: "MESSAGE",
    payload: "Message content here"	// payload is optional
}
```


**2. Multiple TABLE modification payload**
```json
{
    sender: "UUID",
    channel: "tablename",
    type: "TABLE",
    pk: ["id", col1"]      // array of primary key name(s)
    payload: [             // array of operations that affect table name
        {
            type: "INSERT",
            id: 12,
            col1: "value1",
            col2: 3.14
        },
        {
            type: "DELETE",
            pv: [13]       // primary key value (s) in the same order as the pk array
        },
        {
            type: "UPDATE",
            id: 15,        // new value
            col1: "newvalue",
            col2: 0.0
            // if primary key is updated during this update then add it to:
            // UPDATE TABLE SET col1='newvalue', col2=0.0, id = 15 WHERE id=14
            pv: [14]       // primary key value (s) set prior to this UPDATE operation
           ]
        }
    ]
}
```

**Details:**

* **sender**: is the UUID of the client who sent the NOTIFY event or who initiated the WRITE operation that triggers the notification. It is common for a client that executes **NOTIFY** to be listening on the same notification channel itself. In that case it will get back a notification event, just like all the other listening sessions. Depending on the application logic, this could result in useless work, for example, reading a database table to find the same updates that that session just wrote out. It is possible to avoid such extra work by noticing whether the notifying **UUID** (supplied in the notification event message) is the same as one's **UUID** (available from SDK). When they are the same, the notification event is one's own work bouncing back, and can be ignored. If **UUID** is 0 it means that server sent that payload.
* **channel**: this field represents the channel/table affected.
* **type**: determine the type of operation, it can be: MESSAGE, TABLE, INSERT, UPDATE, or DELETE (more to come).
* **pk/pv**: these fields represent the primary key name(s) and value(s) affected by this table operation.
* **payload**: TODO

**More SQL examples:**
```
> USE DATABASE test.sqlite
OK

> GET SQL foo
CREATE TABLE "foo" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "col1" TEXT, "col2" TEXT)

> LISTEN TABLE foo
OK
```

**3. DELETE FROM foo WHERE id=14;**
```json
{
	"sender": "b7a92805-ef82-4ad1-8c2f-92da6df6b1d5",
	"channel": "foo",
	"type": "TABLE",
	"pk": ["id"],
	"payload": [{
		"type": "DELETE",
		"pv": [14]
	}]
}
```

**4. INSERT INTO foo(col1, col2) VALUES ('test100', 'test101');**
```json
{
	"sender": "b7a92805-ef82-4ad1-8c2f-92da6df6b1d5",
	"channel": "foo",
	"type": "TABLE",
	"pk": ["id"],
	"payload": [{
		"type": "INSERT",
		"id": 15,
		"col1": "test100",
		"col2": "test101"
	}]
}
```

**5. UPDATE foo SET id=14,col1='test200' WHERE id=15;**
```json
{
	"sender": "b7a92805-ef82-4ad1-8c2f-92da6df6b1d5",
	"channel": "foo",
	"type": "TABLE",
	"pk": ["id"],
	"payload": [{
		"type": "DELETE",
		"pv": [15]
	}, {
		"type": "INSERT",
		"id": 14,
		"col1": "test200",
		"col2": "test101"
	}]
}
```