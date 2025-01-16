# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2023-03-11T16:17:46.711Z"),
      modifiedAt: new Date("2025-03-29T00:56:36.017Z"),
      id: "<value>",
      amount: 881310,
      currency: "Lek",
      recurringInterval: "year",
      status: "active",
      currentPeriodStart: new Date("2025-09-19T07:28:52.145Z"),
      currentPeriodEnd: new Date("2025-01-21T03:42:55.455Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-04-03T18:27:33.065Z"),
      startedAt: new Date("2024-09-25T16:52:07.472Z"),
      endsAt: new Date("2023-05-20T10:14:59.264Z"),
      endedAt: new Date("2023-06-27T17:11:48.345Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-06-13T11:12:06.613Z"),
        modifiedAt: new Date("2023-10-20T10:32:29.068Z"),
        id: "<value>",
        name: "<value>",
        description: "unzip yet gracefully",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-05-02T03:21:18.336Z"),
            modifiedAt: new Date("2024-06-13T08:57:51.625Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-09-17T06:04:05.728Z"),
            modifiedAt: new Date("2023-09-02T17:34:26.813Z"),
            id: "<value>",
            type: "downloadables",
            description:
              "atrium pointless bulky versus amongst between ew flickering shanghai",
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
            path: "/net",
            mimeType: "<value>",
            size: 14750,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-04-15T18:02:33.861Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-18T15:47:38.887Z"),
            sizeReadable: "<value>",
            publicUrl: "https://quiet-pilot.net",
          },
        ],
        organization: {
          createdAt: new Date("2025-04-29T06:13:47.879Z"),
          modifiedAt: new Date("2024-06-02T16:28:15.518Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://subdued-netsuke.com/",
          bio: "<value>",
          company: "Huels, Haley and Larkin",
          blog: "<value>",
          location: "<value>",
          email: "Tia84@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 270570,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 769384,
          profileSettings: {},
          featureSettings: {},
        },
      },
      price: {
        createdAt: new Date("2025-04-02T11:18:11.440Z"),
        modifiedAt: new Date("2023-06-26T10:20:47.612Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 600460,
        maximumAmount: 517643,
        presetAmount: 340478,
      },
    },
  ],
  pagination: {
    totalCount: 730624,
    maxPage: 434240,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |