## LIST INDEXES

### Syntax

LIST INDEXES

### Privileges

```
READWRITE
```

### Description

The LIST INDEXES command returns a list of all indexes defined inside the currently used database.

### Return

A rowset with the following columns: `name` and `tbl_name`.

### Example

```bash
> LIST INDEXES
--------------------------|---------------|
 name                     | tbl_name      |
--------------------------|---------------|
 IFK_AlbumArtistId        | Album         |
 IFK_CustomerSupportRepId | Customer      |
 IFK_EmployeeReportsTo    | Employee      |
 IFK_InvoiceCustomerId    | Invoice       |
 IFK_InvoiceLineInvoiceId | InvoiceLine   |
 IFK_InvoiceLineTrackId   | InvoiceLine   |
 IFK_PlaylistTrackTrackId | PlaylistTrack |
 IFK_TrackAlbumId         | Track         |
 IFK_TrackGenreId         | Track         |
 IFK_TrackMediaTypeId     | Track         |
--------------------------|---------------|
```
