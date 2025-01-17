# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-15T20:49:51.680Z"),
        modifiedAt: new Date("2024-09-26T13:34:39.199Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "expired",
        clientSecret: "<value>",
        url: "https://lazy-chap.name/",
        expiresAt: new Date("2024-08-22T08:34:57.906Z"),
        successUrl: "https://probable-traditionalism.name",
        embedOrigin: "<value>",
        amount: 12476,
        taxAmount: 880332,
        currency: "Boliviano boliviano",
        subtotalAmount: 729195,
        totalAmount: 197424,
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
        customerEmail: "Verda.Bartell58@gmail.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Qatar",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        metadata: {
          "key": false,
        },
        product: {
          createdAt: new Date("2024-06-30T08:01:42.296Z"),
          modifiedAt: new Date("2023-05-14T10:49:12.653Z"),
          id: "<value>",
          name: "<value>",
          description:
            "after vivaciously integer throughout bide blah inconsequential notwithstanding likely",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-08-26T14:07:50.921Z"),
              modifiedAt: new Date("2024-01-31T23:06:11.787Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-10-05T09:34:57.740Z"),
              modifiedAt: new Date("2025-07-19T13:31:14.258Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "round upwardly ceramic boastfully hmph postbox doting gerbil",
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
              path: "/media",
              mimeType: "<value>",
              size: 21972,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-06-04T02:31:56.023Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-05-09T07:07:25.624Z"),
              sizeReadable: "<value>",
              publicUrl: "https://determined-climb.org/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-10-14T07:54:56.503Z"),
          modifiedAt: new Date("2025-12-24T20:20:59.879Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 644684,
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 668906,
          currency: "Kwacha",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-05-16T01:56:09.556Z"),
              modifiedAt: new Date("2025-04-07T19:39:30.908Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 712800,
            required: false,
          },
        ],
        customerMetadata: {
          "key": "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 975882,
      maxPage: 500490,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |