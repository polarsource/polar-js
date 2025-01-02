# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-01-02T09:18:02.838Z"),
        modifiedAt: new Date("2024-11-15T02:48:54.405Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "succeeded",
        clientSecret: "<value>",
        url: "https://shimmering-bungalow.net",
        expiresAt: new Date("2025-06-27T16:57:19.473Z"),
        successUrl: "https://gleaming-countess.com/",
        embedOrigin: "<value>",
        amount: 868686,
        taxAmount: 537619,
        currency: "Solomon Islands Dollar",
        subtotalAmount: 217602,
        totalAmount: 124657,
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
        customerEmail: "Rosario44@gmail.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Romania",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": 897201,
        },
        product: {
          createdAt: new Date("2023-12-13T02:41:01.266Z"),
          modifiedAt: new Date("2025-04-02T06:32:43.364Z"),
          id: "<value>",
          name: "<value>",
          description:
            "outgoing purple geez since apropos robust without upon table",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-11-04T13:06:12.786Z"),
              modifiedAt: new Date("2024-03-15T02:47:24.650Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 407058,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-05-07T04:54:40.908Z"),
              modifiedAt: new Date("2023-05-04T10:00:03.073Z"),
              id: "<value>",
              type: "ads",
              description: "status yippee after sundae",
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
              size: 362677,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-09-27T00:40:29.017Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-09-18T18:45:50.627Z"),
              sizeReadable: "<value>",
              publicUrl: "https://grubby-couch.org",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-11-22T01:36:41.126Z"),
          modifiedAt: new Date("2023-10-31T16:41:22.925Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 177892,
          recurringInterval: "year",
        },
        discount: {
          duration: "once",
          durationInMonths: 574457,
          type: "percentage",
          amount: 693777,
          currency: "Egyptian Pound",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-01-05T21:57:51.624Z"),
              modifiedAt: new Date("2025-10-12T15:13:45.035Z"),
              id: "<value>",
              metadata: {
                "key": 570553,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 531387,
            required: false,
          },
        ],
        customerMetadata: {
          "key": false,
        },
      },
    ],
    pagination: {
      totalCount: 895939,
      maxPage: 987408,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |