# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-26T16:08:08.795Z"),
        modifiedAt: new Date("2024-11-12T19:38:06.759Z"),
        id: "<value>",
        name: "<value>",
        description: "edible ah twine modulo plugin",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-12-02T08:02:45.129Z"),
            modifiedAt: new Date("2023-01-06T22:15:28.403Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 615424,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-07-10T07:56:36.061Z"),
            modifiedAt: new Date("2022-05-07T04:35:09.639Z"),
            id: "<value>",
            description:
              "wrathful hastily investigate even mushy or ack roughly normal",
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
            size: 845238,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-05-15T03:47:55.638Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-04-12T13:59:28.660Z"),
            sizeReadable: "<value>",
            publicUrl: "https://trusting-hygienic.com/",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 611485,
      maxPage: 995830,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |