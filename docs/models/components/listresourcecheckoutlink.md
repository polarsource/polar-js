# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2023-01-09T14:55:51.614Z"),
      modifiedAt: new Date("2024-08-07T04:58:13.944Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://well-lit-approach.com",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2024-07-19T02:09:27.293Z"),
        modifiedAt: new Date("2025-12-12T18:40:59.500Z"),
        id: "<value>",
        name: "<value>",
        description: "uh-huh hunger sternly blah doubter meh",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-05-31T09:09:47.828Z"),
            modifiedAt: new Date("2023-06-30T19:18:45.946Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 921974,
            maximumAmount: 80205,
            presetAmount: 137914,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-12-16T19:30:08.420Z"),
            modifiedAt: new Date("2023-09-03T20:58:16.570Z"),
            id: "<value>",
            type: "downloadables",
            description: "provided flint ski jungle tinderbox weakly",
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