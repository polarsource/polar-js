# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2023-11-04T15:15:56.312Z"),
      modifiedAt: new Date("2023-11-18T12:31:27.009Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "failed",
      clientSecret: "<value>",
      url: "https://all-trolley.com/",
      expiresAt: new Date("2023-02-17T02:28:27.960Z"),
      successUrl: "https://unconscious-executor.org/",
      embedOrigin: "<value>",
      amount: 865277,
      taxAmount: 280418,
      currency: "Som",
      subtotalAmount: 923738,
      totalAmount: 123286,
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
        country: "US",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      metadata: {
        "key": "<value>",
      },
      customerExternalId: "<id>",
      products: [
        {
          createdAt: new Date("2023-09-05T06:44:31.107Z"),
          modifiedAt: new Date("2023-07-16T14:38:54.956Z"),
          id: "<value>",
          name: "<value>",
          description: "thyme aw t-shirt",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-04-24T19:43:12.777Z"),
              modifiedAt: new Date("2024-03-10T21:34:54.948Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-10-24T10:57:13.571Z"),
              modifiedAt: new Date("2025-07-05T20:29:38.677Z"),
              id: "<value>",
              type: "license_keys",
              description: "safe reassemble traduce",
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
              path: "/sbin",
              mimeType: "<value>",
              size: 217880,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-12-24T04:54:14.402Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-08-23T06:42:29.876Z"),
              sizeReadable: "<value>",
              publicUrl: "https://enlightened-pantyhose.biz/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2024-08-11T17:55:42.095Z"),
        modifiedAt: new Date("2023-07-01T18:48:05.220Z"),
        id: "<value>",
        name: "<value>",
        description:
          "debut stealthily within footrest flustered as labourer boohoo",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-06-14T03:51:01.506Z"),
            modifiedAt: new Date("2024-10-01T20:58:37.340Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 130391,
            maximumAmount: 272077,
            presetAmount: 655131,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-02-15T01:23:01.586Z"),
            modifiedAt: new Date("2023-01-01T22:22:58.693Z"),
            id: "<value>",
            type: "license_keys",
            description:
              "whereas mmm warlike unnecessarily kaleidoscopic apropos mmm across and loosely",
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
            path: "/opt/include",
            mimeType: "<value>",
            size: 211031,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-05T20:51:23.814Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-01-27T00:03:50.601Z"),
            sizeReadable: "<value>",
            publicUrl: "https://fluffy-baritone.biz/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-03-19T06:06:09.580Z"),
        modifiedAt: new Date("2024-02-18T22:11:11.854Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        durationInMonths: 590966,
        type: "fixed",
        amount: 461968,
        currency: "Mauritius Rupee",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-12-03T10:32:14.023Z"),
            modifiedAt: new Date("2024-08-28T05:23:30.237Z"),
            id: "<value>",
            metadata: {
              "key": 715995,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 231322,
          required: false,
        },
      ],
      customerMetadata: {
        "key": 821046,
      },
    },
  ],
  pagination: {
    totalCount: 142769,
    maxPage: 894928,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |