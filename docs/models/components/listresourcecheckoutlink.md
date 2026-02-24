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
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [],
      discount: {
        duration: "forever",
        durationInMonths: 300165,
        type: "fixed",
        amount: 1000,
        currency: "usd",
        createdAt: new Date("2024-05-28T14:09:28.797Z"),
        modifiedAt: null,
        id: "<value>",
        metadata: {},
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-01-13T13:43:10.078Z"),
        endsAt: new Date("2025-08-25T16:24:44.378Z"),
        maxRedemptions: 731444,
        redemptionsCount: 88175,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      url: "https://sticky-meal.name/",
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