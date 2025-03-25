# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-02-19T03:41:15.084Z"),
      modifiedAt: new Date("2024-12-02T01:24:28.573Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "succeeded",
      clientSecret: "<value>",
      url: "https://icy-warming.com/",
      expiresAt: new Date("2024-05-17T23:11:42.440Z"),
      successUrl: "https://superb-elevator.net/",
      embedOrigin: "<value>",
      amount: 2200,
      discountAmount: 490750,
      netAmount: 319320,
      taxAmount: 808156,
      totalAmount: 402947,
      currency: "Convertible Marks",
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
        country: "FR",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      subtotalAmount: 13223,
      metadata: {
        "key": 498330,
      },
      customerExternalId: "<id>",
      products: [
        {
          createdAt: new Date("2025-03-23T22:47:32.575Z"),
          modifiedAt: new Date("2023-12-10T02:49:59.396Z"),
          id: "<value>",
          name: "<value>",
          description: "daily ugh youthfully",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-07-07T09:44:17.770Z"),
              modifiedAt: new Date("2024-07-06T11:45:30.620Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 891464,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-01-26T11:24:48.308Z"),
              modifiedAt: new Date("2025-03-12T21:52:07.391Z"),
              id: "<value>",
              type: "license_keys",
              description: "woot smoothly gosh gadzooks where",
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
              path: "/usr/lib",
              mimeType: "<value>",
              size: 627626,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-11-12T00:40:22.457Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-01-24T01:52:59.582Z"),
              sizeReadable: "<value>",
              publicUrl: "https://lawful-e-mail.biz/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2025-12-10T09:42:46.729Z"),
        modifiedAt: new Date("2023-02-18T11:10:32.278Z"),
        id: "<value>",
        name: "<value>",
        description: "er apud amidst",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-02-12T00:39:06.977Z"),
            modifiedAt: new Date("2025-09-20T03:09:49.442Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-07-05T14:21:45.884Z"),
            modifiedAt: new Date("2024-03-24T22:59:34.235Z"),
            id: "<value>",
            type: "github_repository",
            description: "t-shirt short briskly pink behest yet huzzah",
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
            path: "/usr",
            mimeType: "<value>",
            size: 531236,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-11-28T11:56:44.649Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-05-27T15:49:28.029Z"),
            sizeReadable: "<value>",
            publicUrl: "https://general-nun.biz",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-04-18T05:18:51.847Z"),
        modifiedAt: new Date("2025-05-11T19:29:38.167Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 771289,
        maximumAmount: 143941,
        presetAmount: 252409,
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        basisPoints: 134387,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-04-10T23:52:52.292Z"),
            modifiedAt: new Date("2023-02-17T00:20:01.255Z"),
            id: "<value>",
            metadata: {
              "key": 224411,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 297626,
          required: false,
        },
      ],
      customerMetadata: {
        "key": 351246,
      },
    },
  ],
  pagination: {
    totalCount: 995655,
    maxPage: 228221,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |