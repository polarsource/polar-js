# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-10-26T06:52:39.499Z"),
        modifiedAt: new Date("2025-05-17T21:20:13.788Z"),
        id: "<value>",
        name: "<value>",
        description: "heavy aha dimly deduct amnesty swath likewise zowie nor",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2025-01-30T09:06:03.992Z"),
            modifiedAt: new Date("2023-10-04T08:23:30.297Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-01-05T21:57:51.624Z"),
            modifiedAt: new Date("2025-10-12T15:13:45.035Z"),
            id: "<value>",
            description: "merrily whenever knife knowledgeably pillory cellar",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              repositoryOwner: "polarsource",
              repositoryName: "private_repo",
              permission: "pull",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/proc",
            mimeType: "<value>",
            size: 47637,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-03-17T02:39:34.219Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-03-31T13:21:21.860Z"),
            sizeReadable: "<value>",
            publicUrl: "https://marvelous-dish.name",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-10-16T19:49:07.268Z"),
              modifiedAt: new Date("2025-04-07T12:40:12.871Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 97672,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 926284,
      maxPage: 956054,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |