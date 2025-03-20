# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-16T09:34:44.366Z"),
        modifiedAt: new Date("2025-07-09T03:19:25.437Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "expired",
        clientSecret: "<value>",
        url: "https://foolish-completion.com/",
        expiresAt: new Date("2023-10-14T15:58:41.867Z"),
        successUrl: "https://scornful-valentine.biz/",
        embedOrigin: "<value>",
        amount: 90596,
        taxAmount: 395864,
        currency: "Solomon Islands Dollar",
        subtotalAmount: 825429,
        totalAmount: 201861,
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
          country: "US",
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
            createdAt: new Date("2024-02-08T21:17:07.656Z"),
            modifiedAt: new Date("2023-12-23T04:05:40.658Z"),
            id: "<value>",
            name: "<value>",
            description:
              "pish gosh amongst safely sonata throughout innocently",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-03-28T03:23:38.261Z"),
                modifiedAt: new Date("2023-02-11T11:14:52.270Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "month",
                priceCurrency: "<value>",
                minimumAmount: 921227,
                maximumAmount: 498545,
                presetAmount: 103346,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2025-08-29T15:04:51.204Z"),
                modifiedAt: new Date("2023-07-23T12:04:16.092Z"),
                id: "<value>",
                type: "github_repository",
                description:
                  "fit unwieldy willfully before spice considering regularly who poppy",
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
                path: "/var/log",
                mimeType: "<value>",
                size: 311977,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-04-24T01:39:17.236Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-11-01T09:25:27.472Z"),
                sizeReadable: "<value>",
                publicUrl: "https://jam-packed-taxicab.net/",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2024-07-12T03:08:53.077Z"),
          modifiedAt: new Date("2023-12-13T13:52:13.762Z"),
          id: "<value>",
          name: "<value>",
          description: "consequently upon phew huge giggle fly birth over",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-02-10T15:18:24.208Z"),
              modifiedAt: new Date("2024-06-24T18:47:57.081Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 578657,
              maximumAmount: 395784,
              presetAmount: 753157,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-01-18T08:46:33.526Z"),
              modifiedAt: new Date("2023-09-09T15:56:05.444Z"),
              id: "<value>",
              type: "downloadables",
              description: "zowie repeatedly per",
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
              path: "/opt/sbin",
              mimeType: "<value>",
              size: 657559,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-01-23T13:10:04.311Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-04-17T15:07:16.114Z"),
              sizeReadable: "<value>",
              publicUrl: "https://extroverted-providence.name/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-03-03T23:31:30.643Z"),
          modifiedAt: new Date("2023-08-16T15:58:06.671Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        discount: {
          duration: "forever",
          type: "percentage",
          amount: 892389,
          currency: "Nuevo Sol",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-04-09T22:14:51.563Z"),
              modifiedAt: new Date("2025-10-13T07:38:25.603Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 755383,
            required: false,
          },
        ],
        customerMetadata: {
          "key": false,
        },
      },
    ],
    pagination: {
      totalCount: 630208,
      maxPage: 472170,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |