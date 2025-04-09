# ListResourceRefund

## Example Usage

```typescript
import { ListResourceRefund } from "@polar-sh/sdk/models/components/listresourcerefund.js";

let value: ListResourceRefund = {
  items: [
    {
      createdAt: new Date("2023-09-24T05:07:15.062Z"),
      modifiedAt: new Date("2025-09-08T17:29:42.903Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      status: "canceled",
      reason: "fraudulent",
      amount: 299744,
      taxAmount: 368337,
      currency: "Pa'anga",
      organizationId: "<value>",
      orderId: "<value>",
      subscriptionId: "<value>",
      customerId: "<value>",
      revokeBenefits: false,
    },
  ],
  pagination: {
    totalCount: 949677,
    maxPage: 352874,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Refund](../../models/components/refund.md)[]       | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |