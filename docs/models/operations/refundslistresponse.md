# RefundsListResponse

## Example Usage

```typescript
import { RefundsListResponse } from "@polar-sh/sdk/models/operations/refundslist.js";

let value: RefundsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-04-19T13:54:12.716Z"),
        modifiedAt: new Date("2024-10-30T22:59:40.030Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "canceled",
        reason: "service_disruption",
        amount: 413686,
        taxAmount: 933688,
        currency: "Mexican Peso",
        organizationId: "<value>",
        orderId: "<value>",
        subscriptionId: "<value>",
        customerId: "<value>",
        revokeBenefits: false,
      },
    ],
    pagination: {
      totalCount: 722181,
      maxPage: 930324,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListResourceRefund](../../models/components/listresourcerefund.md) | :heavy_check_mark:                                                             | N/A                                                                            |