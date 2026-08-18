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
        duration: "repeating",
        durationInMonths: 666109,
        type: "fixed",
        basisPoints: 1000,
        createdAt: new Date("2024-10-05T07:02:31.892Z"),
        modifiedAt: new Date("2026-10-02T11:08:34.577Z"),
        id: "<value>",
        metadata: {},
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-11-16T04:34:50.055Z"),
        endsAt: new Date("2025-09-03T17:18:10.818Z"),
        maxRedemptions: 898588,
        maxRedemptionsPerCustomer: 833113,
        redemptionsCount: 669829,
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