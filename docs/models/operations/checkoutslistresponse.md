# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-01-24T23:13:53.632Z"),
        modifiedAt: new Date("2023-01-16T03:03:38.237Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "confirmed",
        clientSecret: "<value>",
        url: "https://experienced-kettledrum.org/",
        expiresAt: new Date("2025-08-18T00:45:54.098Z"),
        successUrl: "https://handsome-sand.net",
        embedOrigin: "<value>",
        amount: 890831,
        discountAmount: 906331,
        netAmount: 306525,
        taxAmount: 542927,
        totalAmount: 577512,
        currency: "Costa Rican Colon",
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
        subtotalAmount: 697214,
        metadata: {
          "key": false,
        },
        customerExternalId: "<id>",
        products: [
          {
            createdAt: new Date("2024-05-24T03:17:09.465Z"),
            modifiedAt: new Date("2025-08-07T06:46:48.305Z"),
            id: "<value>",
            name: "<value>",
            description:
              "notarize supposing mmm stabilise baseboard as jovially ick well-off",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2023-08-31T06:02:44.249Z"),
                modifiedAt: new Date("2025-10-13T21:55:14.485Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
                priceCurrency: "<value>",
                minimumAmount: 985746,
                maximumAmount: 296786,
                presetAmount: 51919,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2024-10-08T15:57:38.883Z"),
                modifiedAt: new Date("2025-08-23T06:05:40.529Z"),
                id: "<value>",
                type: "license_keys",
                description:
                  "guard yippee chainstay huzzah scarcely mountain slushy",
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
                path: "/Library",
                mimeType: "<value>",
                size: 50402,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2023-01-24T19:19:35.600Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-01-03T22:09:25.037Z"),
                sizeReadable: "<value>",
                publicUrl: "https://silver-fold.com",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2024-06-05T20:21:34.498Z"),
          modifiedAt: new Date("2024-12-03T09:48:28.665Z"),
          id: "<value>",
          name: "<value>",
          description: "see advancement mythology at navigate patiently",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-07-15T12:11:31.872Z"),
              modifiedAt: new Date("2024-09-19T08:40:59.577Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 838298,
              maximumAmount: 161999,
              presetAmount: 688621,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-11-23T01:16:44.573Z"),
              modifiedAt: new Date("2023-09-10T21:55:26.137Z"),
              id: "<value>",
              type: "discord",
              description:
                "negotiation what until juvenile preheat phew unique",
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
              size: 381653,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-11-25T06:42:14.969Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-04-26T14:00:53.467Z"),
              sizeReadable: "<value>",
              publicUrl: "https://gripping-heroine.biz",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-01-12T05:34:46.017Z"),
          modifiedAt: new Date("2025-11-23T10:29:23.969Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 952308,
        },
        discount: {
          duration: "forever",
          durationInMonths: 815629,
          type: "percentage",
          amount: 753184,
          currency: "Burundi Franc",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-10-01T20:29:53.442Z"),
              modifiedAt: new Date("2023-02-04T01:20:18.979Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 74260,
            required: false,
          },
        ],
        customerMetadata: {
          "key": "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 919454,
      maxPage: 461600,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |