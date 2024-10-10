# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-07T00:52:08.467Z"),
        modifiedAt: new Date("2024-06-22T05:15:07.307Z"),
        id: "<value>",
        status: "open",
        clientSecret: "<value>",
        expiresAt: new Date("2023-05-25T13:18:45.811Z"),
        successUrl: "https://dependable-retention.com",
        amount: 946416,
        taxAmount: 468221,
        currency: "Guyana Dollar",
        totalAmount: 116807,
        productId: "<value>",
        productPriceId: "<value>",
        isPaymentRequired: false,
        customerId: "<value>",
        customerName: "<value>",
        customerEmail: "Magdalena_Haag64@yahoo.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Cape Verde",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
        url: "https://forceful-confusion.org",
      },
    ],
    pagination: {
      totalCount: 309192,
      maxPage: 124740,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |