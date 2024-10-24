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
      url: "https://bustling-shark.biz/",
      expiresAt: new Date("2024-03-25T03:51:27.034Z"),
      successUrl: "https://sweet-yarmulke.com",
      embedOrigin: "<value>",
      amount: 150417,
      taxAmount: 636216,
      currency: "Kwanza",
      totalAmount: 817418,
      productId: "<value>",
      productPriceId: "<value>",
      isPaymentRequired: false,
      customerId: "<value>",
      customerName: "<value>",
      customerEmail: "Grayson20@yahoo.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Saint Vincent and the Grenadines",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": "<value>",
      },
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