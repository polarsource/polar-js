# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-01-07T16:04:03.383Z"),
        modifiedAt: new Date("2025-07-21T21:47:53.222Z"),
        id: "<value>",
        amount: 447019,
        taxAmount: 96748,
        currency: "Cordoba Oro",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-12-18T13:55:58.887Z"),
          modifiedAt: new Date("2025-10-15T06:39:38.625Z"),
          id: "<value>",
          name: "<value>",
          description:
            "ouch rejoin exalt drab following aw acidly drive spherical",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-09-14T10:51:44.160Z"),
              modifiedAt: new Date("2025-11-14T12:22:42.084Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 645731,
              maximumAmount: 6972,
              presetAmount: 375987,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-02-15T03:31:01.054Z"),
              modifiedAt: new Date("2025-07-28T13:40:48.410Z"),
              id: "<value>",
              type: "ads",
              description: "smug quickly best moisten er aha hence",
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
              path: "/Applications",
              mimeType: "<value>",
              size: 305512,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-08-15T21:46:11.495Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-08-17T19:19:44.241Z"),
              sizeReadable: "<value>",
              publicUrl: "https://diligent-pile.info",
            },
          ],
          organization: {
            createdAt: new Date("2023-10-16T10:23:17.202Z"),
            modifiedAt: new Date("2024-12-06T11:49:29.517Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://courageous-rim.org",
            bio: "<value>",
            company: "Boyle - Hettinger",
            blog: "<value>",
            location: "<value>",
            email: "Jaleel55@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 384705,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 449095,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-08-29T02:51:50.766Z"),
          modifiedAt: new Date("2025-01-05T15:25:48.435Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 35777,
          recurringInterval: "month",
        },
        subscription: {
          createdAt: new Date("2023-01-31T12:23:22.680Z"),
          modifiedAt: new Date("2024-08-07T09:18:04.127Z"),
          id: "<value>",
          amount: 583224,
          currency: "Kyat",
          recurringInterval: "month",
          status: "active",
          currentPeriodStart: new Date("2023-11-26T21:34:29.808Z"),
          currentPeriodEnd: new Date("2025-09-29T03:58:20.205Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-07-21T15:03:42.701Z"),
          startedAt: new Date("2024-07-02T20:27:58.335Z"),
          endsAt: new Date("2024-11-01T06:28:05.579Z"),
          endedAt: new Date("2024-10-30T07:13:27.323Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "low_quality",
          customerCancellationComment: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 159422,
      maxPage: 889946,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |