# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-03-01T00:27:19.326Z"),
        modifiedAt: new Date("2024-06-08T19:11:06.560Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        clientSecret: "<value>",
        successUrl: "https://irresponsible-kinase.info",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2023-07-14T08:53:09.254Z"),
          modifiedAt: new Date("2024-06-12T15:23:06.895Z"),
          id: "<value>",
          name: "<value>",
          description:
            "card hmph how uselessly portray faint ferociously beyond qua",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-07-20T12:08:42.008Z"),
              modifiedAt: new Date("2023-08-28T10:00:00.988Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 284483,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-05-10T23:33:33.951Z"),
              modifiedAt: new Date("2023-09-02T08:37:51.173Z"),
              id: "<value>",
              type: "license_keys",
              description:
                "without upon table amid midst always jealously excitedly",
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
              size: 143096,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-08-13T06:17:28.680Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-04-03T02:58:06.798Z"),
              sizeReadable: "<value>",
              publicUrl: "https://exotic-term.name/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-09-27T13:25:44.103Z"),
          modifiedAt: new Date("2022-08-13T11:19:58.638Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 65329,
          recurringInterval: "year",
        },
        discount: {
          duration: "once",
          durationInMonths: 605091,
          type: "fixed",
          amount: 157070,
          currency: "Mauritius Rupee",
          createdAt: new Date("2024-01-02T06:51:40.408Z"),
          modifiedAt: new Date("2024-01-31T09:06:03.992Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-07-23T15:57:25.365Z"),
          endsAt: new Date("2023-01-05T21:57:51.624Z"),
          maxRedemptions: 926674,
          redemptionsCount: 481221,
          organizationId: "<value>",
        },
        url: "https://multicolored-zebra.org",
      },
    ],
    pagination: {
      totalCount: 987408,
      maxPage: 240387,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |