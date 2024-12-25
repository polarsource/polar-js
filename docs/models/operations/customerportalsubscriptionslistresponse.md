# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-27T23:06:00.390Z"),
        modifiedAt: new Date("2024-07-23T14:11:18.603Z"),
        id: "<value>",
        amount: 210806,
        currency: "Peso Uruguayo",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2023-04-21T12:22:07.487Z"),
        currentPeriodEnd: new Date("2022-06-28T21:12:27.512Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-07-14T22:11:33.289Z"),
        endedAt: new Date("2022-02-27T02:03:56.820Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-11-28T05:50:26.321Z"),
          modifiedAt: new Date("2023-04-08T03:12:10.169Z"),
          id: "<value>",
          name: "<value>",
          description:
            "capitalize knitting famously plus overdue almighty ugh apropos between",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-03-03T09:50:18.418Z"),
              modifiedAt: new Date("2024-07-06T08:09:01.868Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-11-07T04:58:21.844Z"),
              modifiedAt: new Date("2023-04-30T23:40:43.285Z"),
              id: "<value>",
              type: "discord",
              description:
                "suffocate democratize delightfully perfectly gee treble banish upside-down",
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
              path: "/srv",
              mimeType: "<value>",
              size: 298070,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-05-06T17:34:23.447Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-09-01T06:02:40.356Z"),
              sizeReadable: "<value>",
              publicUrl: "https://poor-adviser.org",
            },
          ],
          organization: {
            createdAt: new Date("2023-04-22T21:39:26.221Z"),
            modifiedAt: new Date("2022-03-21T03:17:26.002Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://linear-goodwill.name",
            bio: "<value>",
            company: "Ferry - Upton",
            blog: "<value>",
            location: "<value>",
            email: "Estefania0@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 447019,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 96748,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2024-10-15T06:39:38.625Z"),
          modifiedAt: new Date("2024-05-30T23:02:22.464Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 167945,
        },
      },
    ],
    pagination: {
      totalCount: 773588,
      maxPage: 253262,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |