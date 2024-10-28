# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-10-25T14:52:48.050Z"),
        modifiedAt: new Date("2023-10-28T20:52:23.318Z"),
        id: "<value>",
        name: "<value>",
        description: "skeleton yuck cooperative till though awkwardly gadzooks",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-12-10T14:11:23.041Z"),
            modifiedAt: new Date("2023-10-08T04:10:09.540Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 45510,
            maximumAmount: 197982,
            presetAmount: 404774,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-04-26T00:52:10.331Z"),
            modifiedAt: new Date("2023-03-29T17:49:02.841Z"),
            id: "<value>",
            description:
              "shy bug testing list zealous vastly fledgling facilitate",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              paidArticles: false,
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
            size: 19691,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-02-14T19:10:20.351Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-10-10T13:44:30.649Z"),
            sizeReadable: "<value>",
            publicUrl: "https://practical-runway.net",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 856568,
      maxPage: 720319,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |