# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2023-10-14T09:05:36.750Z"),
      modifiedAt: new Date("2024-01-30T22:12:53.323Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "confirmed",
      clientSecret: "<value>",
      url: "https://leading-minion.com/",
      expiresAt: new Date("2023-12-03T10:32:14.023Z"),
      successUrl: "https://important-provider.biz",
      embedOrigin: "<value>",
      amount: 470724,
      taxAmount: 821046,
      currency: "Pula",
      subtotalAmount: 894928,
      totalAmount: 447246,
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
        country: "SE",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      metadata: {
        "key": 541834,
      },
      customerExternalId: "<id>",
      products: [
        {
          createdAt: new Date("2025-06-21T06:46:17.409Z"),
          modifiedAt: new Date("2023-07-24T13:22:51.932Z"),
          id: "<value>",
          name: "<value>",
          description: "vein dress unhappy rewrite",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-05-30T05:05:34.087Z"),
              modifiedAt: new Date("2023-09-16T23:07:17.927Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 660769,
              maximumAmount: 219095,
              presetAmount: 549008,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-06-26T16:20:01.687Z"),
              modifiedAt: new Date("2025-05-15T23:00:36.400Z"),
              id: "<value>",
              type: "license_keys",
              description: "fledgling developmental arrogantly",
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
              size: 425323,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-12-28T22:55:04.311Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-03-03T08:45:54.051Z"),
              sizeReadable: "<value>",
              publicUrl: "https://bustling-midwife.biz/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2024-02-18T08:34:01.840Z"),
        modifiedAt: new Date("2023-01-20T05:07:04.882Z"),
        id: "<value>",
        name: "<value>",
        description: "loyally internal pastel healthily",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-05-10T01:35:19.593Z"),
            modifiedAt: new Date("2023-10-24T15:37:48.458Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 708466,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-04-30T06:38:24.616Z"),
            modifiedAt: new Date("2025-04-09T15:43:12.475Z"),
            id: "<value>",
            type: "discord",
            description: "boo rudely hastily hm for impure stage whereas",
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
            size: 292291,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-07-09T06:31:28.422Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-12-29T18:54:48.908Z"),
            sizeReadable: "<value>",
            publicUrl: "https://rural-individual.com/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-03-27T00:27:03.075Z"),
        modifiedAt: new Date("2024-08-21T10:14:28.976Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        amount: 214040,
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
            createdAt: new Date("2024-11-11T05:07:40.672Z"),
            modifiedAt: new Date("2024-12-03T20:46:32.398Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 891799,
          required: false,
        },
      ],
      customerMetadata: {
        "key": false,
      },
    },
  ],
  pagination: {
    totalCount: 961027,
    maxPage: 228961,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |