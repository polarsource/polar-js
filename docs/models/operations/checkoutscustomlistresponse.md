# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-31T23:27:16.931Z"),
        modifiedAt: new Date("2023-07-24T21:41:06.633Z"),
        id: "<value>",
        status: "confirmed",
        clientSecret: "<value>",
        expiresAt: new Date("2024-05-26T14:43:35.408Z"),
        successUrl: "https://steel-bid.net",
        amount: 66596,
        taxAmount: 235970,
        currency: "Belize Dollar",
        totalAmount: 197519,
        productId: "<value>",
        productPriceId: "<value>",
        isPaymentRequired: false,
        customerId: "<value>",
        customerName: "<value>",
        customerEmail: "Margarete76@yahoo.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Martinique",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
        url: "https://partial-horde.name/",
      },
    ],
    pagination: {
      totalCount: 416934,
      maxPage: 400470,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |