# PaymentsListResponse

## Example Usage

```typescript
import { PaymentsListResponse } from "@polar-sh/sdk/models/operations/paymentslist.js";

let value: PaymentsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-09-01T19:35:02.636Z"),
        modifiedAt: new Date("2023-10-02T09:20:49.220Z"),
        id: "<value>",
        processor: "stripe",
        status: "succeeded",
        amount: 1000,
        currency: "usd",
        method: "card",
        declineReason: "insufficient_funds",
        declineMessage: "Your card has insufficient funds.",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        checkoutId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
        orderId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
      },
    ],
    pagination: {
      totalCount: 279990,
      maxPage: 718643,
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `result`                                                           | [components.ListResource](../../models/components/listresource.md) | :heavy_check_mark:                                                 | N/A                                                                |