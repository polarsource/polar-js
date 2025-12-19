# RefundsListResponse

## Example Usage

```typescript
import { RefundsListResponse } from "@polar-sh/sdk/models/operations/refundslist.js";

let value: RefundsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-30T22:59:40.030Z"),
        modifiedAt: new Date("2025-08-14T03:01:16.173Z"),
        id: "<value>",
        metadata: {
          "key": 933688,
        },
        status: "failed",
        reason: "dispute_prevention",
        amount: 930324,
        taxAmount: 181026,
        currency: "Mauritius Rupee",
        organizationId: "<value>",
        orderId: "<value>",
        subscriptionId: "<value>",
        customerId: "<value>",
        revokeBenefits: false,
        dispute: {
          createdAt: new Date("2025-01-29T09:21:00.593Z"),
          modifiedAt: new Date("2023-12-04T04:55:20.270Z"),
          id: "<value>",
          status: "prevented",
          resolved: false,
          closed: false,
          amount: 1000,
          taxAmount: 200,
          currency: "usd",
          orderId: "57107b74-8400-4d80-a2fc-54c2b4239cb3",
          paymentId: "42b94870-36b9-4573-96b6-b90b1c99a353",
        },
      },
    ],
    pagination: {
      totalCount: 296266,
      maxPage: 544155,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListResourceRefund](../../models/components/listresourcerefund.md) | :heavy_check_mark:                                                             | N/A                                                                            |