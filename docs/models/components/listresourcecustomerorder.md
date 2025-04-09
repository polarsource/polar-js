# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2025-12-22T20:46:15.878Z"),
      modifiedAt: new Date("2023-05-20T15:53:22.635Z"),
      id: "<value>",
      status: "refunded",
      paid: true,
      subtotalAmount: 17662,
      discountAmount: 142890,
      netAmount: 95401,
      amount: 172160,
      taxAmount: 590618,
      totalAmount: 614593,
      refundedAmount: 710994,
      refundedTaxAmount: 332443,
      currency: "Uzbekistan Sum",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-10-04T14:18:57.229Z"),
        modifiedAt: new Date("2025-09-17T07:23:59.096Z"),
        id: "<value>",
        name: "<value>",
        description: "up arraign but insistent provided apud",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-05-29T14:44:57.810Z"),
            modifiedAt: new Date("2024-05-11T08:19:09.701Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 984078,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-04-02T15:56:55.286Z"),
            modifiedAt: new Date("2025-08-08T00:51:16.723Z"),
            id: "<value>",
            type: "custom",
            description:
              "self-confidence proofread grade than larva unpleasant old uh-huh",
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
            path: "/lib",
            mimeType: "<value>",
            size: 737649,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-01-21T01:58:32.053Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-02-14T04:58:27.741Z"),
            sizeReadable: "<value>",
            publicUrl: "https://orderly-spirit.org/",
          },
        ],
        organization: {
          createdAt: new Date("2025-02-28T21:35:13.070Z"),
          modifiedAt: new Date("2024-10-30T13:59:31.479Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://wordy-information.biz",
          email: "Patsy54@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://primary-venom.com",
            },
          ],
          detailsSubmittedAt: new Date("2023-05-23T07:48:49.592Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Graham - Kutch",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 164325,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 866661,
          profileSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2023-11-07T20:31:03.355Z"),
        modifiedAt: new Date("2024-04-02T14:42:59.361Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
      subscription: {
        createdAt: new Date("2023-01-14T18:18:32.830Z"),
        modifiedAt: new Date("2024-07-06T09:41:29.270Z"),
        id: "<value>",
        amount: 517598,
        currency: "Iranian Rial",
        recurringInterval: "year",
        status: "unpaid",
        currentPeriodStart: new Date("2025-05-11T11:46:56.022Z"),
        currentPeriodEnd: new Date("2025-12-04T23:05:53.851Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-04-01T04:55:02.266Z"),
        startedAt: new Date("2025-02-10T14:16:43.016Z"),
        endsAt: new Date("2023-04-17T00:54:32.973Z"),
        endedAt: new Date("2025-11-22T14:16:45.492Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "low_quality",
        customerCancellationComment: "<value>",
        priceId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2023-02-19T03:11:50.818Z"),
          modifiedAt: new Date("2023-06-30T22:37:33.101Z"),
          id: "<value>",
          label: "<value>",
          amount: 749224,
          taxAmount: 757922,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 655126,
    maxPage: 314176,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |