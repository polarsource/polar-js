# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2023-02-15T18:15:28.299Z"),
      modifiedAt: new Date("2025-04-07T05:26:02.209Z"),
      id: "<value>",
      amount: 615884,
      taxAmount: 745815,
      currency: "Lesotho Loti",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-08-30T15:22:03.927Z"),
        modifiedAt: new Date("2024-02-01T01:45:50.315Z"),
        id: "<value>",
        name: "<value>",
        description: "duh caring longingly tenant yahoo capitalize along",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-04-21T15:26:51.405Z"),
            modifiedAt: new Date("2023-07-05T00:33:17.947Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-08-19T19:56:45.630Z"),
            modifiedAt: new Date("2023-03-24T15:56:51.260Z"),
            id: "<value>",
            type: "ads",
            description: "mmm unless respray connect whenever",
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
            path: "/var/tmp",
            mimeType: "<value>",
            size: 915872,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-02-05T01:40:30.252Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-01-25T04:32:31.394Z"),
            sizeReadable: "<value>",
            publicUrl: "https://colossal-nougat.com",
          },
        ],
        organization: {
          createdAt: new Date("2025-03-23T21:42:53.607Z"),
          modifiedAt: new Date("2024-02-29T07:38:44.572Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://rough-intervention.name",
          bio: "<value>",
          company: "O'Connell - Nitzsche",
          blog: "<value>",
          location: "<value>",
          email: "Amani_Ondricka41@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 834020,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 290128,
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
        createdAt: new Date("2023-09-22T01:42:46.171Z"),
        modifiedAt: new Date("2024-06-30T14:06:00.507Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 201704,
      },
      subscription: {
        createdAt: new Date("2024-08-26T10:02:28.026Z"),
        modifiedAt: new Date("2025-12-02T12:41:20.649Z"),
        id: "<value>",
        amount: 479767,
        currency: "Uzbekistan Sum",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2023-01-04T03:36:40.213Z"),
        currentPeriodEnd: new Date("2023-10-25T00:03:32.852Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-10-01T15:06:38.998Z"),
        startedAt: new Date("2024-03-31T07:55:07.200Z"),
        endsAt: new Date("2024-05-22T11:45:49.634Z"),
        endedAt: new Date("2024-03-17T18:27:10.115Z"),
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
    totalCount: 398174,
    maxPage: 510996,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |