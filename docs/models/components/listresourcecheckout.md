# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2022-12-12T10:04:21.339Z"),
      modifiedAt: new Date("2024-06-03T18:38:58.201Z"),
      id: "<value>",
      status: "expired",
      clientSecret: "<value>",
      expiresAt: new Date("2022-06-30T14:38:50.223Z"),
      successUrl: "https://worthy-haversack.info/",
      amount: 757018,
      taxAmount: 62739,
      currency: "Swiss Franc",
      totalAmount: 719880,
      productId: "<value>",
      productPriceId: "<value>",
      isPaymentRequired: false,
      customerId: "<value>",
      customerName: "<value>",
      customerEmail: "Maybelle_McLaughlin14@gmail.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Uganda",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": "<value>",
      },
      url: "https://authorized-chops.net",
    },
  ],
  pagination: {
    totalCount: 476764,
    maxPage: 597663,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `items`                                                                                              | [components.PolarCheckoutSchemasCheckout](../../models/components/polarcheckoutschemascheckout.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pagination`                                                                                         | [components.Pagination](../../models/components/pagination.md)                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |