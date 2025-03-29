# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-07-01T09:39:28.718Z"),
      modifiedAt: new Date("2023-02-02T09:52:45.117Z"),
      id: "<value>",
      metadata: {
        "key": 261579,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://frivolous-coal.org/",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2024-04-15T11:45:01.652Z"),
          modifiedAt: new Date("2024-11-30T00:45:45.135Z"),
          id: "<value>",
          name: "<value>",
          description:
            "excepting beneath thump exasperation meh snappy gosh consequently per minus",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-12-17T11:55:53.035Z"),
              modifiedAt: new Date("2024-11-07T14:14:27.402Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 28751,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-09-25T11:24:04.477Z"),
              modifiedAt: new Date("2024-05-11T07:16:04.376Z"),
              id: "<value>",
              type: "license_keys",
              description: "circa duh politely amongst next explode blindly",
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
              path: "/etc/namedb",
              mimeType: "<value>",
              size: 587466,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-07-20T18:40:18.501Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-04-24T12:36:59.831Z"),
              sizeReadable: "<value>",
              publicUrl: "https://favorite-hawk.org",
            },
          ],
        },
      ],
      discount: {
        duration: "repeating",
        type: "percentage",
        basisPoints: 446714,
        createdAt: new Date("2024-04-17T04:00:42.753Z"),
        modifiedAt: new Date("2024-05-30T08:15:17.595Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-02-03T12:32:42.552Z"),
        endsAt: new Date("2025-08-28T06:27:33.846Z"),
        maxRedemptions: 40916,
        redemptionsCount: 252835,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2025-09-10T12:54:55.673Z"),
        modifiedAt: new Date("2025-10-19T07:36:29.018Z"),
        id: "<value>",
        name: "<value>",
        description: "till what now conceal",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-06-14T01:48:27.572Z"),
            modifiedAt: new Date("2025-11-28T22:17:24.181Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 669828,
            maximumAmount: 844281,
            presetAmount: 939456,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-01-28T18:11:01.832Z"),
            modifiedAt: new Date("2025-07-15T05:59:42.148Z"),
            id: "<value>",
            type: "custom",
            description: "woot snack as ugh sugary",
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
            path: "/lost+found",
            mimeType: "<value>",
            size: 914395,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-03-16T15:09:49.842Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-04T02:47:44.010Z"),
            sizeReadable: "<value>",
            publicUrl: "https://another-bookend.com/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-04-01T18:21:58.502Z"),
        modifiedAt: new Date("2024-10-29T01:30:18.182Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        unitAmount: 621066,
        includedUnits: 352366,
        capAmount: 856289,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
      url: "https://infinite-freezing.biz",
    },
  ],
  pagination: {
    totalCount: 174788,
    maxPage: 451484,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |