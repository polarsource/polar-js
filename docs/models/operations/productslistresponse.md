# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-09T10:04:08.807Z"),
        modifiedAt: new Date("2024-07-19T01:41:16.881Z"),
        id: "<value>",
        name: "<value>",
        description: "although pear general coop barring",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2022-05-05T12:03:21.760Z"),
            modifiedAt: new Date("2024-08-15T14:15:58.232Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 395697,
            maximumAmount: 609610,
            presetAmount: 974618,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-07-11T20:33:26.772Z"),
            modifiedAt: new Date("2024-09-21T23:39:35.603Z"),
            id: "<value>",
            description:
              "although righteously airline psst forecast lest sell now even rundown",
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
            path: "/private",
            mimeType: "<value>",
            size: 228869,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-08-28T00:24:16.627Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-01-24T23:25:23.825Z"),
            sizeReadable: "<value>",
            publicUrl: "https://gullible-reward.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2022-02-17T03:45:50.562Z"),
              modifiedAt: new Date("2023-10-13T18:11:53.175Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 697365,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 791972,
      maxPage: 412393,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |