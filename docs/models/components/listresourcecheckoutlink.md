# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2023-07-06T14:44:50.101Z"),
      modifiedAt: new Date("2024-02-04T11:19:52.791Z"),
      id: "<value>",
      metadata: {
        "key": true,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://difficult-reach.name/",
      label: "<value>",
      allowDiscountCodes: true,
      requireBillingAddress: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [],
      discount: {
        duration: "repeating",
        durationInMonths: 13743,
        type: "fixed",
        basisPoints: 110523,
        createdAt: new Date("2023-08-01T09:40:42.240Z"),
        modifiedAt: new Date("2023-12-01T00:52:44.646Z"),
        id: "<value>",
        metadata: {
          "key": true,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-03-19T17:06:47.406Z"),
        endsAt: new Date("2023-04-18T15:08:06.320Z"),
        maxRedemptions: 570348,
        redemptionsCount: 853799,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      url: "https://flowery-effector.name",
    },
  ],
  pagination: {
    totalCount: 607201,
    maxPage: 808600,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |