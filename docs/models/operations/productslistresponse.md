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
              createdAt: new Date("2023-10-09T02:00:40.564Z"),
              modifiedAt: new Date("2025-12-28T07:21:00.728Z"),
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
            order: 922916,
            required: false,
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