# RefundsListResponse

## Example Usage

```typescript
import { RefundsListResponse } from "@polar-sh/sdk/models/operations";

let value: RefundsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-02-14T21:08:31.136Z"),
        modifiedAt: new Date("2024-03-25T08:40:52.618Z"),
        id: "<value>",
        metadata: {
          "key": 514627,
        },
        status: "pending",
        reason: "customer_request",
        amount: 711148,
        taxAmount: 777583,
        currency: "Russian Ruble",
        organizationId: "<value>",
        orderId: "<value>",
        subscriptionId: "<value>",
        customerId: "<value>",
        revokeBenefits: false,
      },
    ],
    pagination: {
      totalCount: 16754,
      maxPage: 675549,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListResourceRefund](../../models/components/listresourcerefund.md) | :heavy_check_mark:                                                             | N/A                                                                            |