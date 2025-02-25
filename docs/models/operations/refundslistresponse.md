# RefundsListResponse

## Example Usage

```typescript
import { RefundsListResponse } from "@polar-sh/sdk/models/operations/refundslist.js";

let value: RefundsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-19T03:43:24.175Z"),
        modifiedAt: new Date("2023-05-27T09:15:03.118Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        status: "pending",
        reason: "fraudulent",
        amount: 555193,
        taxAmount: 701634,
        currency: "Pound Sterling",
        organizationId: "<value>",
        orderId: "<value>",
        subscriptionId: "<value>",
        customerId: "<value>",
        revokeBenefits: false,
      },
    ],
    pagination: {
      totalCount: 37195,
      maxPage: 624782,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListResourceRefund](../../models/components/listresourcerefund.md) | :heavy_check_mark:                                                             | N/A                                                                            |