# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-03T22:36:44.749Z"),
        modifiedAt: new Date("2024-09-25T23:30:42.781Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "open",
        clientSecret: "<value>",
        url: "https://overdue-luck.com/",
        expiresAt: new Date("2024-07-19T14:01:53.345Z"),
        successUrl: "https://fragrant-developmental.com/",
        embedOrigin: "<value>",
        amount: 673706,
        taxAmount: 428966,
        currency: "Egyptian Pound",
        subtotalAmount: 268821,
        totalAmount: 910424,
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
          country: "Mali",
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
            createdAt: new Date("2024-07-16T04:22:44.886Z"),
            modifiedAt: new Date("2024-02-20T01:44:12.142Z"),
            id: "<value>",
            name: "<value>",
            description:
              "symbolise fly but pace regarding permafrost wherever ouch monthly beloved",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-09-02T20:24:49.751Z"),
                modifiedAt: new Date("2025-02-22T16:30:35.829Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "month",
                priceCurrency: "<value>",
                minimumAmount: 243710,
                maximumAmount: 487626,
                presetAmount: 175462,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2025-09-02T04:49:10.939Z"),
                modifiedAt: new Date("2023-11-23T07:21:50.293Z"),
                id: "<value>",
                type: "downloadables",
                description:
                  "unbearably impossible sheepishly consequently but enroll beep",
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
                path: "/sbin",
                mimeType: "<value>",
                size: 327205,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-06-07T04:59:23.361Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-01-24T16:01:46.286Z"),
                sizeReadable: "<value>",
                publicUrl: "https://miserable-tuxedo.name",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2024-12-14T07:09:23.310Z"),
          modifiedAt: new Date("2024-04-11T21:20:03.730Z"),
          id: "<value>",
          name: "<value>",
          description: "only quizzically milky petal",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-02-06T16:30:10.860Z"),
              modifiedAt: new Date("2023-09-18T01:20:24.113Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 451919,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-04-30T00:49:13.614Z"),
              modifiedAt: new Date("2024-10-26T07:11:08.711Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "hoof about or especially bashfully upbeat independence ice-cream during",
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
              path: "/var/yp",
              mimeType: "<value>",
              size: 396678,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-01-24T23:13:53.632Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-01-16T03:03:38.237Z"),
              sizeReadable: "<value>",
              publicUrl: "https://infatuated-diagram.info",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-01-04T19:20:55.150Z"),
          modifiedAt: new Date("2024-01-22T12:30:35.494Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 306525,
          type: "percentage",
          basisPoints: 577512,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-11-03T16:35:05.103Z"),
              modifiedAt: new Date("2025-02-03T03:30:35.812Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 464541,
            required: false,
          },
        ],
        customerMetadata: {
          "key": false,
        },
      },
    ],
    pagination: {
      totalCount: 865904,
      maxPage: 68616,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |