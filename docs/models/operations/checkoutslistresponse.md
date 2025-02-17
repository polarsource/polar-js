# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-01T09:53:39.231Z"),
        modifiedAt: new Date("2024-02-29T23:21:45.876Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "failed",
        clientSecret: "<value>",
        url: "https://deep-other.net/",
        expiresAt: new Date("2025-07-23T04:21:06.226Z"),
        successUrl: "https://worse-tooth.info",
        embedOrigin: "<value>",
        amount: 788509,
        taxAmount: 296020,
        currency: "Tala",
        subtotalAmount: 997164,
        totalAmount: 734579,
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
          country: "Germany",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        metadata: {
          "key": false,
        },
        product: {
          createdAt: new Date("2023-02-14T21:08:31.136Z"),
          modifiedAt: new Date("2024-03-25T08:40:52.618Z"),
          id: "<value>",
          name: "<value>",
          description: "aggressive till underpants which but solidly outsource",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-06-30T22:18:39.690Z"),
              modifiedAt: new Date("2023-09-08T04:02:06.778Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 618980,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-07-23T21:38:00.079Z"),
              modifiedAt: new Date("2025-09-11T23:55:44.792Z"),
              id: "<value>",
              type: "discord",
              description:
                "gown demob detain during hospitalization entice lazily before tomorrow ew",
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
              path: "/private",
              mimeType: "<value>",
              size: 138056,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-11-10T02:57:45.716Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-08-22T08:34:57.906Z"),
              sizeReadable: "<value>",
              publicUrl: "https://probable-traditionalism.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-05-13T14:09:00.250Z"),
          modifiedAt: new Date("2025-03-10T04:43:52.607Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 30199,
          currency: "Comoro Franc",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-07-13T13:33:05.175Z"),
              modifiedAt: new Date("2025-03-05T05:55:41.747Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 498480,
            required: false,
          },
        ],
        customerMetadata: {
          "key": "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 843481,
      maxPage: 942910,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |