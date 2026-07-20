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
        meterInterval: "day",
        meterIntervalCount: 141859,
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        metadata: {
          "key": 2558.11,
        },
        prices: [
          {
            createdAt: new Date("2026-04-05T19:49:10.725Z"),
            modifiedAt: new Date("2025-02-05T13:17:11.278Z"),
            id: "<value>",
            source: "ad_hoc",
            amountType: "custom",
            priceCurrency: "<value>",
            taxBehavior: "location",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "week",
            minimumAmount: 496592,
            maximumAmount: 797456,
            presetAmount: 833109,
            legacy: true,
          },
        ],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/var/yp",
            mimeType: "<value>",
            size: 772025,
            storageVersion: null,
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-10-14T04:04:24.781Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: false,
            createdAt: new Date("2026-03-20T16:38:16.465Z"),
            sizeReadable: "<value>",
            publicUrl: "https://esteemed-coal.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-06-02T04:10:19.278Z"),
              modifiedAt: new Date("2025-08-16T21:21:02.814Z"),
              id: "<value>",
              metadata: {
                "key": 488238,
              },
              type: "number",
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 275070,
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