# RefundsListResponse

## Example Usage

```typescript
import { RefundsListResponse } from "@polar-sh/sdk/models/operations/refundslist.js";

let value: RefundsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-09-01T07:38:52.026Z"),
        modifiedAt: new Date("2025-08-12T03:02:25.209Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "canceled",
        reason: "customer_request",
        amount: 888997,
        taxAmount: 72274,
        currency: "Belarusian Ruble",
        organizationId: "<value>",
        orderId: "<value>",
        subscriptionId: "<value>",
        customerId: "<value>",
        revokeBenefits: false,
      },
    ],
    pagination: {
      totalCount: 441396,
      maxPage: 47672,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListResourceRefund](../../models/components/listresourcerefund.md) | :heavy_check_mark:                                                             | N/A                                                                            |