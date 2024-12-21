# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-11-04T15:24:50.946Z"),
        modifiedAt: new Date("2024-02-28T22:07:34.332Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "confirmed",
        clientSecret: "<value>",
        url: "https://pushy-experience.net/",
        expiresAt: new Date("2023-06-20T21:50:51.021Z"),
        successUrl: "https://dense-marimba.biz/",
        embedOrigin: "<value>",
        amount: 382070,
        taxAmount: 785567,
        currency: "Tugrik",
        subtotalAmount: 877261,
        totalAmount: 688039,
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
        customerEmail: "Bailee55@gmail.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Wallis and Futuna",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
        product: {
          createdAt: new Date("2024-05-17T21:20:13.788Z"),
          modifiedAt: new Date("2024-04-19T15:54:08.667Z"),
          id: "<value>",
          name: "<value>",
          description:
            "geez homeschool absentmindedly versus wherever anti circa creature even",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-01-31T09:06:03.992Z"),
              modifiedAt: new Date("2022-10-04T08:23:30.297Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-07-23T15:57:25.365Z"),
              modifiedAt: new Date("2023-01-05T21:57:51.624Z"),
              id: "<value>",
              type: "license_keys",
              description:
                "merrily whenever knife knowledgeably pillory cellar",
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
              path: "/etc/defaults",
              mimeType: "<value>",
              size: 505490,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-02-22T05:02:59.403Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-03-18T02:39:34.219Z"),
              sizeReadable: "<value>",
              publicUrl: "https://wise-kit.biz",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-10-16T19:49:07.268Z"),
          modifiedAt: new Date("2024-04-07T12:40:12.871Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 150658,
        },
        discount: {
          duration: "repeating",
          type: "percentage",
          amount: 251343,
          currency: "Swiss Franc",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-12-25T02:20:19.631Z"),
              modifiedAt: new Date("2022-10-10T12:16:52.345Z"),
              id: "<value>",
              metadata: {
                "key": 359870,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 465424,
            required: false,
          },
        ],
        customerMetadata: {
          "key": "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 558907,
      maxPage: 831639,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |