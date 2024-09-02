# FilesListResponse

## Example Usage

```typescript
import { FilesListResponse } from "@polar-sh/sdk/models/operations";

let value: FilesListResponse = {
    result: {
        items: [
            {
                id: "<value>",
                organizationId: "<value>",
                name: "<value>",
                path: "/usr/sbin",
                mimeType: "<value>",
                size: 230742,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2022-01-13T20:07:37.920Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-04-18T08:14:14.290Z"),
                sizeReadable: "<value>",
            },
        ],
        pagination: {
            totalCount: 359978,
            maxPage: 944124,
        },
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceFileRead](../../models/components/listresourcefileread.md) | :heavy_check_mark:                                                                 | N/A                                                                                |