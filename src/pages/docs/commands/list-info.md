---
title: LIST INFO
description: The LIST INFO command retrieves general information about the server
---

## Syntax

LIST INFO

## Privileges

```
CLUSTERADMIN, CLUSTERMONITOR
```

## Description

The LIST INFO command retrieves general information about the server. To retrieve a single specific information, use the GET INFO **key** command.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with the following columns:
* **key**: server key
* **value**: server value

## Example

```bash
> LIST INFO
--------------------------|------------------------------------------|
 key                      | value                                    |
--------------------------|------------------------------------------|
 sqlitecloud_version      | 0.9.8                                    |
 sqlite_version           | 3.39.3                                   |
 sqlitecloud_build_date   | Feb 10 2023                              |
 sqlitecloud_git_hash     | 9239313dc085cb787d25cf79424cefcf8ad17401 |
 os                       | macOS 13.2 (22D49)                       |
 arch_bits                | 64bit                                    |
 multiplexing_api         | kqueue                                   |
 listening_port           | 8860                                     |
 process_id               | 64750                                    |
 num_processors           | 10                                       |
 startup_datetime         | 2023-02-10 14:36:37                      |
 current_datetime         | 2023-02-10 14:36:45                      |
 nocluster                | 1                                        |
 nodeid                   | 0                                        |
 load                     | 0.0021821100438153                       |
 num_clients              | 1                                        |
 running_clients          | 1                                        |
 max_fd                   | 15824                                    |
 num_fd                   | 35                                       |
 mem_current              | 1729952                                  |
 mem_max                  | 1840272                                  |
 mem_total                | 17179869184                              |
 disk_total               | 494384795648                             |
 disk_free                | 296209416192                             |
 disk_usage               | 198175379456                             |
 disk_usage_perc          | 40.0852496275189                         |
 cpu_load                 | 0.4262                                   |
 num_connections          | 1                                        |
 max_connections          | 10000                                    |
 tls                      | LibreSSL 3.6.1                           |
 tls_conn_version         | TLSv1.3                                  |
 tls_conn_cipher          | TLS_CHACHA20_POLY1305_SHA256             |
 tls_conn_cipher_strength | 256                                      |
 tls_conn_alpn_selected   | NULL                                     |
 tls_conn_servername      | localhost                                |
 tls_peer_cert_provided   | 0                                        |
 tls_peer_cert_subject    | NULL                                     |
 tls_peer_cert_issuer     | NULL                                     |
 tls_peer_cert_hash       | NULL                                     |
 tls_peer_cert_notbefore  | NULL                                     |
 tls_peer_cert_notafter   | NULL                                     |
--------------------------|------------------------------------------|
```
