# ListResourceRefund

## Example Usage

```typescript
import { ListResourceRefund } from "@polar-sh/sdk/models/components/listresourcerefund.js";

let value: ListResourceRefund = {
  items: [
    {
      createdAt: new Date("2024-06-07T15:58:42.261Z"),
      modifiedAt: new Date("2025-03-06T23:05:20.752Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      status: "failed",
      reason: "service_disruption",
      amount: 122858,
      taxAmount: 351607,
      currency: "US Dollar",
      organizationId: "<value>",
      orderId: "<value>",
      subscriptionId: "<value>",
      customerId: "<value>",
      revokeBenefits: false,
    },
  ],
  pagination: {
    totalCount: 690215,
    maxPage: 731671,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Refund](../../models/components/refund.md)[]       | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |