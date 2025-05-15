# ListResource

## Example Usage

```typescript
import { ListResource } from "@polar-sh/sdk/models/components/listresource.js";

let value: ListResource = {
  items: [
    {
      createdAt: new Date("2024-02-08T06:05:08.175Z"),
      modifiedAt: new Date("2024-08-26T08:03:32.784Z"),
      id: "<value>",
      processor: "stripe",
      status: "succeeded",
      amount: 1000,
      currency: "usd",
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
    totalCount: 338516,
    maxPage: 194962,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Payment*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |