# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-12-05T06:03:53.905Z"),
      modifiedAt: new Date("2025-07-09T17:23:10.289Z"),
      id: "<value>",
      metadata: {
        "key": 327241,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://petty-ceramics.org/",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2023-01-31T10:58:28.890Z"),
          modifiedAt: new Date("2025-07-15T10:46:01.390Z"),
          id: "<value>",
          name: "<value>",
          description: "incidentally pacemaker oddly injunction",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-07-30T20:58:46.367Z"),
              modifiedAt: new Date("2023-01-17T19:37:54.010Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-12-28T14:16:16.603Z"),
              modifiedAt: new Date("2025-10-04T14:30:45.103Z"),
              id: "<value>",
              type: "discord",
              description: "tentacle provided slight acknowledge indeed",
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
              path: "/boot",
              mimeType: "<value>",
              size: 314354,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-01-20T02:46:22.982Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-06-24T19:23:05.706Z"),
              sizeReadable: "<value>",
              publicUrl: "https://zesty-legend.org",
            },
          ],
        },
      ],
      discount: {
        duration: "forever",
        type: "fixed",
        basisPoints: 570826,
        createdAt: new Date("2023-10-13T13:49:23.922Z"),
        modifiedAt: new Date("2023-10-28T08:34:11.346Z"),
        id: "<value>",
        metadata: {
          "key": 653738,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-11-07T14:14:27.402Z"),
        endsAt: new Date("2023-12-02T16:16:28.830Z"),
        maxRedemptions: 28751,
        redemptionsCount: 244046,
        organizationId: "<value>",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2024-05-11T07:16:04.376Z"),
        modifiedAt: new Date("2025-09-23T19:53:37.650Z"),
        id: "<value>",
        name: "<value>",
        description: "circa duh politely amongst next explode blindly",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-04-24T12:36:59.831Z"),
            modifiedAt: new Date("2025-02-24T18:58:43.313Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 938217,
            maximumAmount: 567090,
            presetAmount: 681434,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-03-28T01:33:27.085Z"),
            modifiedAt: new Date("2024-05-04T14:22:26.737Z"),
            id: "<value>",
            type: "github_repository",
            description: "upon exasperation uh-huh chilly repurpose ew",
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
            size: 844281,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-10-26T15:27:03.943Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-01-28T18:11:01.832Z"),
            sizeReadable: "<value>",
            publicUrl: "https://bossy-extent.net",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-03-25T14:19:00.405Z"),
        modifiedAt: new Date("2024-09-02T05:10:29.477Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 413557,
        maximumAmount: 628156,
        presetAmount: 917050,
      },
      url: "https://ill-fraudster.biz/",
    },
  ],
  pagination: {
    totalCount: 832764,
    maxPage: 230161,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |