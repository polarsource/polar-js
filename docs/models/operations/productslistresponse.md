# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2025-04-08T02:10:23.808Z"),
        modifiedAt: new Date("2026-01-20T07:32:44.012Z"),
        trialInterval: "month",
        trialIntervalCount: 175754,
        name: "<value>",
        description: "unlined why alongside beyond sandy softly",
        visibility: "draft",
        recurringInterval: "year",
        recurringIntervalCount: 559575,
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2025-11-03T13:15:47.525Z"),
            modifiedAt: new Date("2026-12-24T03:50:27.310Z"),
            id: "<value>",
            source: "catalog",
            amountType: "free",
            priceCurrency: "<value>",
            taxBehavior: null,
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
            path: "/usr/libexec",
            mimeType: "<value>",
            size: 238122,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2026-06-12T01:48:20.505Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2026-06-20T18:25:36.529Z"),
            sizeReadable: "<value>",
            publicUrl: "https://sophisticated-affect.biz",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2026-07-16T19:04:19.230Z"),
              modifiedAt: new Date("2025-02-05T20:03:25.495Z"),
              id: "<value>",
              metadata: {
                "key": 6988.1,
              },
              type: "text",
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 235618,
            required: true,
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