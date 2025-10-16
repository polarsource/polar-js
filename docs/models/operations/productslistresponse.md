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
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        metadata: {
          "key": true,
        },
        prices: [
          {
            createdAt: new Date("2024-01-20T19:38:49.234Z"),
            modifiedAt: new Date("2024-11-03T13:15:47.525Z"),
            id: "<value>",
            amountType: "free",
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
              createdAt: new Date("2023-06-16T00:40:28.022Z"),
              modifiedAt: new Date("2025-09-07T23:37:19.259Z"),
              id: "<value>",
              metadata: {
                "key": 931.08,
              },
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
            order: 448574,
            required: true,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 607201,
      maxPage: 808600,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |