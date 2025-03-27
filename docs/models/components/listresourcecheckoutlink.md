# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2023-05-26T03:50:47.351Z"),
      modifiedAt: new Date("2025-09-05T00:05:28.311Z"),
      id: "<value>",
      metadata: {
        "key": 407877,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://earnest-fishery.net",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2024-09-09T13:37:48.525Z"),
          modifiedAt: new Date("2025-04-15T10:58:58.826Z"),
          id: "<value>",
          name: "<value>",
          description:
            "furthermore never worth doodle disarm inasmuch obvious but sizzle",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-11-07T17:07:49.738Z"),
              modifiedAt: new Date("2023-01-03T18:06:17.093Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 583013,
              maximumAmount: 672865,
              presetAmount: 624241,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-10-18T12:27:31.429Z"),
              modifiedAt: new Date("2023-04-23T05:51:20.061Z"),
              id: "<value>",
              type: "discord",
              description: "that or responsible pish round whoa",
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
              path: "/opt/bin",
              mimeType: "<value>",
              size: 323168,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-03-25T09:46:45.207Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-06-21T07:51:38.001Z"),
              sizeReadable: "<value>",
              publicUrl: "https://jam-packed-premise.info",
            },
          ],
        },
      ],
      discount: {
        duration: "forever",
        durationInMonths: 111203,
        type: "fixed",
        basisPoints: 360131,
        createdAt: new Date("2023-02-07T09:04:35.807Z"),
        modifiedAt: new Date("2024-01-19T06:45:59.460Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-10-12T13:49:00.865Z"),
        endsAt: new Date("2025-03-04T12:10:07.981Z"),
        maxRedemptions: 154139,
        redemptionsCount: 169320,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2023-11-21T22:53:54.525Z"),
        modifiedAt: new Date("2023-01-17T00:25:32.190Z"),
        id: "<value>",
        name: "<value>",
        description: "to since circa in failing squeaky",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-09-29T04:13:26.424Z"),
            modifiedAt: new Date("2024-03-16T15:09:49.842Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 35044,
            maximumAmount: 91754,
            presetAmount: 2178,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-04-24T14:32:28.870Z"),
            modifiedAt: new Date("2025-04-12T13:21:57.521Z"),
            id: "<value>",
            type: "github_repository",
            description:
              "infinite expatiate mid freely questionably whoever per",
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
            path: "/rescue",
            mimeType: "<value>",
            size: 859509,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-12-25T05:35:55.283Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-06-24T20:54:21.122Z"),
            sizeReadable: "<value>",
            publicUrl: "https://outlandish-best-seller.net",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-04-24T09:01:08.745Z"),
        modifiedAt: new Date("2025-12-11T00:30:42.283Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 717730,
      },
      url: "https://questionable-league.name/",
    },
  ],
  pagination: {
    totalCount: 413836,
    maxPage: 154167,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |