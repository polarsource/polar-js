# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2024-04-08T02:10:23.808Z"),
        modifiedAt: new Date("2025-01-20T07:32:44.012Z"),
        trialInterval: "month",
        trialIntervalCount: 175754,
        name: "<value>",
        description: "unlined why alongside beyond sandy softly",
        recurringInterval: "year",
        recurringIntervalCount: 324286,
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {},
        prices: [
          {
            createdAt: new Date("2024-01-20T19:38:49.234Z"),
            modifiedAt: new Date("2024-11-03T13:15:47.525Z"),
            id: "<value>",
            source: "catalog",
            amountType: "free",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "week",
            legacy: true,
          },
        ],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/opt/bin",
            mimeType: "<value>",
            size: 366381,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-06-28T06:21:21.363Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: false,
            createdAt: new Date("2025-06-12T01:48:20.505Z"),
            sizeReadable: "<value>",
            publicUrl: "https://entire-slipper.org",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-12-03T03:18:51.837Z"),
              modifiedAt: new Date("2025-09-25T14:22:13.198Z"),
              id: "<value>",
              metadata: {
                "key": 3666.38,
              },
              type: "checkbox",
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 979536,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 296266,
      maxPage: 544155,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |