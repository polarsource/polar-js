# ListResourcePayment

## Example Usage

```typescript
import { ListResourcePayment } from "@polar-sh/sdk/models/components/listresourcepayment.js";

let value: ListResourcePayment = {
  items: [
    {
      createdAt: new Date("2026-10-11T05:05:19.069Z"),
      modifiedAt: new Date("2024-06-16T13:44:42.115Z"),
      id: "<value>",
      processor: "stripe",
      status: "failed",
      amount: 1000,
      currency: "usd",
      method: "card",
      declineReason: "insufficient_funds",
      declineMessage: "Your card has insufficient funds.",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      checkoutId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
      orderId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
      methodMetadata: {
        brand: "visa",
        last4: "4242",
      },
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Payment*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |