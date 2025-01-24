# ListResourceRefund

## Example Usage

```typescript
import { ListResourceRefund } from "@polar-sh/sdk/models/components";

let value: ListResourceRefund = {
  items: [
    {
      createdAt: new Date("2025-11-20T03:04:46.867Z"),
      modifiedAt: new Date("2024-05-05T08:47:07.031Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      status: "succeeded",
      reason: "service_disruption",
      amount: 499202,
      taxAmount: 612688,
      currency: "Rwanda Franc",
      organizationId: "<value>",
      orderId: "<value>",
      subscriptionId: "<value>",
      customerId: "<value>",
      revokeBenefits: false,
    },
  ],
  pagination: {
    totalCount: 663909,
    maxPage: 762104,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Refund](../../models/components/refund.md)[]       | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |