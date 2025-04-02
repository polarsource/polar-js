# ListResourceRefund

## Example Usage

```typescript
import { ListResourceRefund } from "@polar-sh/sdk/models/components/listresourcerefund.js";

let value: ListResourceRefund = {
  items: [
    {
      createdAt: new Date("2024-11-04T12:08:37.220Z"),
      modifiedAt: new Date("2025-10-26T06:09:24.035Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      status: "failed",
      reason: "service_disruption",
      amount: 650391,
      taxAmount: 924966,
      currency: "Zambian Kwacha",
      organizationId: "<value>",
      orderId: "<value>",
      subscriptionId: "<value>",
      customerId: "<value>",
      revokeBenefits: false,
    },
  ],
  pagination: {
    totalCount: 33090,
    maxPage: 969553,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Refund](../../models/components/refund.md)[]       | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |