# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-19T16:35:55.632Z"),
        modifiedAt: new Date("2024-02-03T09:26:22.347Z"),
        id: "<value>",
        amount: 849120,
        taxAmount: 462270,
        currency: "Singapore Dollar",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-10-03T13:35:00.562Z"),
          modifiedAt: new Date("2025-12-05T10:23:47.414Z"),
          id: "<value>",
          name: "<value>",
          description: "pillow jellyfish pink pro possession suburban smug",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-09-25T23:51:52.163Z"),
              modifiedAt: new Date("2025-11-24T15:03:45.117Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 263923,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-03-17T14:15:47.145Z"),
              modifiedAt: new Date("2023-01-17T04:26:28.465Z"),
              id: "<value>",
              type: "github_repository",
              description: "blah scenario physically",
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
              path: "/home/user/dir",
              mimeType: "<value>",
              size: 776039,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-02-01T02:31:59.627Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-01-20T00:39:57.552Z"),
              sizeReadable: "<value>",
              publicUrl: "https://tepid-longboat.org",
            },
          ],
          organization: {
            createdAt: new Date("2023-12-28T10:29:46.261Z"),
            modifiedAt: new Date("2024-01-19T16:40:09.743Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://rotten-cannon.biz",
            bio: "<value>",
            company: "Feest - Hilpert",
            blog: "<value>",
            location: "<value>",
            email: "Gabriel.Blick@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 118529,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 656900,
            profileSettings: {},
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
          },
        },
        productPrice: {
          createdAt: new Date("2025-02-02T17:22:00.786Z"),
          modifiedAt: new Date("2024-05-06T13:29:16.854Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 960433,
        },
        subscription: {
          createdAt: new Date("2024-03-03T05:31:49.356Z"),
          modifiedAt: new Date("2025-06-15T10:23:30.700Z"),
          id: "<value>",
          amount: 939173,
          currency: "Kwanza",
          recurringInterval: "year",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2023-09-14T17:19:40.973Z"),
          currentPeriodEnd: new Date("2024-07-14T14:12:08.282Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-10-28T02:46:10.921Z"),
          startedAt: new Date("2023-03-09T20:51:59.634Z"),
          endsAt: new Date("2025-11-17T05:07:47.437Z"),
          endedAt: new Date("2025-06-03T00:37:14.106Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "other",
          customerCancellationComment: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 50356,
      maxPage: 300734,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |