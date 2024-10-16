# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2023-02-16T01:56:17.223Z"),
      modifiedAt: new Date("2024-09-26T12:45:07.280Z"),
      id: "<value>",
      status: "open",
      clientSecret: "<value>",
      expiresAt: new Date("2022-09-08T21:23:39.240Z"),
      successUrl: "https://strange-cork.net/",
      amount: 561597,
      taxAmount: 830216,
      currency: "Zimbabwe Dollar",
      totalAmount: 154236,
      productId: "<value>",
      productPriceId: "<value>",
      isPaymentRequired: false,
      customerId: "<value>",
      customerName: "<value>",
      customerEmail: "Lou.Schumm@gmail.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Gibraltar",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": "<value>",
      },
      url: "https://downright-publicity.net/",
    },
  ],
  pagination: {
    totalCount: 608103,
    maxPage: 236034,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `items`                                                                                              | [components.PolarCheckoutSchemasCheckout](../../models/components/polarcheckoutschemascheckout.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pagination`                                                                                         | [components.Pagination](../../models/components/pagination.md)                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |