# RefundsListResponse

## Example Usage

```typescript
import { RefundsListResponse } from "@polar-sh/sdk/models/operations/refundslist.js";

let value: RefundsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-27T11:31:24.359Z"),
        modifiedAt: new Date("2025-10-14T09:25:12.471Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        status: "canceled",
        reason: "customer_request",
        amount: 546371,
        taxAmount: 69221,
        currency: "Dominican Peso",
        organizationId: "<value>",
        orderId: "<value>",
        subscriptionId: "<value>",
        customerId: "<value>",
        revokeBenefits: false,
      },
    ],
    pagination: {
      totalCount: 856828,
      maxPage: 49393,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListResourceRefund](../../models/components/listresourcerefund.md) | :heavy_check_mark:                                                             | N/A                                                                            |