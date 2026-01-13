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
      label: "<value>",
      allowDiscountCodes: true,
      requireBillingAddress: true,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          metadata: {
            "key": 286697,
          },
          id: "<value>",
          createdAt: new Date("2025-08-04T15:56:23.244Z"),
          modifiedAt: new Date("2026-07-13T16:36:37.984Z"),
          trialInterval: "week",
          trialIntervalCount: 560922,
          name: "<value>",
          description:
            "roughly lest sternly while metabolise hence who lasting wee spherical",
          recurringInterval: "month",
          recurringIntervalCount: 866095,
          isRecurring: true,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-06-23T04:46:35.152Z"),
              modifiedAt: new Date("2025-05-30T10:02:42.927Z"),
              id: "<value>",
              source: "ad_hoc",
              amountType: "free",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "day",
              legacy: true,
            },
          ],
          benefits: [],
          medias: [],
        },
      ],
      discount: {
        duration: "repeating",
        type: "percentage",
        amount: 1000,
        currency: "usd",
        createdAt: new Date("2025-04-08T09:15:27.816Z"),
        modifiedAt: new Date("2026-10-02T19:46:14.425Z"),
        id: "<value>",
        metadata: {
          "key": 2173.06,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-07-22T01:23:46.436Z"),
        endsAt: new Date("2024-10-24T03:56:27.220Z"),
        maxRedemptions: 50796,
        redemptionsCount: 458242,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      url: "https://striking-formamide.org/",
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