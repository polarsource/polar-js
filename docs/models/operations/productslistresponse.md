# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-10-13T07:38:25.603Z"),
        modifiedAt: new Date("2025-01-08T05:45:15.386Z"),
        id: "<value>",
        name: "<value>",
        description:
          "tempting quarrelsomely psst diagram teammate symbolise fly but pace",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2024-05-24T17:47:39.031Z"),
            modifiedAt: new Date("2025-12-05T20:05:21.071Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-11-04T16:47:59.668Z"),
            modifiedAt: new Date("2023-06-19T18:05:51.709Z"),
            id: "<value>",
            description: "properly provided stint eek until round before",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              repositoryOwner: "polarsource",
              repositoryName: "private_repo",
              permission: "admin",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/net",
            mimeType: "<value>",
            size: 767901,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-03-03T11:20:28.042Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-10-14T06:40:40.648Z"),
            sizeReadable: "<value>",
            publicUrl: "https://milky-gym.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-08-22T14:27:50.295Z"),
              modifiedAt: new Date("2025-02-28T08:58:51.789Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 456609,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 729948,
      maxPage: 850554,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |