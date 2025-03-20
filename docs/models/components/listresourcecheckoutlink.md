# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2025-11-28T22:17:24.181Z"),
      modifiedAt: new Date("2023-11-05T13:23:20.741Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://warped-airman.org",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2023-03-31T05:08:04.982Z"),
          modifiedAt: new Date("2023-12-10T11:19:22.816Z"),
          id: "<value>",
          name: "<value>",
          description:
            "ostrich at sit heartfelt filthy abnormally gee convalesce",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-12-06T22:09:36.543Z"),
              modifiedAt: new Date("2023-05-27T13:52:53.446Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 478216,
              maximumAmount: 184149,
              presetAmount: 161431,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-06-16T05:18:39.218Z"),
              modifiedAt: new Date("2024-09-02T05:46:16.237Z"),
              id: "<value>",
              type: "github_repository",
              description: "because whoever obediently tired gosh enrage",
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
              path: "/Users",
              mimeType: "<value>",
              size: 517521,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-12-26T19:13:47.010Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-03-29T13:32:11.830Z"),
              sizeReadable: "<value>",
              publicUrl: "https://insecure-intervention.net/",
            },
          ],
        },
      ],
      discount: {
        duration: "forever",
        durationInMonths: 233837,
        type: "percentage",
        amount: 722112,
        currency: "Boliviano boliviano",
        createdAt: new Date("2024-10-11T13:11:40.528Z"),
        modifiedAt: new Date("2023-04-07T12:04:04.470Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-01-07T19:21:33.053Z"),
        endsAt: new Date("2023-01-23T04:56:57.409Z"),
        maxRedemptions: 503615,
        redemptionsCount: 121862,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2024-12-14T10:23:59.029Z"),
        modifiedAt: new Date("2025-03-12T04:23:02.705Z"),
        id: "<value>",
        name: "<value>",
        description:
          "whoever recent aha crossly unfortunate toward who pillbox than",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-03-26T09:56:20.287Z"),
            modifiedAt: new Date("2023-05-07T03:52:19.100Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 111913,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-07-05T21:20:37.622Z"),
            modifiedAt: new Date("2025-01-13T13:07:52.067Z"),
            id: "<value>",
            type: "downloadables",
            description:
              "exaggerate first adjourn consequently rightfully gosh",
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
            path: "/private/var",
            mimeType: "<value>",
            size: 294975,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-03-31T06:44:53.428Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-10-23T18:03:37.523Z"),
            sizeReadable: "<value>",
            publicUrl: "https://dual-brook.net/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-03-05T13:59:29.287Z"),
        modifiedAt: new Date("2025-11-19T12:36:32.087Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 529061,
        maximumAmount: 266560,
        presetAmount: 248004,
      },
      url: "https://massive-elevation.name/",
    },
  ],
  pagination: {
    totalCount: 770792,
    maxPage: 689579,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |