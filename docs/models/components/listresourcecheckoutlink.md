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
        duration: "forever",
        durationInMonths: 75972,
        type: "fixed",
        basisPoints: 318562,
        createdAt: new Date("2025-11-15T04:46:36.215Z"),
        modifiedAt: new Date("2025-12-18T11:14:27.994Z"),
        id: "<value>",
        metadata: {},
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-04-27T01:57:17.453Z"),
        endsAt: null,
        maxRedemptions: 416834,
        redemptionsCount: 667167,
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