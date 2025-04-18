# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-31T01:46:14.710Z"),
        modifiedAt: new Date("2024-12-06T02:31:04.951Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "open",
        clientSecret: "<value>",
        url: "https://portly-affect.info/",
        expiresAt: new Date("2025-11-24T04:19:48.691Z"),
        successUrl: "https://perky-hutch.biz/",
        embedOrigin: "<value>",
        amount: 134654,
        discountAmount: 921634,
        netAmount: 742402,
        taxAmount: 919171,
        totalAmount: 551976,
        currency: "Iceland Krona",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        allowDiscountCodes: false,
        requireBillingAddress: false,
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
          country: "FR",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        metadata: {
          "key": "<value>",
        },
        customerExternalId: "<id>",
        products: [
          {
            createdAt: new Date("2025-04-10T15:23:13.921Z"),
            modifiedAt: new Date("2024-08-23T06:07:28.083Z"),
            id: "<value>",
            name: "<value>",
            description: "finally beside bathrobe once settle reassuringly",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-05-23T13:49:30.228Z"),
                modifiedAt: new Date("2024-01-20T09:01:47.372Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
                priceCurrency: "<value>",
                priceAmount: 678086,
              },
            ],
            benefits: [
              {
                id: "<value>",
                createdAt: new Date("2023-05-27T04:54:02.497Z"),
                modifiedAt: new Date("2023-06-25T14:06:47.693Z"),
                type: "meter_credit",
                description:
                  "cleverly psst smoothly eek misspend as zowie planula emphasise",
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
                path: "/Users",
                mimeType: "<value>",
                size: 34474,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-09-28T23:26:19.273Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-06-04T15:02:20.132Z"),
                sizeReadable: "<value>",
                publicUrl: "https://tepid-ownership.biz/",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2023-02-13T10:18:04.915Z"),
          modifiedAt: new Date("2024-04-28T01:51:56.765Z"),
          id: "<value>",
          name: "<value>",
          description: "when aha present pigsty meh indelible over yowza",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-04-03T02:36:27.059Z"),
              modifiedAt: new Date("2024-10-11T10:27:29.716Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 135129,
              maximumAmount: 846341,
              presetAmount: 408057,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2025-04-08T11:18:04.018Z"),
              modifiedAt: new Date("2025-01-09T00:34:01.316Z"),
              type: "discord",
              description: "forage into remand",
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
              path: "/usr/bin",
              mimeType: "<value>",
              size: 901138,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-09-24T20:01:23.023Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-01-27T22:25:06.963Z"),
              sizeReadable: "<value>",
              publicUrl: "https://adolescent-birdcage.com",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-09-22T00:07:08.718Z"),
          modifiedAt: new Date("2025-01-21T07:28:24.888Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 189951,
          maximumAmount: 24334,
          presetAmount: 825816,
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 771010,
          currency: "CFA Franc BEAC",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-02-07T16:07:20.953Z"),
              modifiedAt: new Date("2024-07-02T05:39:01.574Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 551822,
            required: false,
          },
        ],
        customerMetadata: {
          "key": 510898,
        },
        customerBillingAddressFields: {
          country: false,
          state: false,
          city: false,
          postalCode: false,
          line1: false,
          line2: false,
        },
      },
    ],
    pagination: {
      totalCount: 51297,
      maxPage: 765532,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |