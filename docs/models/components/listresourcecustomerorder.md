# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2023-02-21T08:56:33.491Z"),
      modifiedAt: new Date("2024-02-13T13:16:21.999Z"),
      id: "<value>",
      status: "pending",
      paid: true,
      subtotalAmount: 488203,
      discountAmount: 242992,
      netAmount: 38873,
      amount: 718293,
      taxAmount: 333800,
      totalAmount: 172302,
      refundedAmount: 947974,
      refundedTaxAmount: 488559,
      currency: "Pataca",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2025-11-20T14:19:41.572Z"),
        modifiedAt: new Date("2023-05-10T11:56:00.057Z"),
        id: "<value>",
        name: "<value>",
        description: "rationalize oh healthily pillory",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-10-18T01:10:10.562Z"),
            modifiedAt: new Date("2025-01-04T11:56:48.452Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 261646,
            maximumAmount: 539732,
            presetAmount: 860632,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-10-22T03:27:09.180Z"),
            modifiedAt: new Date("2023-01-28T06:52:10.820Z"),
            id: "<value>",
            type: "discord",
            description:
              "bonfire respray decide deplore whenever self-reliant if supposing meanwhile phew",
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
            path: "/usr/X11R6",
            mimeType: "<value>",
            size: 245804,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-06-22T15:02:43.515Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-09-17T15:39:07.023Z"),
            sizeReadable: "<value>",
            publicUrl: "https://acidic-airline.info",
          },
        ],
        organization: {
          createdAt: new Date("2025-07-07T19:41:40.406Z"),
          modifiedAt: new Date("2025-10-11T04:07:28.860Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://strong-heartbeat.name/",
          email: "Brandi.Hackett@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "x",
              url: "https://thick-ethyl.net",
            },
          ],
          detailsSubmittedAt: new Date("2023-05-12T18:42:21.049Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Franecki - Wintheiser",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 34675,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 550733,
          profileSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2023-09-24T08:14:03.791Z"),
        modifiedAt: new Date("2025-05-22T20:25:28.569Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 999795,
        maximumAmount: 837802,
        presetAmount: 423718,
      },
      subscription: {
        createdAt: new Date("2025-01-17T03:28:04.444Z"),
        modifiedAt: new Date("2024-10-06T23:05:31.631Z"),
        id: "<value>",
        amount: 652110,
        currency: "Gibraltar Pound",
        recurringInterval: "year",
        status: "incomplete",
        currentPeriodStart: new Date("2023-09-12T06:10:57.363Z"),
        currentPeriodEnd: new Date("2024-03-14T02:44:36.501Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-06-21T18:31:02.392Z"),
        startedAt: new Date("2023-06-24T19:09:59.837Z"),
        endsAt: new Date("2023-07-15T09:20:19.722Z"),
        endedAt: new Date("2024-08-27T11:10:24.984Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "switched_service",
        customerCancellationComment: "<value>",
        priceId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-11-12T18:42:06.711Z"),
          modifiedAt: new Date("2025-12-11T03:53:45.945Z"),
          id: "<value>",
          label: "<value>",
          amount: 606981,
          taxAmount: 225265,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 265407,
    maxPage: 197432,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |