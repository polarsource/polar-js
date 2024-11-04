# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-05-25T15:39:50.494Z"),
        modifiedAt: new Date("2022-03-27T11:31:23.093Z"),
        id: "<value>",
        status: "failed",
        clientSecret: "<value>",
        url: "https://esteemed-citizen.biz/",
        expiresAt: new Date("2023-08-03T00:48:03.968Z"),
        successUrl: "https://limp-venom.biz",
        embedOrigin: "<value>",
        amount: 763140,
        taxAmount: 870183,
        currency: "Pataca",
        totalAmount: 456222,
        productId: "<value>",
        productPriceId: "<value>",
        isPaymentRequired: false,
        customerId: "<value>",
        customerName: "<value>",
        customerEmail: "Hildegard.Johnson69@yahoo.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Cayman Islands",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
        product: {
          createdAt: new Date("2024-07-21T21:55:28.560Z"),
          modifiedAt: new Date("2024-04-25T02:25:06.711Z"),
          id: "<value>",
          name: "<value>",
          description: "lazily elegantly celebrate until furthermore",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-11-19T10:08:01.911Z"),
              modifiedAt: new Date("2023-01-23T21:05:37.371Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-06-19T16:55:47.504Z"),
              modifiedAt: new Date("2022-08-12T17:48:39.683Z"),
              id: "<value>",
              description: "aside cake uh-huh while instead",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                paidArticles: false,
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/usr/bin",
              mimeType: "<value>",
              size: 353075,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-06-19T06:00:22.932Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-12-09T16:59:37.115Z"),
              sizeReadable: "<value>",
              publicUrl: "https://which-crocodile.net",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-07-01T10:30:42.476Z"),
          modifiedAt: new Date("2023-12-31T21:24:34.925Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        subscriptionId: "<value>",
      },
    ],
    pagination: {
      totalCount: 973894,
      maxPage: 700634,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |