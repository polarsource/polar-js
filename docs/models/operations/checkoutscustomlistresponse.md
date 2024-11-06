# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-27T21:23:27.554Z"),
        modifiedAt: new Date("2024-06-23T22:42:29.938Z"),
        id: "<value>",
        status: "succeeded",
        clientSecret: "<value>",
        url: "https://lavish-marathon.net",
        expiresAt: new Date("2024-10-08T12:20:15.003Z"),
        successUrl: "https://unhappy-premise.com",
        embedOrigin: "<value>",
        amount: 500828,
        taxAmount: 286486,
        currency: "Falkland Islands Pound",
        totalAmount: 355927,
        productId: "<value>",
        productPriceId: "<value>",
        isPaymentRequired: false,
        customerId: "<value>",
        customerName: "<value>",
        customerEmail: "Kolby.Glover@gmail.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Christmas Island",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
        product: {
          createdAt: new Date("2022-01-11T03:15:33.264Z"),
          modifiedAt: new Date("2024-10-13T19:37:01.195Z"),
          id: "<value>",
          name: "<value>",
          description: "yahoo phooey yuck playfully commonly huzzah after",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-03-02T08:07:59.742Z"),
              modifiedAt: new Date("2024-02-05T03:15:11.328Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 176333,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-03-01T06:19:32.936Z"),
              modifiedAt: new Date("2022-11-23T13:48:35.382Z"),
              id: "<value>",
              description:
                "deep from supposing drowse intent foodstuffs a impartial",
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
              path: "/sys",
              mimeType: "<value>",
              size: 63369,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-03-26T04:53:25.304Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-03-02T20:38:32.287Z"),
              sizeReadable: "<value>",
              publicUrl: "https://wavy-pocket-watch.biz/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-12-04T08:27:59.075Z"),
          modifiedAt: new Date("2022-02-24T00:23:58.036Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 933456,
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-04-10T13:48:19.184Z"),
              modifiedAt: new Date("2022-01-01T01:56:18.923Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 254240,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 749101,
      maxPage: 532336,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |