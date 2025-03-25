# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "repeating",
        durationInMonths: 204224,
        type: "fixed",
        basisPoints: 368846,
        createdAt: new Date("2023-12-16T01:31:03.204Z"),
        modifiedAt: new Date("2023-11-27T21:08:07.204Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-10-28T11:54:08.670Z"),
        endsAt: new Date("2024-08-25T19:40:31.835Z"),
        maxRedemptions: 61550,
        redemptionsCount: 311725,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2024-01-21T02:11:47.557Z"),
            modifiedAt: new Date("2023-05-05T10:12:38.655Z"),
            id: "<value>",
            name: "<value>",
            description:
              "if dispense pillory developmental inventory coaxingly verbally",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 294082,
      maxPage: 555193,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |