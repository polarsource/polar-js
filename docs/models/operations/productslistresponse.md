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
            priceCurrency: "usd",
            isArchived: true,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            legacy: true,
          },
        ],
        benefits: [],
        medias: [],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-09-17T23:34:10.111Z"),
              modifiedAt: new Date("2025-04-12T21:32:26.120Z"),
              id: "<value>",
              metadata: {},
              type: "select",
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 797456,
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