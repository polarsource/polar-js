# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-24T06:43:22.575Z"),
        modifiedAt: new Date("2023-07-29T22:16:58.750Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "succeeded",
        clientSecret: "<value>",
        url: "https://innocent-ethyl.net/",
        expiresAt: new Date("2025-10-02T19:35:03.671Z"),
        successUrl: "https://tedious-clamp.name/",
        embedOrigin: "<value>",
        amount: 655852,
        discountAmount: 674864,
        netAmount: 692858,
        taxAmount: 921767,
        totalAmount: 311977,
        currency: "Som",
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
        subtotalAmount: 497988,
        metadata: {
          "key": 894581,
        },
        customerExternalId: "<id>",
        products: [
          {
            createdAt: new Date("2025-05-30T08:08:41.593Z"),
            modifiedAt: new Date("2024-07-12T03:08:53.077Z"),
            id: "<value>",
            name: "<value>",
            description: "than ostrich briskly separately grumpy",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-05-16T08:12:14.322Z"),
                modifiedAt: new Date("2023-03-13T04:21:14.731Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                type: "one_time",
                recurringInterval: "month",
                priceCurrency: "<value>",
                priceAmount: 342723,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2025-02-23T08:01:21.480Z"),
                modifiedAt: new Date("2024-02-18T01:19:51.893Z"),
                id: "<value>",
                type: "github_repository",
                description: "provided above guilty because chubby hence",
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
                path: "/usr/libdata",
                mimeType: "<value>",
                size: 59498,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-02-20T02:31:08.906Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-04-03T16:01:02.767Z"),
                sizeReadable: "<value>",
                publicUrl: "https://ajar-rosemary.com",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2023-10-02T21:30:30.609Z"),
          modifiedAt: new Date("2025-02-22T02:23:51.191Z"),
          id: "<value>",
          name: "<value>",
          description: "pant pine wonderful asset about likewise yahoo",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-09-10T12:46:58.994Z"),
              modifiedAt: new Date("2023-08-18T00:51:36.294Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 498786,
              maximumAmount: 899163,
              presetAmount: 178532,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-07-03T04:59:50.366Z"),
              modifiedAt: new Date("2025-11-11T02:39:32.075Z"),
              id: "<value>",
              type: "license_keys",
              description:
                "tomorrow forearm gah provided properly provided stint eek until",
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
              path: "/etc/namedb",
              mimeType: "<value>",
              size: 243710,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-06-18T10:31:19.361Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-07-12T07:21:59.437Z"),
              sizeReadable: "<value>",
              publicUrl: "https://friendly-reward.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-07-17T13:20:20.864Z"),
          modifiedAt: new Date("2024-08-05T14:27:42.480Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          durationInMonths: 767901,
          type: "percentage",
          basisPoints: 595144,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-07-19T09:25:51.840Z"),
              modifiedAt: new Date("2024-03-17T00:43:09.766Z"),
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
            order: 594120,
            required: false,
          },
        ],
        customerMetadata: {
          "key": 720232,
        },
      },
    ],
    pagination: {
      totalCount: 245253,
      maxPage: 456609,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |