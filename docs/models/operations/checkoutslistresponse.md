# CheckoutsListResponse

## Example Usage

```typescript
import { CheckoutsListResponse } from "@polar-sh/sdk/models/operations/checkoutslist.js";

let value: CheckoutsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-01-01T13:16:47.178Z"),
        modifiedAt: new Date("2024-06-05T14:27:13.096Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "confirmed",
        clientSecret: "<value>",
        url: "https://zealous-armchair.name",
        expiresAt: new Date("2024-03-24T16:19:50.509Z"),
        successUrl: "https://cruel-smog.com",
        embedOrigin: "<value>",
        amount: 772858,
        discountAmount: 892749,
        netAmount: 746511,
        taxAmount: 949446,
        totalAmount: 600315,
        currency: "Falkland Islands Pound",
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
        subtotalAmount: 749725,
        metadata: {
          "key": false,
        },
        customerExternalId: "<id>",
        products: [
          {
            createdAt: new Date("2024-08-02T20:37:27.184Z"),
            modifiedAt: new Date("2025-07-12T03:33:17.152Z"),
            id: "<value>",
            name: "<value>",
            description: "tuba canter yet",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2023-12-11T20:18:21.907Z"),
                modifiedAt: new Date("2024-03-27T07:52:15.043Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                type: "one_time",
                recurringInterval: "year",
              },
            ],
            benefits: [
              {
                createdAt: new Date("2024-12-31T11:52:56.158Z"),
                modifiedAt: new Date("2023-05-08T09:16:24.823Z"),
                id: "<value>",
                type: "downloadables",
                description: "aw ugh spirit blah wherever amongst",
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
                size: 215097,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-07-21T04:59:48.153Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-04-30T13:28:39.283Z"),
                sizeReadable: "<value>",
                publicUrl: "https://flowery-rubric.com/",
              },
            ],
          },
        ],
        product: {
          createdAt: new Date("2025-09-11T09:59:17.332Z"),
          modifiedAt: new Date("2024-03-08T05:25:47.111Z"),
          id: "<value>",
          name: "<value>",
          description:
            "gadzooks consign than mostly meh almost stool yowza tune-up",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-10-16T06:44:39.899Z"),
              modifiedAt: new Date("2025-11-12T13:45:13.664Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-11-15T21:57:50.882Z"),
              modifiedAt: new Date("2024-12-30T20:40:29.283Z"),
              id: "<value>",
              type: "downloadables",
              description: "whereas trial ha handy synergy biodegrade",
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
              size: 6135,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-06-20T14:12:24.330Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-12-19T20:55:47.008Z"),
              sizeReadable: "<value>",
              publicUrl: "https://staid-parsnip.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-07-09T22:31:57.118Z"),
          modifiedAt: new Date("2024-12-16T12:35:19.578Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 4238,
          maximumAmount: 499174,
          presetAmount: 356437,
        },
        discount: {
          duration: "forever",
          durationInMonths: 76050,
          type: "fixed",
          amount: 230016,
          currency: "Uganda Shilling",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-07-23T17:44:49.873Z"),
              modifiedAt: new Date("2025-07-07T19:56:42.500Z"),
              id: "<value>",
              metadata: {
                "key": 812458,
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
            order: 731585,
            required: false,
          },
        ],
        customerMetadata: {
          "key": 601758,
        },
      },
    ],
    pagination: {
      totalCount: 599528,
      maxPage: 920068,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |