# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2025-03-04T03:55:01.901Z"),
      modifiedAt: new Date("2024-02-24T18:44:40.406Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "failed",
      clientSecret: "<value>",
      url: "https://flustered-marathon.org/",
      expiresAt: new Date("2025-01-17T23:08:05.856Z"),
      successUrl: "https://kaleidoscopic-perfection.name",
      embedOrigin: "<value>",
      amount: 239123,
      taxAmount: 744576,
      currency: "Convertible Marks",
      subtotalAmount: 575124,
      totalAmount: 178015,
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
        country: "Christmas Island",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      metadata: {
        "key": false,
      },
      products: [
        {
          createdAt: new Date("2024-02-26T10:25:54.049Z"),
          modifiedAt: new Date("2024-07-23T11:51:33.211Z"),
          id: "<value>",
          name: "<value>",
          description: "coincide far dandelion an gift minion gah mummify",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-10-16T18:42:02.662Z"),
              modifiedAt: new Date("2025-12-29T14:28:56.848Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 530452,
              maximumAmount: 773381,
              presetAmount: 832596,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-11-15T08:05:56.849Z"),
              modifiedAt: new Date("2025-12-26T16:52:12.542Z"),
              id: "<value>",
              type: "github_repository",
              description: "nervous incidentally abnormally huzzah",
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
              path: "/usr/local/bin",
              mimeType: "<value>",
              size: 981974,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-04-28T19:28:15.954Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-07-11T04:31:02.339Z"),
              sizeReadable: "<value>",
              publicUrl: "https://average-lender.info/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2025-09-03T23:43:39.465Z"),
        modifiedAt: new Date("2024-01-09T01:39:56.054Z"),
        id: "<value>",
        name: "<value>",
        description:
          "sleepily kookily delight hmph despite pleased willing but pro",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-04-28T02:22:10.521Z"),
            modifiedAt: new Date("2024-08-16T20:36:27.976Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 92130,
            maximumAmount: 139432,
            presetAmount: 32442,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-06-27T23:59:54.198Z"),
            modifiedAt: new Date("2023-09-01T22:40:44.792Z"),
            id: "<value>",
            type: "downloadables",
            description: "across haversack hasty",
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
            path: "/home/user",
            mimeType: "<value>",
            size: 665124,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-10-05T11:03:56.983Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-11-18T07:34:59.752Z"),
            sizeReadable: "<value>",
            publicUrl: "https://right-understanding.info",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-02-24T05:49:24.787Z"),
        modifiedAt: new Date("2023-01-15T12:50:59.883Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 863273,
        maximumAmount: 32623,
        presetAmount: 941845,
      },
      discount: {
        duration: "repeating",
        durationInMonths: 642670,
        type: "fixed",
        basisPoints: 803994,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-11-17T08:26:15.219Z"),
            modifiedAt: new Date("2023-07-09T06:31:28.422Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 192181,
          required: false,
        },
      ],
      customerMetadata: {
        "key": false,
      },
    },
  ],
  pagination: {
    totalCount: 462072,
    maxPage: 33295,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |