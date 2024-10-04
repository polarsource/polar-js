# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-07-15T03:50:42.259Z"),
        modifiedAt: new Date("2024-12-02T08:02:45.129Z"),
        id: "<value>",
        name: "<value>",
        description: "yawningly limp as uncover sleepily",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-02-27T19:43:42.467Z"),
            modifiedAt: new Date("2024-10-30T08:26:55.656Z"),
            id: "<value>",
            isArchived: false,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-12-20T21:44:54.690Z"),
            modifiedAt: new Date("2023-01-14T22:29:55.353Z"),
            id: "<value>",
            description: "loftily seafood jive boo singe that",
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
            path: "/boot/defaults",
            mimeType: "<value>",
            size: 774804,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-05-06T11:07:49.747Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-12-26T05:38:43.189Z"),
            sizeReadable: "<value>",
            publicUrl: "https://natural-co-producer.info",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 76873,
      maxPage: 689301,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |