# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-11-21T10:38:18.727Z"),
        modifiedAt: new Date("2023-02-14T21:08:31.136Z"),
        id: "<value>",
        name: "<value>",
        description: "secret deny gosh summary molasses boohoo",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        prices: [
          {
            createdAt: new Date("2024-07-24T14:04:05.326Z"),
            modifiedAt: new Date("2024-09-01T23:17:16.509Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-09-08T06:21:23.364Z"),
            modifiedAt: new Date("2024-09-23T00:28:40.141Z"),
            id: "<value>",
            description: "tectonics fowl husk diagram conjecture",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              repositoryOwner: "polarsource",
              repositoryName: "private_repo",
              permission: "maintain",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/opt/lib",
            mimeType: "<value>",
            size: 239376,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-08-02T08:02:13.737Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-07-03T16:53:40.680Z"),
            sizeReadable: "<value>",
            publicUrl: "https://illiterate-nucleotidase.info",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-04-11T09:52:16.670Z"),
              modifiedAt: new Date("2023-02-21T05:24:54.252Z"),
              id: "<value>",
              metadata: {
                "key": 968822,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 850425,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 295674,
      maxPage: 610935,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |