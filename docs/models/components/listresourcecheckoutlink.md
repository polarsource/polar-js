# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-09-09T21:26:26.151Z"),
      modifiedAt: new Date("2023-07-06T14:44:50.101Z"),
      id: "<value>",
      metadata: {
        "key": 3644.82,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://sociable-blight.name",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2023-05-06T18:46:31.484Z"),
          modifiedAt: new Date("2023-07-30T01:48:46.245Z"),
          id: "<value>",
          name: "<value>",
          description:
            "gadzooks whether obedient pish intensely modulo for for",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-02-19T06:27:31.905Z"),
              modifiedAt: new Date("2025-02-08T10:57:40.553Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2025-09-16T19:30:04.441Z"),
              modifiedAt: new Date("2025-09-14T19:09:25.804Z"),
              metadata: {
                "key": 957766,
              },
              type: "discord",
              description:
                "putrid wrong neglected see uh-huh whoa not outside hmph hollow",
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
              path: "/usr/include",
              mimeType: "<value>",
              size: 891478,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-03-15T22:56:12.575Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-01-23T01:28:32.431Z"),
              sizeReadable: "<value>",
              publicUrl: "https://voluminous-wear.com",
            },
          ],
        },
      ],
      discount: {
        duration: "once",
        durationInMonths: 339957,
        type: "percentage",
        amount: 796004,
        currency: "Guarani",
        createdAt: new Date("2023-09-19T19:25:20.184Z"),
        modifiedAt: new Date("2024-11-06T13:44:36.687Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-04-01T19:27:46.945Z"),
        endsAt: new Date("2025-06-29T15:53:41.746Z"),
        maxRedemptions: 686205,
        redemptionsCount: 371816,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2025-10-05T19:27:44.002Z"),
        modifiedAt: new Date("2024-05-08T04:39:21.225Z"),
        id: "<value>",
        name: "<value>",
        description: "an until hm",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-06-26T18:52:02.582Z"),
            modifiedAt: new Date("2023-08-09T18:18:27.217Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-03-26T02:42:25.604Z"),
            modifiedAt: new Date("2024-10-29T11:11:48.726Z"),
            metadata: {
              "key": 358903,
            },
            type: "custom",
            description:
              "unnecessarily sinful concerned practical pfft of oof juicy",
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
            path: "/usr/libdata",
            mimeType: "<value>",
            size: 70252,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-11-22T07:05:41.246Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-22T13:00:48.578Z"),
            sizeReadable: "<value>",
            publicUrl: "https://mixed-range.info",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-07-21T23:32:08.002Z"),
        modifiedAt: new Date("2024-12-07T06:02:40.939Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 923599,
      },
      url: "https://measly-husband.info/",
    },
  ],
  pagination: {
    totalCount: 419693,
    maxPage: 963568,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |