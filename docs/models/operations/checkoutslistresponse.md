# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-17T20:38:53.044Z"),
        modifiedAt: new Date("2023-03-05T05:25:59.876Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "confirmed",
        clientSecret: "<value>",
        url: "https://stunning-forgery.name/",
        expiresAt: new Date("2024-07-23T16:25:15.120Z"),
        successUrl: "https://paltry-pear.info",
        embedOrigin: "<value>",
        amount: 135689,
        taxAmount: 470463,
        currency: "Rwanda Franc",
        subtotalAmount: 510151,
        totalAmount: 604549,
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
          country: "Seychelles",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        metadata: {
          "key": "<value>",
        },
        products: [
          {
            createdAt: new Date("2024-08-29T13:23:07.720Z"),
            modifiedAt: new Date("2025-02-25T15:58:44.589Z"),
            id: "<value>",
            name: "<value>",
            description:
              "yellowish glittering ripe boo utterly inject whoever vanish into derby",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2025-06-26T17:38:57.459Z"),
                modifiedAt: new Date("2023-04-02T11:06:19.473Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "month",
              },
            ],
            benefits: [
              {
                createdAt: new Date("2025-01-26T02:00:14.934Z"),
                modifiedAt: new Date("2025-01-07T10:48:48.530Z"),
                id: "<value>",
                type: "license_keys",
                description: "ice-cream during athwart sore ick unabashedly",
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
                path: "/usr/sbin",
                mimeType: "<value>",
                size: 825390,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-03-02T07:36:35.852Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-09-30T10:00:07.369Z"),
                sizeReadable: "<value>",
                publicUrl: "https://sizzling-whack.com",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2025-05-15T08:49:38.844Z"),
          modifiedAt: new Date("2024-04-02T22:37:57.104Z"),
          id: "<value>",
          name: "<value>",
          description: "unless transparency ew doing nor geez",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-11-27T02:08:19.815Z"),
              modifiedAt: new Date("2025-04-13T20:21:51.282Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 729263,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-11-12T23:00:47.114Z"),
              modifiedAt: new Date("2025-09-28T17:00:32.112Z"),
              id: "<value>",
              type: "discord",
              description: "overwork per mid singing",
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
              path: "/usr/local/src",
              mimeType: "<value>",
              size: 669784,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-05-28T10:46:19.791Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-12-24T14:04:06.848Z"),
              sizeReadable: "<value>",
              publicUrl: "https://near-hello.net/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-04-18T12:31:49.961Z"),
          modifiedAt: new Date("2024-10-20T17:37:49.641Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 771760,
          maximumAmount: 203755,
          presetAmount: 74874,
        },
        discount: {
          duration: "once",
          type: "fixed",
          basisPoints: 60548,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-07-20T16:09:30.875Z"),
              modifiedAt: new Date("2024-07-23T07:21:22.086Z"),
              id: "<value>",
              metadata: {
                "key": 706586,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 407574,
            required: false,
          },
        ],
        customerMetadata: {
          "key": 446119,
        },
      },
    ],
    pagination: {
      totalCount: 877700,
      maxPage: 780288,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |