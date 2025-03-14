# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "repeating",
        type: "percentage",
        amount: 669784,
        currency: "Bahamian Dollar",
        createdAt: new Date("2024-12-24T14:04:06.848Z"),
        modifiedAt: new Date("2024-02-16T06:49:59.233Z"),
        id: "<value>",
        metadata: {
          "key": 418580,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-03-17T16:42:07.584Z"),
        endsAt: new Date("2023-02-14T07:01:21.736Z"),
        maxRedemptions: 164203,
        redemptionsCount: 432046,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2024-10-20T17:37:49.641Z"),
            modifiedAt: new Date("2023-01-24T14:37:59.472Z"),
            id: "<value>",
            name: "<value>",
            description:
              "obsess failing out gah see advancement mythology at navigate",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 603276,
      maxPage: 188104,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |