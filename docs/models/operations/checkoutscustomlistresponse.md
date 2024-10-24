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
        url: "https://whirlwind-section.com",
        expiresAt: new Date("2024-06-01T05:01:31.045Z"),
        successUrl: "https://esteemed-citizen.biz/",
        embedOrigin: "<value>",
        amount: 528315,
        taxAmount: 671690,
        currency: "Kuwaiti Dinar",
        totalAmount: 959696,
        productId: "<value>",
        productPriceId: "<value>",
        isPaymentRequired: false,
        customerId: "<value>",
        customerName: "<value>",
        customerEmail: "Norberto.MacGyver@gmail.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Marshall Islands",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
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