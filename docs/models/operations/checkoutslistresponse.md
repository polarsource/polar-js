# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-08-17T19:19:44.241Z"),
        modifiedAt: new Date("2025-10-03T19:59:31.448Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "open",
        clientSecret: "<value>",
        url: "https://made-up-dividend.name",
        expiresAt: new Date("2024-10-30T13:59:39.678Z"),
        successUrl: "https://smooth-thread.biz/",
        embedOrigin: "<value>",
        amount: 99171,
        taxAmount: 363497,
        currency: "Pa'anga",
        subtotalAmount: 462270,
        totalAmount: 763922,
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
          country: "SE",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        metadata: {
          "key": false,
        },
        products: [
          {
            createdAt: new Date("2024-09-02T13:41:49.073Z"),
            modifiedAt: new Date("2025-05-07T19:52:37.336Z"),
            id: "<value>",
            name: "<value>",
            description: "antelope etch huzzah upwardly depute pertinent",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2025-04-26T20:46:56.899Z"),
                modifiedAt: new Date("2025-04-15T00:49:44.087Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
                priceCurrency: "<value>",
                priceAmount: 125586,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2024-09-25T23:51:52.163Z"),
                modifiedAt: new Date("2025-11-24T15:03:45.117Z"),
                id: "<value>",
                type: "discord",
                description: "pasta noisily accurate",
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
                path: "/usr/share",
                mimeType: "<value>",
                size: 497962,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-09-26T17:09:06.903Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-09-12T03:10:25.417Z"),
                sizeReadable: "<value>",
                publicUrl: "https://heartfelt-plumber.name",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2025-07-14T08:09:41.643Z"),
          modifiedAt: new Date("2024-08-05T17:15:48.469Z"),
          id: "<value>",
          name: "<value>",
          description:
            "continually concerning geez any vanish huzzah playfully carelessly outset",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-06-13T23:31:57.151Z"),
              modifiedAt: new Date("2023-08-18T02:13:25.934Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 500841,
              maximumAmount: 822881,
              presetAmount: 777702,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-07-01T23:03:46.196Z"),
              modifiedAt: new Date("2023-12-06T03:55:33.898Z"),
              id: "<value>",
              type: "custom",
              description:
                "lazily westernise near armchair outfox turbulent slowly circa vary carnival",
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
              size: 837651,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-10-16T02:44:27.027Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-08-18T21:07:53.436Z"),
              sizeReadable: "<value>",
              publicUrl: "https://respectful-minister.org/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-07-10T23:13:51.219Z"),
          modifiedAt: new Date("2024-06-06T23:38:39.401Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 944158,
          maximumAmount: 366611,
          presetAmount: 570805,
        },
        discount: {
          duration: "forever",
          durationInMonths: 912602,
          type: "fixed",
          amount: 932382,
          currency: "Saint Helena Pound",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-06-02T02:35:41.235Z"),
              modifiedAt: new Date("2024-08-19T03:32:25.730Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 989691,
            required: false,
          },
        ],
        customerMetadata: {
          "key": "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 283221,
      maxPage: 527610,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |