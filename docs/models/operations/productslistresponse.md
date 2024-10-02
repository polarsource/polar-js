# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-04-24T03:58:21.779Z"),
        modifiedAt: new Date("2023-07-23T22:22:42.601Z"),
        id: "<value>",
        name: "<value>",
        description: "providence until gracious",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-04-12T13:59:28.660Z"),
            modifiedAt: new Date("2023-05-14T13:48:07.162Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            minimumAmount: 871969,
            maximumAmount: 448282,
            presetAmount: 14349,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-12-27T10:18:44.676Z"),
            modifiedAt: new Date("2024-06-14T16:54:24.317Z"),
            id: "<value>",
            description: "baggy horn evince black though opposite wisely",
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
            path: "/usr/local/bin",
            mimeType: "<value>",
            size: 826431,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-11-11T11:55:26.243Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-03-03T04:19:36.988Z"),
            sizeReadable: "<value>",
            publicUrl: "https://round-pine.org",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 288348,
      maxPage: 291361,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |