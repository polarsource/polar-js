# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-05-10T07:07:24.823Z"),
        modifiedAt: new Date("2023-10-13T14:19:04.173Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "confirmed",
        clientSecret: "<value>",
        url: "https://limping-chapel.net",
        expiresAt: new Date("2025-10-02T13:21:51.360Z"),
        successUrl: "https://alert-shark.biz/",
        embedOrigin: "<value>",
        amount: 547740,
        taxAmount: 784638,
        currency: "Cayman Islands Dollar",
        subtotalAmount: 292398,
        totalAmount: 856627,
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
        metadata: {
          "key": false,
        },
        customerExternalId: "<id>",
        products: [
          {
            createdAt: new Date("2023-01-14T06:12:01.478Z"),
            modifiedAt: new Date("2023-02-17T06:48:44.019Z"),
            id: "<value>",
            name: "<value>",
            description: "gasp ick moral after blindly cram merge",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-10-18T16:24:14.861Z"),
                modifiedAt: new Date("2025-08-30T02:29:01.777Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                type: "one_time",
                recurringInterval: "year",
                priceCurrency: "<value>",
                minimumAmount: 557580,
                maximumAmount: 541071,
                presetAmount: 936485,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2024-01-29T13:28:14.825Z"),
                modifiedAt: new Date("2023-03-16T21:21:02.766Z"),
                id: "<value>",
                type: "discord",
                description: "odd in upwardly",
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
                path: "/usr/lib",
                mimeType: "<value>",
                size: 185893,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-07-07T19:56:42.500Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-06-24T00:41:46.962Z"),
                sizeReadable: "<value>",
                publicUrl: "https://shameful-fraudster.name",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2024-10-19T01:59:38.879Z"),
          modifiedAt: new Date("2025-10-05T09:28:04.206Z"),
          id: "<value>",
          name: "<value>",
          description: "ew shyly since",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-03-19T19:30:23.147Z"),
              modifiedAt: new Date("2023-08-09T20:04:30.000Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 890734,
              maximumAmount: 409118,
              presetAmount: 30863,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-10-18T18:57:50.007Z"),
              modifiedAt: new Date("2023-11-17T17:23:22.744Z"),
              id: "<value>",
              type: "downloadables",
              description: "before hoick cheerfully meh fatally",
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
              path: "/Network",
              mimeType: "<value>",
              size: 180530,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-03-23T21:46:48.638Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-01-29T07:50:06.136Z"),
              sizeReadable: "<value>",
              publicUrl: "https://any-completion.org/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-08-29T15:04:51.204Z"),
          modifiedAt: new Date("2023-07-23T12:04:16.092Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 842869,
          maximumAmount: 988008,
          presetAmount: 126490,
        },
        discount: {
          duration: "once",
          type: "percentage",
          basisPoints: 771095,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-10-27T01:48:31.738Z"),
              modifiedAt: new Date("2023-12-21T14:29:37.705Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 332453,
            required: false,
          },
        ],
        customerMetadata: {
          "key": 617923,
        },
      },
    ],
    pagination: {
      totalCount: 912808,
      maxPage: 819396,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |