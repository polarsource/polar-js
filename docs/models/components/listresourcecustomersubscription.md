# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2025-05-18T23:12:46.422Z"),
      modifiedAt: new Date("2023-09-30T12:05:03.388Z"),
      id: "<value>",
      amount: 863685,
      currency: "Tala",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2024-12-08T03:23:35.917Z"),
      currentPeriodEnd: new Date("2024-07-20T20:09:55.663Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-09-17T07:42:16.227Z"),
      startedAt: new Date("2025-05-28T22:32:34.498Z"),
      endsAt: new Date("2024-07-04T01:46:55.006Z"),
      endedAt: new Date("2023-03-17T06:50:06.523Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "customer_service",
      customerCancellationComment: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-05-06T13:06:27.177Z"),
        modifiedAt: new Date("2023-11-30T19:27:06.717Z"),
        id: "<value>",
        name: "<value>",
        description:
          "proliferate apud hefty bakeware why carefree dependable squeaky freely whose",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-04-29T05:57:00.820Z"),
            modifiedAt: new Date("2024-07-24T17:16:50.030Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 455517,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-08-02T23:12:56.433Z"),
            modifiedAt: new Date("2023-01-27T00:25:14.511Z"),
            id: "<value>",
            type: "license_keys",
            description:
              "anti proper gee yuck colossal postbox boastfully gurn till",
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
            path: "/etc/defaults",
            mimeType: "<value>",
            size: 483005,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-11-13T19:30:07.544Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-09-17T06:04:05.728Z"),
            sizeReadable: "<value>",
            publicUrl: "https://reasonable-seagull.info/",
          },
        ],
        organization: {
          createdAt: new Date("2023-12-16T02:34:06.572Z"),
          modifiedAt: new Date("2025-03-12T05:09:38.589Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://true-embossing.com/",
          bio: "<value>",
          company: "Gusikowski Inc",
          blog: "<value>",
          location: "<value>",
          email: "Wyman78@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 355314,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 721472,
          profileSettings: {},
          featureSettings: {},
        },
      },
      price: {
        createdAt: new Date("2023-08-19T01:15:21.496Z"),
        modifiedAt: new Date("2024-11-16T20:17:21.390Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 201762,
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 272359,
    maxPage: 943350,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |