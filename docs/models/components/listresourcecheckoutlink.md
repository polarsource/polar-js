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
          visibility: "draft",
          recurringInterval: "year",
          recurringIntervalCount: 95351,
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2024-03-14T00:55:02.549Z"),
              modifiedAt: new Date("2024-09-16T13:02:40.897Z"),
              type: "custom",
              description: "considering speedily for into across extricate",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [],
        },
      ],
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
      url: "https://superficial-bug.com",
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