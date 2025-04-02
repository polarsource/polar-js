# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-12-02T23:49:01.578Z"),
      modifiedAt: new Date("2023-05-16T08:11:45.795Z"),
      id: "<value>",
      metadata: {
        "key": 654833,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://minor-underpants.biz/",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2023-07-11T19:27:37.850Z"),
          modifiedAt: new Date("2025-09-21T16:35:34.104Z"),
          id: "<value>",
          name: "<value>",
          description: "limp yuck like yuck black-and-white about",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-09-13T07:17:27.740Z"),
              modifiedAt: new Date("2025-08-09T01:53:56.642Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 742122,
              maximumAmount: 612969,
              presetAmount: 862722,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-08-05T17:54:32.565Z"),
              modifiedAt: new Date("2024-07-20T20:59:47.090Z"),
              id: "<value>",
              type: "meter_credit",
              description: "sheathe runny absent now valuable accurate next",
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
              path: "/selinux",
              mimeType: "<value>",
              size: 68314,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-04-25T05:56:55.870Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-10-19T11:47:06.902Z"),
              sizeReadable: "<value>",
              publicUrl: "https://elegant-possession.com",
            },
          ],
        },
      ],
      discount: {
        duration: "once",
        durationInMonths: 842686,
        type: "percentage",
        amount: 977241,
        currency: "Pula",
        createdAt: new Date("2025-07-27T06:53:00.076Z"),
        modifiedAt: new Date("2025-03-15T19:17:39.043Z"),
        id: "<value>",
        metadata: {
          "key": 17902,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-03-17T14:54:52.778Z"),
        endsAt: new Date("2023-04-18T13:40:59.739Z"),
        maxRedemptions: 808944,
        redemptionsCount: 798494,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2023-08-25T10:29:18.102Z"),
        modifiedAt: new Date("2025-11-24T15:15:39.142Z"),
        id: "<value>",
        name: "<value>",
        description: "within blah er circa miskey posh drat where climb",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-08-02T10:54:37.794Z"),
            modifiedAt: new Date("2024-08-27T03:29:22.689Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 857502,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-05-16T11:26:11.280Z"),
            modifiedAt: new Date("2025-05-17T20:32:17.192Z"),
            id: "<value>",
            type: "meter_credit",
            description: "madly hard-to-find gee ouch zowie till chops",
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
            path: "/var/mail",
            mimeType: "<value>",
            size: 989504,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-03-18T15:09:13.566Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-03-02T23:53:00.999Z"),
            sizeReadable: "<value>",
            publicUrl: "https://warped-glider.biz/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-01-20T09:50:42.405Z"),
        modifiedAt: new Date("2023-05-03T10:24:27.619Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 278706,
      },
      url: "https://sniveling-marten.biz/",
    },
  ],
  pagination: {
    totalCount: 754898,
    maxPage: 637724,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |