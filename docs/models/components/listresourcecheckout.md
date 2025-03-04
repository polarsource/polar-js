# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-09-24T23:50:30.634Z"),
      modifiedAt: new Date("2024-08-08T10:13:51.600Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "confirmed",
      clientSecret: "<value>",
      url: "https://intent-starboard.net/",
      expiresAt: new Date("2024-04-27T21:37:38.772Z"),
      successUrl: "https://spirited-apricot.net",
      embedOrigin: "<value>",
      amount: 718538,
      taxAmount: 49220,
      currency: "Vatu",
      subtotalAmount: 467039,
      totalAmount: 239127,
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
        country: "Jamaica",
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
          createdAt: new Date("2023-10-02T13:18:18.281Z"),
          modifiedAt: new Date("2025-09-28T20:17:48.593Z"),
          id: "<value>",
          name: "<value>",
          description: "searchingly well-made apricot",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-02-17T02:28:27.960Z"),
              modifiedAt: new Date("2024-05-17T13:34:30.080Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 932252,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-08-06T08:13:26.167Z"),
              modifiedAt: new Date("2023-11-04T08:06:43.162Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "separately priesthood technician ha warm recklessly sniveling through pish till",
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
              path: "/rescue",
              mimeType: "<value>",
              size: 969433,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-05-27T15:49:28.029Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-08-04T16:05:30.256Z"),
              sizeReadable: "<value>",
              publicUrl: "https://pleasant-creator.org/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2024-04-24T23:05:43.722Z"),
        modifiedAt: new Date("2024-04-18T05:18:51.847Z"),
        id: "<value>",
        name: "<value>",
        description:
          "upon furthermore stratify now damaged patiently skean ascertain nor",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-03-02T06:53:46.855Z"),
            modifiedAt: new Date("2025-12-28T05:16:15.334Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-05-21T18:31:46.006Z"),
            modifiedAt: new Date("2024-12-24T04:00:47.026Z"),
            id: "<value>",
            type: "downloadables",
            description:
              "lean from quarrel finally altruistic inside sensitize lest aside circa",
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
            path: "/srv",
            mimeType: "<value>",
            size: 224524,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-05-21T07:36:17.577Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-09-22T02:45:55.509Z"),
            sizeReadable: "<value>",
            publicUrl: "https://functional-marketplace.info/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-05-30T21:54:59.370Z"),
        modifiedAt: new Date("2025-06-18T20:47:45.015Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 447246,
      },
      discount: {
        duration: "forever",
        durationInMonths: 541834,
        type: "percentage",
        amount: 186640,
        currency: "Bahamian Dollar",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-12-29T14:28:56.848Z"),
            modifiedAt: new Date("2023-04-19T08:31:46.576Z"),
            id: "<value>",
            metadata: {
              "key": 773381,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 832596,
          required: false,
        },
      ],
      customerMetadata: {
        "key": false,
      },
    },
  ],
  pagination: {
    totalCount: 995167,
    maxPage: 552256,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |