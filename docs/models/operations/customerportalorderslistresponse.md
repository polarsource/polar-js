# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-11-06T05:51:47.281Z"),
        modifiedAt: new Date("2023-04-17T22:03:33.923Z"),
        id: "<value>",
        amount: 230217,
        taxAmount: 299227,
        currency: "Forint",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-04-16T17:08:57.790Z"),
          modifiedAt: new Date("2023-06-19T12:29:53.961Z"),
          id: "<value>",
          name: "<value>",
          description:
            "ride quit indeed tooth above absentmindedly ouch nor unless",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-12-08T16:10:07.436Z"),
              modifiedAt: new Date("2024-12-04T07:36:09.332Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 414709,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-11-18T08:24:51.450Z"),
              modifiedAt: new Date("2024-03-03T07:12:01.015Z"),
              id: "<value>",
              type: "license_keys",
              description: "frenetically print technologist violin gorgeous if",
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
              path: "/mnt",
              mimeType: "<value>",
              size: 502849,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-02-15T18:47:12.706Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-06-30T15:21:44.204Z"),
              sizeReadable: "<value>",
              publicUrl: "https://close-warming.biz",
            },
          ],
          organization: {
            createdAt: new Date("2023-09-12T20:59:04.584Z"),
            modifiedAt: new Date("2025-08-08T17:52:44.076Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://magnificent-swath.info",
            bio: "<value>",
            company: "Reichert - Gislason",
            blog: "<value>",
            location: "<value>",
            email: "Tod59@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 946286,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 709877,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2025-04-27T21:01:21.314Z"),
          modifiedAt: new Date("2023-02-06T13:50:17.641Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 879959,
          maximumAmount: 672564,
          presetAmount: 237147,
          recurringInterval: "month",
        },
        subscription: {
          createdAt: new Date("2023-02-01T20:40:14.607Z"),
          modifiedAt: new Date("2023-03-19T06:56:52.426Z"),
          id: "<value>",
          amount: 550269,
          currency: "Djibouti Franc",
          recurringInterval: "month",
          status: "unpaid",
          currentPeriodStart: new Date("2024-12-16T14:56:41.104Z"),
          currentPeriodEnd: new Date("2023-02-17T10:35:03.330Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-11-21T16:58:57.381Z"),
          endedAt: new Date("2023-07-20T12:23:36.438Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 958209,
      maxPage: 306241,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |