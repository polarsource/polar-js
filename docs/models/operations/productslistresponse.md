# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-08-28T05:51:37.779Z"),
        modifiedAt: new Date("2024-07-01T17:25:22.386Z"),
        id: "<value>",
        name: "<value>",
        description: "times within giant correctly hm concrete er regulate",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2023-04-15T23:01:39.719Z"),
            modifiedAt: new Date("2022-04-19T20:11:24.529Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-11-27T06:42:45.352Z"),
            modifiedAt: new Date("2024-01-19T07:26:54.119Z"),
            id: "<value>",
            description: "probe spirit blah",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              prefix: "<value>",
              expires: {
                ttl: 231987,
                timeframe: "month",
              },
              activations: {
                limit: 156726,
                enableCustomerAdmin: false,
              },
              limitUsage: 159487,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/etc/ppp",
            mimeType: "<value>",
            size: 551520,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-05-11T20:26:56.364Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-11-13T18:42:06.711Z"),
            sizeReadable: "<value>",
            publicUrl: "https://petty-decongestant.biz",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-05-01T09:46:08.628Z"),
              modifiedAt: new Date("2023-06-29T11:49:18.398Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 873718,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 395697,
      maxPage: 609610,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |