# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-17T19:50:02.721Z"),
        modifiedAt: new Date("2022-09-21T08:38:57.070Z"),
        id: "<value>",
        status: "succeeded",
        clientSecret: "<value>",
        url: "https://numb-import.name",
        expiresAt: new Date("2023-04-15T23:24:43.899Z"),
        successUrl: "https://infatuated-guidance.net",
        embedOrigin: "<value>",
        amount: 92851,
        taxAmount: 166542,
        currency: "Turkish Lira",
        subtotalAmount: 771078,
        totalAmount: 281454,
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
        customerEmail: "Tiara.Morar@yahoo.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Oman",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": false,
        },
        product: {
          createdAt: new Date("2024-07-23T13:07:53.786Z"),
          modifiedAt: new Date("2022-02-05T22:08:14.307Z"),
          id: "<value>",
          name: "<value>",
          description: "courageous woot needily academics",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-08-12T17:48:39.683Z"),
              modifiedAt: new Date("2022-10-07T18:28:40.287Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 884622,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-05-24T02:08:00.227Z"),
              modifiedAt: new Date("2024-06-04T14:55:47.453Z"),
              id: "<value>",
              type: "license_keys",
              description: "meh kettledrum sometimes",
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
              path: "/usr/src",
              mimeType: "<value>",
              size: 806124,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-04-28T14:26:46.798Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-01-10T22:18:51.218Z"),
              sizeReadable: "<value>",
              publicUrl: "https://finished-obligation.info/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-06-19T06:00:22.932Z"),
          modifiedAt: new Date("2022-12-09T16:59:37.115Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 884325,
          maximumAmount: 958533,
          presetAmount: 207512,
        },
        discount: {
          duration: "once",
          durationInMonths: 887132,
          type: "fixed",
          basisPoints: 665960,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-12-03T09:17:23.978Z"),
              modifiedAt: new Date("2024-02-07T21:27:34.191Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 566669,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 476801,
      maxPage: 621883,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |