# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-08-13T21:39:34.088Z"),
      modifiedAt: new Date("2025-07-06T14:11:46.257Z"),
      id: "<value>",
      metadata: {
        "key": 376918,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://dreary-bend.info",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2024-01-09T08:04:19.587Z"),
          modifiedAt: new Date("2023-05-13T02:15:57.626Z"),
          id: "<value>",
          name: "<value>",
          description:
            "woot unlike eek courtroom and intend begonia incidentally minus",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-07-09T17:23:10.289Z"),
              modifiedAt: new Date("2024-07-09T23:02:48.548Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-10-27T01:42:53.755Z"),
              modifiedAt: new Date("2023-05-25T16:14:36.352Z"),
              id: "<value>",
              type: "license_keys",
              description: "masquerade ick save",
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
              path: "/opt/lib",
              mimeType: "<value>",
              size: 539394,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-04-10T16:12:05.280Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-09-03T18:31:34.012Z"),
              sizeReadable: "<value>",
              publicUrl: "https://silky-passport.info",
            },
          ],
        },
      ],
      discount: {
        duration: "once",
        durationInMonths: 265724,
        type: "percentage",
        amount: 859375,
        currency: "Lek",
        createdAt: new Date("2025-02-27T16:31:31.253Z"),
        modifiedAt: new Date("2023-12-28T14:16:16.603Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-09-23T08:43:42.632Z"),
        endsAt: new Date("2024-01-03T14:26:39.010Z"),
        maxRedemptions: 747336,
        redemptionsCount: 74099,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2025-02-15T00:15:32.715Z"),
        modifiedAt: new Date("2025-01-09T10:45:06.401Z"),
        id: "<value>",
        name: "<value>",
        description: "meh snappy gosh consequently per",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-08-01T02:04:13.457Z"),
            modifiedAt: new Date("2024-10-12T16:13:10.854Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
            priceCurrency: "<value>",
            unitAmount: 260562,
            includedUnits: 274048,
            capAmount: 433878,
            meterId: "<value>",
            meter: {
              id: "<value>",
              name: "<value>",
            },
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-12-17T11:55:53.035Z"),
            modifiedAt: new Date("2024-11-07T14:14:27.402Z"),
            id: "<value>",
            type: "discord",
            description: "juicy oval reschedule",
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
            path: "/etc/mail",
            mimeType: "<value>",
            size: 797917,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-10-12T11:36:46.504Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-10-04T16:51:57.858Z"),
            sizeReadable: "<value>",
            publicUrl: "https://deficient-hunger.net",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-06-10T17:35:29.868Z"),
        modifiedAt: new Date("2024-11-07T17:07:49.738Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 583013,
      },
      url: "https://possible-nephew.com",
    },
  ],
  pagination: {
    totalCount: 235224,
    maxPage: 463917,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |