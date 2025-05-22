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
        isBusinessCustomer: false,
        customerName: "<value>",
        customerEmail: "<value>",
        customerIpAddress: "<value>",
        customerBillingName: "<value>",
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
              priceAmount: 135129,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2025-07-16T14:08:45.575Z"),
              modifiedAt: new Date("2024-03-23T05:32:14.004Z"),
              type: "license_keys",
              description:
                "unless courageously majority wherever till even marimba sidetrack",
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
              size: 737294,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-12-10T16:21:49.872Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-04-02T18:33:52.476Z"),
              sizeReadable: "<value>",
              publicUrl: "https://winding-longboat.biz/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-04-23T00:53:12.284Z"),
          modifiedAt: new Date("2023-01-19T19:43:41.630Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 357776,
          maximumAmount: 951613,
          presetAmount: 510801,
        },
        discount: {
          duration: "forever",
          type: "fixed",
          amount: 438841,
          currency: "Jordanian Dinar",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-10-18T10:44:35.058Z"),
              modifiedAt: new Date("2025-12-19T09:51:40.137Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 190639,
            required: false,
          },
        ],
        customerMetadata: {
          "key": 789146,
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
      totalCount: 463482,
      maxPage: 158991,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |