# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-01-07T15:32:38.599Z"),
        modifiedAt: new Date("2022-07-26T20:24:43.477Z"),
        id: "<value>",
        status: "failed",
        clientSecret: "<value>",
        url: "https://mindless-whack.com",
        expiresAt: new Date("2024-09-13T00:26:18.256Z"),
        successUrl: "https://dapper-possession.com/",
        embedOrigin: "<value>",
        amount: 565845,
        taxAmount: 420233,
        currency: "Saudi Riyal",
        subtotalAmount: 900676,
        totalAmount: 769872,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        allowDiscountCodes: false,
        isDiscountApplicable: false,
        isFreeProductPrice: false,
        isPaymentRequired: false,
        isPaymentSetupRequired: false,
        isPaymentFormRequired: false,
        customerId: "<value>",
        customerName: "<value>",
        customerEmail: "Alexanne.Larkin23@hotmail.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "United States of America",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
        product: {
          createdAt: new Date("2023-01-23T21:05:37.371Z"),
          modifiedAt: new Date("2022-01-05T01:34:54.799Z"),
          id: "<value>",
          name: "<value>",
          description:
            "whereas collectivization despite till crumble besides even forenenst lazily",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-07-14T12:57:06.598Z"),
              modifiedAt: new Date("2024-04-25T16:14:24.819Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 543922,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-04-20T06:28:09.460Z"),
              modifiedAt: new Date("2022-10-19T22:36:24.411Z"),
              id: "<value>",
              type: "ads",
              description: "gee beneath since phony",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/private/var",
              mimeType: "<value>",
              size: 13316,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-10-27T11:06:47.453Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-12-20T00:58:21.844Z"),
              sizeReadable: "<value>",
              publicUrl: "https://grizzled-circumference.net",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-08-16T19:51:12.559Z"),
          modifiedAt: new Date("2023-09-02T00:08:58.903Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
        discount: {
          duration: "forever",
          type: "fixed",
          amount: 512408,
          currency: "Cedi",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-07-14T09:10:39.993Z"),
              modifiedAt: new Date("2022-12-12T17:59:43.779Z"),
              id: "<value>",
              metadata: {
                "key": 430181,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 909093,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 187361,
      maxPage: 697729,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |