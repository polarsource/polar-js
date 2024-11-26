# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "forever",
        durationInMonths: 134267,
        type: "percentage",
        basisPoints: 574990,
        createdAt: new Date("2024-03-21T23:18:55.780Z"),
        modifiedAt: new Date("2024-02-12T07:29:56.575Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2022-11-20T15:45:49.704Z"),
        endsAt: new Date("2024-02-13T00:23:21.664Z"),
        maxRedemptions: 365676,
        redemptionsCount: 395411,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2022-09-10T17:33:40.761Z"),
            modifiedAt: new Date("2023-01-13T00:50:37.177Z"),
            id: "<value>",
            name: "<value>",
            description:
              "enlightened wide solemnly lest onto closely arcade offend poorly square",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 830197,
      maxPage: 842935,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |