# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-11-22T05:01:16.388Z"),
        modifiedAt: new Date("2024-05-27T14:18:59.602Z"),
        id: "<value>",
        amount: 72288,
        taxAmount: 875952,
        currency: "Jordanian Dinar",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2022-12-27T06:23:27.908Z"),
          modifiedAt: new Date("2022-08-30T00:47:32.608Z"),
          id: "<value>",
          name: "<value>",
          description: "parade fast whereas quaintly physically plus pfft",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-07-16T20:49:51.680Z"),
              modifiedAt: new Date("2023-09-27T13:34:39.199Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 393596,
              maximumAmount: 270470,
              presetAmount: 460394,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-06-01T07:26:36.126Z"),
              modifiedAt: new Date("2023-11-11T02:57:45.716Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "sharply override whose inasmuch weary gently carpool too",
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
              path: "/etc",
              mimeType: "<value>",
              size: 822406,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-12-14T12:41:25.029Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-08-21T11:42:45.672Z"),
              sizeReadable: "<value>",
              publicUrl: "https://bogus-kiss.net/",
            },
          ],
          organization: {
            createdAt: new Date("2023-12-14T21:12:16.851Z"),
            modifiedAt: new Date("2024-12-23T06:42:41.549Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://shadowy-handover.com",
            bio: "<value>",
            company: "Stokes Inc",
            blog: "<value>",
            location: "<value>",
            email: "Justus_Carroll@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 38402,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 215790,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-03-10T22:43:43.482Z"),
          modifiedAt: new Date("2022-08-26T14:07:50.921Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 361280,
          recurringInterval: "month",
        },
        subscription: {
          createdAt: new Date("2022-10-05T09:34:57.740Z"),
          modifiedAt: new Date("2024-07-19T13:31:14.258Z"),
          id: "<value>",
          amount: 533517,
          currency: "Saudi Riyal",
          recurringInterval: "month",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2023-10-02T20:58:37.542Z"),
          currentPeriodEnd: new Date("2022-07-30T10:24:54.251Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2022-08-05T16:54:18.635Z"),
          endedAt: new Date("2022-04-19T17:54:17.414Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 759559,
      maxPage: 88180,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |