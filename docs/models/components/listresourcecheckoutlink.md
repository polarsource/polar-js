# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-07-11T02:38:25.234Z"),
      modifiedAt: new Date("2023-05-24T18:23:37.331Z"),
      id: "<value>",
      metadata: {
        "key": 940490,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://gigantic-shore.biz/",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2023-06-30T14:38:50.223Z"),
        modifiedAt: new Date("2023-07-28T19:17:35.373Z"),
        id: "<value>",
        name: "<value>",
        description:
          "besides viciously impostor youthfully implode ick sans in aha cheerful",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-12-08T08:01:33.093Z"),
            modifiedAt: new Date("2025-03-20T12:48:06.524Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 81000,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-09-30T01:25:20.761Z"),
            modifiedAt: new Date("2023-03-27T15:01:03.976Z"),
            id: "<value>",
            type: "discord",
            description:
              "around confute woot provided flint ski jungle tinderbox weakly",
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
            path: "/opt",
            mimeType: "<value>",
            size: 727645,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-10-23T17:28:25.330Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-01-18T18:59:13.114Z"),
            sizeReadable: "<value>",
            publicUrl: "https://unfit-crest.info",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-05-02T01:05:10.633Z"),
        modifiedAt: new Date("2025-08-23T12:17:46.590Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        basisPoints: 119158,
        createdAt: new Date("2025-06-15T07:00:27.081Z"),
        modifiedAt: new Date("2024-04-29T09:33:54.132Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-01-01T03:57:20.246Z"),
        endsAt: new Date("2023-05-07T01:41:54.981Z"),
        maxRedemptions: 368343,
        redemptionsCount: 397657,
        organizationId: "<value>",
      },
      url: "https://memorable-tomography.info",
    },
  ],
  pagination: {
    totalCount: 66963,
    maxPage: 457962,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |