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
        duration: "once",
        durationInMonths: 322913,
        type: "percentage",
        basisPoints: 1000,
        createdAt: new Date("2026-09-28T19:56:37.285Z"),
        modifiedAt: new Date("2026-09-30T21:17:04.789Z"),
        id: "<value>",
        metadata: {},
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-11-20T23:12:51.407Z"),
        endsAt: new Date("2024-01-07T14:45:36.833Z"),
        maxRedemptions: 131658,
        redemptionsCount: 758621,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      url: "https://messy-vista.name",
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