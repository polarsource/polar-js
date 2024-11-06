# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-05-08T15:26:57.975Z"),
        modifiedAt: new Date("2022-06-28T20:19:53.694Z"),
        id: "<value>",
        name: "<value>",
        description: "spew ick fondly aside cake uh-huh while instead",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-06-19T06:00:22.932Z"),
            modifiedAt: new Date("2022-12-09T16:59:37.115Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 884325,
            maximumAmount: 958533,
            presetAmount: 207512,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-10-27T14:09:54.597Z"),
            modifiedAt: new Date("2024-08-30T07:06:29.227Z"),
            id: "<value>",
            description: "forenenst lazily afore spring",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              archived: {
                "key": false,
              },
              files: [
                "<value>",
              ],
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/Users",
            mimeType: "<value>",
            size: 59023,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-06-07T20:03:48.485Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-11-20T00:29:10.889Z"),
            sizeReadable: "<value>",
            publicUrl: "https://simplistic-meander.org",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-08-23T10:58:27.936Z"),
              modifiedAt: new Date("2022-11-18T19:17:48.581Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 968205,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 226196,
      maxPage: 15738,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |