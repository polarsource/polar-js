# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-01-20T19:32:27.742Z"),
        modifiedAt: new Date("2024-01-22T16:24:11.216Z"),
        id: "<value>",
        name: "<value>",
        description:
          "pish including since neat because oval phooey fervently ugh",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2024-12-22T12:29:01.001Z"),
            modifiedAt: new Date("2025-08-05T04:18:33.269Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-05-29T03:09:24.790Z"),
            modifiedAt: new Date("2023-10-11T02:48:00.542Z"),
            id: "<value>",
            description: "silky only clamp parody clean tuba",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              note: "<value>",
            },
            isTaxApplicable: false,
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/root",
            mimeType: "<value>",
            size: 177134,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-03-24T10:58:16.071Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-11-12T23:45:49.092Z"),
            sizeReadable: "<value>",
            publicUrl: "https://linear-brochure.org",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-08-16T09:00:14.604Z"),
              modifiedAt: new Date("2024-03-03T15:13:15.380Z"),
              id: "<value>",
              metadata: {
                "key": 479422,
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
            order: 983199,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 389982,
      maxPage: 815604,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |