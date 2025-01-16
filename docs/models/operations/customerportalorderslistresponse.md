# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-14T17:43:01.391Z"),
        modifiedAt: new Date("2025-04-26T20:46:56.899Z"),
        id: "<value>",
        amount: 761893,
        taxAmount: 659608,
        currency: "Brazilian Real",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-09-25T23:51:52.163Z"),
          modifiedAt: new Date("2025-11-24T15:03:45.117Z"),
          id: "<value>",
          name: "<value>",
          description: "tennis colorfully nearly hm innocently",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-05-02T20:50:10.906Z"),
              modifiedAt: new Date("2023-12-05T15:23:56.321Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-05-22T01:18:21.412Z"),
              modifiedAt: new Date("2023-09-13T15:47:52.361Z"),
              id: "<value>",
              type: "discord",
              description:
                "whoa wildly deselect assist lounge oof revere bashfully marvelous regarding",
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
              path: "/usr/obj",
              mimeType: "<value>",
              size: 490569,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-04-19T20:09:40.616Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-04-05T04:31:27.188Z"),
              sizeReadable: "<value>",
              publicUrl: "https://awful-singing.name/",
            },
          ],
          organization: {
            createdAt: new Date("2024-05-18T04:18:48.794Z"),
            modifiedAt: new Date("2025-12-10T09:38:46.595Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://complicated-foodstuffs.name",
            bio: "<value>",
            company: "Stehr, McLaughlin and Blick",
            blog: "<value>",
            location: "<value>",
            email: "Eugene.Cremin@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 161442,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 976525,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2023-08-11T01:18:06.311Z"),
          modifiedAt: new Date("2024-09-18T10:57:53.093Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        subscription: {
          createdAt: new Date("2025-05-21T02:16:12.635Z"),
          modifiedAt: new Date("2024-12-30T09:58:26.971Z"),
          id: "<value>",
          amount: 999020,
          currency: "Russian Ruble",
          recurringInterval: "year",
          status: "unpaid",
          currentPeriodStart: new Date("2025-02-26T04:00:06.430Z"),
          currentPeriodEnd: new Date("2023-05-23T19:42:16.496Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-04-22T20:02:07.778Z"),
          startedAt: new Date("2023-06-15T03:14:03.485Z"),
          endsAt: new Date("2023-06-12T22:42:54.501Z"),
          endedAt: new Date("2023-11-15T08:15:35.090Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "too_expensive",
          customerCancellationComment: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 584312,
      maxPage: 346049,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |