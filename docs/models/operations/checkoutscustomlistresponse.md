# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-09-22T07:56:37.387Z"),
        modifiedAt: new Date("2024-12-08T16:49:01.680Z"),
        id: "<value>",
        paymentProcessor: "stripe",
        status: "expired",
        clientSecret: "<value>",
        url: "https://eminent-planula.org",
        expiresAt: new Date("2024-01-02T17:03:51.334Z"),
        successUrl: "https://warped-marathon.net/",
        embedOrigin: "<value>",
        amount: 946202,
        taxAmount: 874870,
        currency: "Moroccan Dirham",
        subtotalAmount: 977311,
        totalAmount: 437750,
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
          country: "Dominica",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {
          "key": "<value>",
        },
        metadata: {
          "key": false,
        },
        product: {
          createdAt: new Date("2025-08-24T16:41:03.135Z"),
          modifiedAt: new Date("2023-03-07T02:01:25.736Z"),
          id: "<value>",
          name: "<value>",
          description:
            "yowza reiterate if meanwhile unaccountably between against provider",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-08-02T08:02:13.737Z"),
              modifiedAt: new Date("2023-07-03T16:53:40.680Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 977856,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-10-28T12:28:00.902Z"),
              modifiedAt: new Date("2024-04-18T21:02:57.554Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "meanwhile actual uh-huh triumphantly amongst affectionate although meh gnaw",
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
              path: "/private/var",
              mimeType: "<value>",
              size: 81302,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-12-22T06:34:42.486Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-09-30T13:17:31.050Z"),
              sizeReadable: "<value>",
              publicUrl: "https://parallel-testimonial.info",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-09-16T16:26:01.820Z"),
          modifiedAt: new Date("2023-02-25T00:32:40.607Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 943054,
          type: "fixed",
          basisPoints: 291293,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-08-21T18:01:23.530Z"),
              modifiedAt: new Date("2025-03-03T10:19:31.167Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 769067,
            required: false,
          },
        ],
        customerMetadata: {
          "key": false,
        },
      },
    ],
    pagination: {
      totalCount: 110989,
      maxPage: 338278,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |