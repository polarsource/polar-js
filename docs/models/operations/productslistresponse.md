# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-25T00:23:12.517Z"),
        modifiedAt: new Date("2022-11-21T13:20:41.827Z"),
        id: "<value>",
        name: "<value>",
        description: "coolly gee punctually lavish wherever needily",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2022-03-05T11:14:44.230Z"),
            modifiedAt: new Date("2022-11-16T08:41:29.527Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-11-14T08:56:10.067Z"),
            modifiedAt: new Date("2024-01-02T05:12:31.175Z"),
            id: "<value>",
            description:
              "hateful faithfully steel promptly pull optimistically monthly searchingly forgather wherever",
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
            size: 350271,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-10-05T00:47:16.247Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-11-19T00:00:04.743Z"),
            sizeReadable: "<value>",
            publicUrl: "https://robust-appliance.name",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-01-08T18:00:36.094Z"),
              modifiedAt: new Date("2022-03-17T04:22:16.108Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 357984,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 435142,
      maxPage: 590927,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |