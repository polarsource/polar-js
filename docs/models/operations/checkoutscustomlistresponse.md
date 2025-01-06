# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-18T12:21:35.318Z"),
        modifiedAt: new Date("2024-01-03T07:20:18.003Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "failed",
        clientSecret: "<value>",
        url: "https://ornery-cemetery.org/",
        expiresAt: new Date("2023-05-30T01:40:11.174Z"),
        successUrl: "https://emotional-retention.biz",
        embedOrigin: "<value>",
        amount: 758285,
        taxAmount: 505990,
        currency: "Serbian Dinar",
        subtotalAmount: 520608,
        totalAmount: 556542,
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
        customerEmail: "Dante.Gislason49@yahoo.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Nauru",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
        product: {
          createdAt: new Date("2023-07-23T21:38:00.079Z"),
          modifiedAt: new Date("2025-09-11T23:55:44.792Z"),
          id: "<value>",
          name: "<value>",
          description:
            "unaccountably between against provider notwithstanding to",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-05-08T14:23:40.928Z"),
              modifiedAt: new Date("2024-10-02T16:39:58.074Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 561768,
              maximumAmount: 733228,
              presetAmount: 320819,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-09-26T16:42:50.105Z"),
              modifiedAt: new Date("2023-01-09T20:45:49.123Z"),
              id: "<value>",
              type: "ads",
              description: "unto psst like amidst internalize whether",
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
              path: "/var/mail",
              mimeType: "<value>",
              size: 832823,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-09-10T21:36:58.913Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-07-09T08:40:48.312Z"),
              sizeReadable: "<value>",
              publicUrl: "https://marvelous-birdcage.biz/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-10-13T04:41:33.403Z"),
          modifiedAt: new Date("2025-09-19T06:44:07.330Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 945871,
          type: "percentage",
          amount: 50203,
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
              createdAt: new Date("2025-10-30T14:04:55.140Z"),
              modifiedAt: new Date("2024-06-01T08:00:19.951Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 87513,
            required: false,
          },
        ],
        customerMetadata: {
          "key": false,
        },
      },
    ],
    pagination: {
      totalCount: 723020,
      maxPage: 801806,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |