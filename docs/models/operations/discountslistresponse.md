# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "forever",
        durationInMonths: 63369,
        type: "fixed",
        amount: 722500,
        currency: "Dominican Peso",
        createdAt: new Date("2024-10-31T10:26:27.251Z"),
        modifiedAt: new Date("2024-01-23T17:08:58.929Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-04-22T19:44:51.587Z"),
        endsAt: new Date("2022-04-02T03:33:58.167Z"),
        maxRedemptions: 974775,
        redemptionsCount: 49285,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2024-10-20T01:37:25.539Z"),
            modifiedAt: new Date("2022-10-05T03:04:06.241Z"),
            id: "<value>",
            name: "<value>",
            description:
              "concerning whereas healthily to indeed monasticism ugh and slide",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 230774,
      maxPage: 325924,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |