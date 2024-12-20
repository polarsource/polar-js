# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-16T17:16:46.367Z"),
        modifiedAt: new Date("2023-07-25T14:04:05.326Z"),
        id: "<value>",
        amount: 556542,
        taxAmount: 604432,
        currency: "Danish Krone",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-09-24T00:28:40.141Z"),
          modifiedAt: new Date("2022-10-17T04:01:55.543Z"),
          id: "<value>",
          name: "<value>",
          description: "meanwhile unaccountably between against provider",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-08-02T08:02:13.737Z"),
              modifiedAt: new Date("2022-07-03T16:53:40.680Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 977856,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-10-29T12:28:00.902Z"),
              modifiedAt: new Date("2023-04-19T21:02:57.554Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "meanwhile actual uh-huh triumphantly amongst affectionate although meh gnaw",
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
              path: "/private/var",
              mimeType: "<value>",
              size: 81302,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-12-22T06:34:42.486Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-09-30T13:17:31.050Z"),
              sizeReadable: "<value>",
              publicUrl: "https://parallel-testimonial.info",
            },
          ],
          organization: {
            createdAt: new Date("2024-10-24T14:54:44.299Z"),
            modifiedAt: new Date("2024-11-02T16:11:07.950Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://avaricious-switchboard.org",
            bio: "<value>",
            company: "Kozey, Greenfelder and Bogisich",
            blog: "<value>",
            location: "<value>",
            email: "Misty_Runte@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 814171,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 734276,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2022-03-15T08:15:52.537Z"),
          modifiedAt: new Date("2024-06-24T09:02:21.407Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
        subscription: {
          createdAt: new Date("2022-04-05T03:50:46.744Z"),
          modifiedAt: new Date("2024-06-20T08:33:00.204Z"),
          id: "<value>",
          amount: 317088,
          currency: "Cape Verde Escudo",
          recurringInterval: "month",
          status: "incomplete",
          currentPeriodStart: new Date("2023-07-01T02:18:36.520Z"),
          currentPeriodEnd: new Date("2024-05-09T22:10:56.397Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-12-14T21:12:16.851Z"),
          endedAt: new Date("2024-12-23T06:42:41.549Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 771027,
      maxPage: 728290,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |