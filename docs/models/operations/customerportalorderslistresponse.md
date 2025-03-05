# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-04-07T21:35:58.266Z"),
        modifiedAt: new Date("2025-05-18T22:23:48.519Z"),
        id: "<value>",
        amount: 630208,
        taxAmount: 472170,
        currency: "Moroccan Dirham",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2025-10-14T09:25:12.471Z"),
          modifiedAt: new Date("2025-12-08T04:47:00.383Z"),
          id: "<value>",
          name: "<value>",
          description:
            "quarrelsomely psst diagram teammate symbolise fly but pace regarding",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-06-19T18:05:51.709Z"),
              modifiedAt: new Date("2024-08-16T09:12:42.386Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 659077,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-07-22T09:52:24.619Z"),
              modifiedAt: new Date("2024-12-23T19:45:37.704Z"),
              id: "<value>",
              type: "license_keys",
              description: "that since ah",
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
              path: "/sys",
              mimeType: "<value>",
              size: 550018,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-03-09T11:01:34.683Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-12-08T15:37:19.283Z"),
              sizeReadable: "<value>",
              publicUrl: "https://circular-masterpiece.net/",
            },
          ],
          organization: {
            createdAt: new Date("2023-05-30T01:39:22.348Z"),
            modifiedAt: new Date("2023-09-25T02:33:00.199Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://defensive-tackle.biz/",
            bio: "<value>",
            company: "Larson, Miller and Purdy",
            blog: "<value>",
            location: "<value>",
            email: "Justyn32@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 723059,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 595144,
            profileSettings: {},
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
        },
        productPrice: {
          createdAt: new Date("2023-01-26T13:28:29.232Z"),
          modifiedAt: new Date("2024-10-13T03:43:06.586Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 245253,
          maximumAmount: 456609,
          presetAmount: 729948,
        },
        subscription: {
          createdAt: new Date("2025-07-21T04:58:32.121Z"),
          modifiedAt: new Date("2024-07-28T02:04:35.206Z"),
          id: "<value>",
          amount: 613139,
          currency: "Fiji Dollar",
          recurringInterval: "month",
          status: "active",
          currentPeriodStart: new Date("2023-06-06T16:34:44.515Z"),
          currentPeriodEnd: new Date("2023-03-17T19:09:02.033Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-07-23T15:32:26.939Z"),
          startedAt: new Date("2025-07-03T13:40:18.176Z"),
          endsAt: new Date("2024-06-09T14:49:19.697Z"),
          endedAt: new Date("2023-05-11T03:08:05.586Z"),
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
      totalCount: 136506,
      maxPage: 580770,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |