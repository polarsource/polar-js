# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-22T23:10:42.147Z"),
        modifiedAt: new Date("2024-03-05T11:11:45.978Z"),
        id: "<value>",
        amount: 444743,
        taxAmount: 961541,
        currency: "Nakfa",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-05-27T23:27:01.077Z"),
          modifiedAt: new Date("2023-01-25T12:57:32.132Z"),
          id: "<value>",
          name: "<value>",
          description: "pliers throughout anti",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-11-22T14:17:32.543Z"),
              modifiedAt: new Date("2025-09-09T21:38:55.234Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 105836,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-02-12T13:48:43.230Z"),
              modifiedAt: new Date("2025-01-12T18:55:33.618Z"),
              id: "<value>",
              type: "custom",
              description:
                "below promptly badly how famously uh-huh phooey as guilt",
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
              path: "/opt/share",
              mimeType: "<value>",
              size: 228589,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-06-29T07:26:03.410Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-02-07T16:53:13.859Z"),
              sizeReadable: "<value>",
              publicUrl: "https://scared-shark.com",
            },
          ],
          organization: {
            createdAt: new Date("2024-08-13T02:16:20.350Z"),
            modifiedAt: new Date("2023-11-05T17:50:21.798Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://fake-governance.biz/",
            bio: "<value>",
            company: "Brown and Sons",
            blog: "<value>",
            location: "<value>",
            email: "Ada.Doyle50@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 834282,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 86622,
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
          createdAt: new Date("2025-03-02T00:35:04.391Z"),
          modifiedAt: new Date("2023-06-03T13:42:39.169Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 155031,
        },
        subscription: {
          createdAt: new Date("2025-01-12T04:50:14.674Z"),
          modifiedAt: new Date("2025-12-12T01:00:32.610Z"),
          id: "<value>",
          amount: 739136,
          currency: "Singapore Dollar",
          recurringInterval: "month",
          status: "past_due",
          currentPeriodStart: new Date("2023-01-19T17:22:57.153Z"),
          currentPeriodEnd: new Date("2024-12-26T09:22:46.006Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-10-12T05:22:08.272Z"),
          startedAt: new Date("2024-11-06T10:33:59.937Z"),
          endsAt: new Date("2025-06-25T07:56:02.547Z"),
          endedAt: new Date("2024-06-25T14:47:10.751Z"),
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
      totalCount: 534338,
      maxPage: 281660,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |