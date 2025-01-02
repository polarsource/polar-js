# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-10-01T21:33:32.957Z"),
        modifiedAt: new Date("2025-09-28T16:24:17.935Z"),
        id: "<value>",
        name: "<value>",
        description: "against depend although offensively alliance",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        prices: [
          {
            createdAt: new Date("2025-07-11T05:15:47.275Z"),
            modifiedAt: new Date("2023-06-21T05:44:00.806Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-08-05T04:22:38.604Z"),
            modifiedAt: new Date("2024-01-28T21:34:54.077Z"),
            id: "<value>",
            description: "because fencing maul but from",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {},
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/proc",
            mimeType: "<value>",
            size: 90205,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-12-11T14:27:58.846Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-12-03T06:25:18.097Z"),
            sizeReadable: "<value>",
            publicUrl: "https://authorized-cook.name",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-03-30T16:46:12.008Z"),
              modifiedAt: new Date("2023-01-30T13:17:24.903Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 290128,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 364789,
      maxPage: 455531,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |