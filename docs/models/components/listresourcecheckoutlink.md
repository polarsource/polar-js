# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-07-01T06:21:44.983Z"),
      modifiedAt: new Date("2024-01-10T13:58:51.311Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://hot-singing.com/",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2024-09-17T03:44:36.212Z"),
          modifiedAt: new Date("2024-11-08T19:57:09.022Z"),
          id: "<value>",
          name: "<value>",
          description:
            "why highly cauliflower meanwhile a space prejudge oof awkwardly inasmuch",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-03-01T13:04:14.388Z"),
              modifiedAt: new Date("2023-10-16T02:53:01.534Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-11-17T10:52:20.252Z"),
              modifiedAt: new Date("2023-02-26T15:31:31.267Z"),
              id: "<value>",
              type: "discord",
              description: "qua ha cap than times thankfully lost fooey",
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
              path: "/usr/X11R6",
              mimeType: "<value>",
              size: 923184,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-10-28T15:58:42.928Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-05-28T19:17:18.923Z"),
              sizeReadable: "<value>",
              publicUrl: "https://tattered-importance.info",
            },
          ],
        },
      ],
      discount: {
        duration: "once",
        type: "fixed",
        basisPoints: 366026,
        createdAt: new Date("2024-01-09T08:04:19.587Z"),
        modifiedAt: new Date("2023-05-13T02:15:57.626Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-01-02T06:57:33.906Z"),
        endsAt: new Date("2023-01-29T06:24:38.751Z"),
        maxRedemptions: 540160,
        redemptionsCount: 153803,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2024-07-14T07:08:04.117Z"),
        modifiedAt: new Date("2025-04-25T07:01:38.359Z"),
        id: "<value>",
        name: "<value>",
        description: "unlike eek courtroom and intend begonia",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-09-06T13:05:11.308Z"),
            modifiedAt: new Date("2024-04-16T21:05:59.681Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 337047,
            maximumAmount: 881238,
            presetAmount: 202737,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-06-29T08:44:46.296Z"),
            modifiedAt: new Date("2023-03-25T07:10:48.505Z"),
            id: "<value>",
            type: "license_keys",
            description: "good-natured furthermore incidentally pacemaker",
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
            path: "/var/log",
            mimeType: "<value>",
            size: 572474,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-05-20T04:35:09.735Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-05-14T06:50:38.439Z"),
            sizeReadable: "<value>",
            publicUrl: "https://impressionable-maestro.info",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-03-26T21:37:08.155Z"),
        modifiedAt: new Date("2024-12-10T04:09:29.451Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      url: "https://frightened-doing.org/",
    },
  ],
  pagination: {
    totalCount: 859375,
    maxPage: 15344,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |