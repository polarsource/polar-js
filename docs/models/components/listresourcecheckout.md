# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2025-04-26T13:16:00.734Z"),
      modifiedAt: new Date("2025-02-04T18:30:24.992Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "confirmed",
      clientSecret: "<value>",
      url: "https://sophisticated-department.biz",
      expiresAt: new Date("2024-06-15T13:05:35.278Z"),
      successUrl: "https://alienated-mom.info/",
      embedOrigin: "<value>",
      amount: 576380,
      taxAmount: 914824,
      currency: "Guyana Dollar",
      subtotalAmount: 107835,
      totalAmount: 206518,
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
        "key": false,
      },
      products: [
        {
          createdAt: new Date("2024-08-24T18:51:00.647Z"),
          modifiedAt: new Date("2025-12-26T14:38:19.239Z"),
          id: "<value>",
          name: "<value>",
          description: "eke whose rightfully hence density",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-11-21T12:06:42.367Z"),
              modifiedAt: new Date("2023-12-31T20:50:06.920Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 97839,
              maximumAmount: 894885,
              presetAmount: 497958,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-05-09T23:59:58.974Z"),
              modifiedAt: new Date("2025-07-27T07:18:37.950Z"),
              id: "<value>",
              type: "custom",
              description: "dally woot down whereas team since whereas mmm",
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
              path: "/usr/libexec",
              mimeType: "<value>",
              size: 608103,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-09-16T16:37:59.200Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-01-31T10:56:21.274Z"),
              sizeReadable: "<value>",
              publicUrl: "https://unaware-hydrolyze.info/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2023-08-12T17:54:50.405Z"),
        modifiedAt: new Date("2024-11-05T14:24:16.309Z"),
        id: "<value>",
        name: "<value>",
        description:
          "consequently even because agreeable worth geez during godfather phew per",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-03-23T22:47:32.575Z"),
            modifiedAt: new Date("2023-12-10T02:49:59.396Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 825257,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-01-11T18:22:31.099Z"),
            modifiedAt: new Date("2025-08-14T22:50:28.709Z"),
            id: "<value>",
            type: "custom",
            description: "outnumber decriminalize psst expatiate",
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
            size: 96538,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-09-24T23:50:30.634Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-08T10:13:51.600Z"),
            sizeReadable: "<value>",
            publicUrl: "https://dull-hope.org/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-11-26T11:27:09.590Z"),
        modifiedAt: new Date("2025-05-10T16:19:06.783Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 718538,
        maximumAmount: 49220,
        presetAmount: 926558,
      },
      discount: {
        duration: "once",
        durationInMonths: 448226,
        type: "percentage",
        amount: 250506,
        currency: "Venezuelan bolívar",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-04-08T22:26:55.472Z"),
            modifiedAt: new Date("2024-10-18T20:37:12.120Z"),
            id: "<value>",
            metadata: {
              "key": 671505,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 43445,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 703145,
    maxPage: 344401,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |