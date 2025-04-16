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
                id: "<value>",
                createdAt: new Date("2023-04-05T06:35:49.138Z"),
                modifiedAt: new Date("2024-02-21T23:05:35.902Z"),
                metadata: {
                  "key": 5957.67,
                },
                type: "license_keys",
                description: "gah plus very",
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
                path: "/tmp",
                mimeType: "<value>",
                size: 474094,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-06-06T22:19:33.017Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-09-15T08:51:05.212Z"),
                sizeReadable: "<value>",
                publicUrl: "https://upright-puppet.biz/",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2023-10-08T16:38:42.677Z"),
          modifiedAt: new Date("2023-07-26T15:51:22.151Z"),
          id: "<value>",
          name: "<value>",
          description: "emphasise that till spork beneath shyly inside wilt",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-03-27T22:44:13.635Z"),
              modifiedAt: new Date("2023-06-05T09:40:29.570Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2024-09-19T09:40:05.768Z"),
              modifiedAt: new Date("2024-12-13T06:37:05.523Z"),
              metadata: {
                "key": 6869.06,
              },
              type: "license_keys",
              description: "violin unaccountably burgeon propound factorise",
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
              path: "/opt/share",
              mimeType: "<value>",
              size: 543621,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-08-17T22:01:11.782Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-06-11T18:31:23.127Z"),
              sizeReadable: "<value>",
              publicUrl: "https://sarcastic-tennis.biz",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-01-12T01:50:34.672Z"),
          modifiedAt: new Date("2023-03-30T20:08:38.514Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          unitAmount: "<value>",
          capAmount: 76280,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
        discount: {
          duration: "repeating",
          durationInMonths: 855744,
          type: "fixed",
          basisPoints: 24334,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-01-01T14:01:10.713Z"),
              modifiedAt: new Date("2025-02-20T13:35:57.018Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 771010,
            required: false,
          },
        ],
        customerMetadata: {
          "key": false,
        },
      },
    ],
    pagination: {
      totalCount: 474716,
      maxPage: 367401,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |