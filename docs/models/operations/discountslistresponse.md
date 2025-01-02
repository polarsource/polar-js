# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        durationInMonths: 610935,
        type: "fixed",
        basisPoints: 584575,
        createdAt: new Date("2024-09-07T16:45:09.899Z"),
        modifiedAt: new Date("2025-03-14T14:49:55.703Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-04-18T19:47:29.352Z"),
        endsAt: new Date("2024-09-26T16:42:50.105Z"),
        maxRedemptions: 8088,
        redemptionsCount: 271660,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2024-06-16T19:37:34.527Z"),
            modifiedAt: new Date("2023-07-17T20:04:23.072Z"),
            id: "<value>",
            name: "<value>",
            description:
              "democratize immaculate packaging for boohoo gosh terrorise official",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 50203,
      maxPage: 884662,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |