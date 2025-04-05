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
        subtotalAmount: 150471,
        metadata: {
          "key": false,
        },
        customerExternalId: "<id>",
        products: [
          {
            createdAt: new Date("2024-08-23T06:07:28.083Z"),
            modifiedAt: new Date("2024-04-03T14:05:19.132Z"),
            id: "<value>",
            name: "<value>",
            description:
              "incidentally without courageously regarding gosh growing complicated where meh",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-11-05T02:49:57.100Z"),
                modifiedAt: new Date("2023-06-17T16:48:44.496Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
                priceCurrency: "<value>",
                priceAmount: 716670,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2023-04-05T06:35:49.138Z"),
                modifiedAt: new Date("2024-02-21T23:05:35.902Z"),
                id: "<value>",
                type: "license_keys",
                description:
                  "intervention phew courageously factorize if quiet yum",
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
                path: "/boot",
                mimeType: "<value>",
                size: 440764,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-11-18T21:34:57.543Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-07-21T05:46:09.948Z"),
                sizeReadable: "<value>",
                publicUrl: "https://sweet-gray.info",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2023-04-10T03:38:25.629Z"),
          modifiedAt: new Date("2025-04-02T12:36:41.106Z"),
          id: "<value>",
          name: "<value>",
          description: "upwardly able abaft though consequently shampoo",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-04-17T06:12:47.547Z"),
              modifiedAt: new Date("2023-12-24T08:24:52.074Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 890029,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-11-28T14:03:34.164Z"),
              modifiedAt: new Date("2024-06-16T02:39:49.081Z"),
              id: "<value>",
              type: "custom",
              description:
                "pinstripe unless courageously majority wherever till even",
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
              path: "/usr/libexec",
              mimeType: "<value>",
              size: 936977,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-06-04T06:55:37.941Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-02-07T16:07:20.953Z"),
              sizeReadable: "<value>",
              publicUrl: "https://bony-marimba.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-04-19T00:32:49.878Z"),
          modifiedAt: new Date("2025-10-18T00:31:36.097Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 481939,
        },
        discount: {
          duration: "once",
          type: "percentage",
          basisPoints: 318559,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-08-06T00:37:31.712Z"),
              modifiedAt: new Date("2023-11-03T13:52:18.238Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 263460,
            required: false,
          },
        ],
        customerMetadata: {
          "key": 17173,
        },
      },
    ],
    pagination: {
      totalCount: 808752,
      maxPage: 357776,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |