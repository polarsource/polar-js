# RefundsListResponse

## Example Usage

```typescript
import { RefundsListResponse } from "@polar-sh/sdk/models/operations/refundslist.js";

let value: RefundsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-03-23T19:55:15.274Z"),
        modifiedAt: new Date("2023-05-12T05:27:49.525Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "failed",
        reason: "fraudulent",
        amount: 302200,
        taxAmount: 600071,
        currency: "Algerian Dinar",
        organizationId: "<value>",
        orderId: "<value>",
        subscriptionId: "<value>",
        customerId: "<value>",
        revokeBenefits: false,
      },
    ],
    pagination: {
      totalCount: 16031,
      maxPage: 305512,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListResourceRefund](../../models/components/listresourcerefund.md) | :heavy_check_mark:                                                             | N/A                                                                            |