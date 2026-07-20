# SupportCaseAttachmentFileCreate

Schema to create a file attached to a support case.

## Example Usage

```typescript
import { SupportCaseAttachmentFileCreate } from "@polar-sh/sdk/models/components/supportcaseattachmentfilecreate.js";

let value: SupportCaseAttachmentFileCreate = {
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  name: "<value>",
  mimeType: "<value>",
  size: 791869,
  upload: {
    parts: [
      {
        number: 963617,
        chunkStart: 986190,
        chunkEnd: 98032,
      },
    ],
  },
  service: "support_case_attachment",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                 |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `mimeType`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | MIME type of the file. Images, videos, PDF, CSV, plain text, Word and Excel documents are supported. |                                                                                                      |
| `size`                                                                                               | *number*                                                                                             | :heavy_check_mark:                                                                                   | Size of the file. A maximum of 250 MB is allowed for this type of file.                              |                                                                                                      |
| `checksumSha256Base64`                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `upload`                                                                                             | [components.S3FileCreateMultipart](../../models/components/s3filecreatemultipart.md)                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `service`                                                                                            | *"support_case_attachment"*                                                                          | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `version`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |