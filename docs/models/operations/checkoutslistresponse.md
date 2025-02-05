# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-23T21:38:00.079Z"),
        modifiedAt: new Date("2025-09-11T23:55:44.792Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "confirmed",
        clientSecret: "<value>",
        url: "https://inexperienced-adaptation.biz",
        expiresAt: new Date("2025-07-04T13:03:20.225Z"),
        successUrl: "https://that-gown.biz/",
        embedOrigin: "<value>",
        amount: 800727,
        taxAmount: 72288,
        currency: "Tanzanian Shilling",
        subtotalAmount: 419866,
        totalAmount: 328710,
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
        customerEmail: "<value>",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Croatia",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        metadata: {
          "key": 947946,
        },
        product: {
          createdAt: new Date("2024-01-22T06:01:41.855Z"),
          modifiedAt: new Date("2023-09-10T19:30:29.998Z"),
          id: "<value>",
          name: "<value>",
          description: "conjecture gut with shimmering",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-09-26T16:42:50.105Z"),
              modifiedAt: new Date("2023-01-09T20:45:49.123Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 271660,
              maximumAmount: 486148,
              presetAmount: 180507,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-04-26T07:49:59.337Z"),
              modifiedAt: new Date("2025-03-03T05:53:22.940Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "supposing than which angrily colorfully mostly impact ick",
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
              path: "/private/tmp",
              mimeType: "<value>",
              size: 291293,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-04-06T21:56:28.637Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-08-21T18:01:23.530Z"),
              sizeReadable: "<value>",
              publicUrl: "https://stiff-runway.net",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-06-11T07:56:22.222Z"),
          modifiedAt: new Date("2025-03-15T18:23:55.861Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 766757,
          maximumAmount: 759611,
          presetAmount: 66920,
          recurringInterval: "year",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 212124,
          currency: "Costa Rican Colon",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-06-30T02:18:36.520Z"),
              modifiedAt: new Date("2025-05-09T22:10:56.397Z"),
              id: "<value>",
              metadata: {
                "key": 992044,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 771027,
            required: false,
          },
        ],
        customerMetadata: {
          "key": false,
        },
      },
    ],
    pagination: {
      totalCount: 411321,
      maxPage: 120809,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |