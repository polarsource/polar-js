# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations/checkoutscustomlist.js";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-16T06:10:32.593Z"),
        modifiedAt: new Date("2023-04-06T21:56:28.637Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "failed",
        clientSecret: "<value>",
        url: "https://stiff-runway.net",
        expiresAt: new Date("2023-05-02T15:28:19.816Z"),
        successUrl: "https://subdued-reboot.net/",
        embedOrigin: "<value>",
        amount: 759611,
        taxAmount: 66920,
        currency: "Somoni",
        subtotalAmount: 85912,
        totalAmount: 822406,
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
          country: "French Polynesia",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        metadata: {
          "key": "<value>",
        },
        product: {
          createdAt: new Date("2023-08-03T17:06:34.541Z"),
          modifiedAt: new Date("2023-03-26T15:21:43.295Z"),
          id: "<value>",
          name: "<value>",
          description:
            "colorfully whoa certainly provided buzzing incidentally",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-06-07T13:45:15.402Z"),
              modifiedAt: new Date("2024-04-28T18:28:37.139Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 47672,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-10-23T09:17:13.863Z"),
              modifiedAt: new Date("2024-10-18T07:47:44.539Z"),
              id: "<value>",
              type: "custom",
              description: "pinion safe down",
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
              path: "/tmp",
              mimeType: "<value>",
              size: 324995,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-01-22T18:56:11.037Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-02-20T16:15:54.012Z"),
              sizeReadable: "<value>",
              publicUrl: "https://doting-vicinity.biz",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-06-07T06:20:48.185Z"),
          modifiedAt: new Date("2024-03-13T14:18:20.001Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 374779,
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 259760,
          currency: "Yuan Renminbi",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-11-06T03:12:54.205Z"),
              modifiedAt: new Date("2024-10-15T23:27:36.527Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 261250,
            required: false,
          },
        ],
        customerMetadata: {
          "key": false,
        },
      },
    ],
    pagination: {
      totalCount: 644684,
      maxPage: 163249,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |