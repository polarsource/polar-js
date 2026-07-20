# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2024-07-05T14:44:50.101Z"),
      modifiedAt: new Date("2025-02-03T11:19:52.791Z"),
      trialInterval: "year",
      trialIntervalCount: null,
      metadata: {
        "key": "<value>",
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://rapid-doorpost.info",
      returnUrl: "https://frail-pillow.org/",
      label: "<value>",
      allowDiscountCodes: true,
      requireBillingAddress: true,
      discountId: "<value>",
      seats: 843698,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [],
      discount: {
        duration: "forever",
        durationInMonths: 512941,
        type: "percentage",
        basisPoints: 1000,
        createdAt: new Date("2025-09-10T06:40:54.106Z"),
        modifiedAt: new Date("2024-01-31T08:21:51.249Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2026-08-31T01:51:15.661Z"),
        endsAt: new Date("2025-11-20T14:47:41.680Z"),
        maxRedemptions: 517918,
        redemptionsCount: 79420,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      url: "https://hasty-fort.net/",
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |