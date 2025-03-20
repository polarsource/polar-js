# ListResourceRefund

## Example Usage

```typescript
import { ListResourceRefund } from "@polar-sh/sdk/models/components/listresourcerefund.js";

let value: ListResourceRefund = {
  items: [
    {
      createdAt: new Date("2024-03-16T13:29:00.491Z"),
      modifiedAt: new Date("2024-05-16T23:21:07.043Z"),
      id: "<value>",
      metadata: {
        "key": 211031,
      },
      status: "pending",
      reason: "satisfaction_guarantee",
      amount: 151557,
      taxAmount: 281986,
      currency: "Azerbaijanian Manat",
      organizationId: "<value>",
      orderId: "<value>",
      subscriptionId: "<value>",
      customerId: "<value>",
      revokeBenefits: false,
    },
  ],
  pagination: {
    totalCount: 218108,
    maxPage: 37808,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Refund](../../models/components/refund.md)[]       | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |