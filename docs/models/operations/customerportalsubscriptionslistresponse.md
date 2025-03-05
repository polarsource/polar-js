# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-19T03:43:24.175Z"),
        modifiedAt: new Date("2023-05-27T09:15:03.118Z"),
        id: "<value>",
        amount: 920800,
        currency: "Boliviano boliviano",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2025-02-07T23:46:11.920Z"),
        currentPeriodEnd: new Date("2023-11-11T05:18:13.495Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-02-10T18:24:05.857Z"),
        startedAt: new Date("2024-11-15T18:15:28.404Z"),
        endsAt: new Date("2024-08-17T20:38:53.044Z"),
        endedAt: new Date("2023-03-05T05:25:59.876Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-12-25T14:48:15.096Z"),
          modifiedAt: new Date("2025-06-07T04:59:23.361Z"),
          id: "<value>",
          name: "<value>",
          description: "among only quizzically milky petal",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-02-06T16:30:10.860Z"),
              modifiedAt: new Date("2023-09-18T01:20:24.113Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 451919,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-04-30T00:49:13.614Z"),
              modifiedAt: new Date("2024-10-26T07:11:08.711Z"),
              id: "<value>",
              type: "license_keys",
              description:
                "hoof about or especially bashfully upbeat independence ice-cream during",
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
              path: "/var/yp",
              mimeType: "<value>",
              size: 396678,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-01-24T23:13:53.632Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-01-16T03:03:38.237Z"),
              sizeReadable: "<value>",
              publicUrl: "https://infatuated-diagram.info",
            },
          ],
          organization: {
            createdAt: new Date("2025-08-29T03:02:44.062Z"),
            modifiedAt: new Date("2025-08-18T00:45:54.098Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://handsome-sand.net",
            bio: "<value>",
            company: "Ullrich, Haag and Littel",
            blog: "<value>",
            location: "<value>",
            email: "Cole46@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 865904,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 68616,
            profileSettings: {},
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
        },
        price: {
          createdAt: new Date("2024-03-02T07:36:35.852Z"),
          modifiedAt: new Date("2024-09-30T10:00:07.369Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
      },
    ],
    pagination: {
      totalCount: 982461,
      maxPage: 60850,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |