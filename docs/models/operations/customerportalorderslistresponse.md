# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-06-08T20:32:08.885Z"),
        modifiedAt: new Date("2024-10-16T19:49:07.268Z"),
        id: "<value>",
        amount: 755044,
        taxAmount: 150658,
        currency: "Burundi Franc",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-10-12T04:57:23.597Z"),
          modifiedAt: new Date("2024-11-13T20:01:57.814Z"),
          id: "<value>",
          name: "<value>",
          description: "nor since remark gaseous reach",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-08-13T20:24:17.767Z"),
              modifiedAt: new Date("2024-10-05T21:40:56.060Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 601060,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-03-08T11:52:48.295Z"),
              modifiedAt: new Date("2024-02-02T12:07:52.157Z"),
              id: "<value>",
              type: "custom",
              description: "weakly aw unless heartache heartfelt",
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
              path: "/opt/include",
              mimeType: "<value>",
              size: 807446,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-02-02T00:46:51.716Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-07-09T18:22:31.091Z"),
              sizeReadable: "<value>",
              publicUrl: "https://silent-sticker.net",
            },
          ],
          organization: {
            createdAt: new Date("2024-12-11T16:56:11.720Z"),
            modifiedAt: new Date("2024-10-05T03:54:29.465Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://spotless-entry.org/",
            bio: "<value>",
            company: "Rice, Harvey and Windler",
            blog: "<value>",
            location: "<value>",
            email: "Halle40@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 777583,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 718320,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2022-09-22T07:56:37.387Z"),
          modifiedAt: new Date("2023-12-09T16:49:01.680Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        subscription: {
          createdAt: new Date("2023-09-21T13:21:44.003Z"),
          modifiedAt: new Date("2022-09-04T07:30:51.531Z"),
          id: "<value>",
          amount: 677383,
          currency: "Uzbekistan Sum",
          recurringInterval: "month",
          status: "incomplete",
          currentPeriodStart: new Date("2024-10-26T14:19:18.817Z"),
          currentPeriodEnd: new Date("2023-08-25T18:04:57.857Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2024-06-30T15:06:40.008Z"),
          endedAt: new Date("2024-11-03T00:52:46.065Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 874870,
      maxPage: 520378,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |