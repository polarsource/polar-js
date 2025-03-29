# ListResourceRefund

## Example Usage

```typescript
import { ListResourceRefund } from "@polar-sh/sdk/models/components/listresourcerefund.js";

let value: ListResourceRefund = {
  items: [
    {
      createdAt: new Date("2024-03-10T21:34:54.948Z"),
      modifiedAt: new Date("2024-11-19T02:39:06.531Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      status: "canceled",
      reason: "other",
      amount: 960693,
      taxAmount: 115886,
      currency: "Zambian Kwacha",
      organizationId: "<value>",
      orderId: "<value>",
      subscriptionId: "<value>",
      customerId: "<value>",
      revokeBenefits: false,
    },
  ],
  pagination: {
    totalCount: 200301,
    maxPage: 80904,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Refund](../../models/components/refund.md)[]       | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |