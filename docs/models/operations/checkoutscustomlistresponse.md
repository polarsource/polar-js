# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations/checkoutscustomlist.js";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-10-23T09:17:13.863Z"),
        modifiedAt: new Date("2024-10-18T07:47:44.539Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "open",
        clientSecret: "<value>",
        url: "https://important-brook.name/",
        expiresAt: new Date("2025-05-16T07:21:18.933Z"),
        successUrl: "https://big-nun.biz/",
        embedOrigin: "<value>",
        amount: 380035,
        taxAmount: 192779,
        currency: "New Zealand Dollar",
        subtotalAmount: 818926,
        totalAmount: 858543,
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
          country: "Samoa",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        metadata: {
          "key": 555825,
        },
        product: {
          createdAt: new Date("2023-08-11T11:47:49.202Z"),
          modifiedAt: new Date("2023-01-17T15:41:24.386Z"),
          id: "<value>",
          name: "<value>",
          description: "to aha cripple parade whoa horde range",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-04-25T07:49:56.848Z"),
              modifiedAt: new Date("2023-02-06T23:30:01.627Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 473214,
              maximumAmount: 575300,
              presetAmount: 351869,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-06-18T20:31:13.886Z"),
              modifiedAt: new Date("2023-05-19T22:17:21.271Z"),
              id: "<value>",
              type: "custom",
              description:
                "essence think plan boo barring paltry what how ouch splosh",
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
              size: 532711,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-08-15T06:07:54.440Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-01-30T08:56:13.071Z"),
              sizeReadable: "<value>",
              publicUrl: "https://athletic-parsnip.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-03-03T07:12:01.015Z"),
          modifiedAt: new Date("2025-12-17T17:59:43.205Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 479872,
          maximumAmount: 824900,
          presetAmount: 929707,
          recurringInterval: "year",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          basisPoints: 272187,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-04-09T14:14:15.442Z"),
              modifiedAt: new Date("2023-06-28T09:01:18.116Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 714891,
            required: false,
          },
        ],
        customerMetadata: {
          "key": "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 633006,
      maxPage: 365539,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |