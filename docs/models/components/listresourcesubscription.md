# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2025-08-03T20:11:13.463Z"),
      modifiedAt: new Date("2025-12-20T05:17:36.698Z"),
      id: "<value>",
      amount: 570759,
      currency: "Denar",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2023-02-03T16:09:01.508Z"),
      currentPeriodEnd: new Date("2023-06-22T05:37:36.578Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-05-12T09:48:05.553Z"),
      startedAt: new Date("2025-05-04T08:08:19.321Z"),
      endsAt: new Date("2023-03-22T09:05:03.177Z"),
      endedAt: new Date("2025-10-03T02:11:14.654Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_complex",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      metadata: {
        "key": "<value>",
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-05-30T07:43:56.615Z"),
        modifiedAt: new Date("2024-11-19T01:45:47.615Z"),
        metadata: {
          "key": "<value>",
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "SE",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2024-02-20T03:51:57.979Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Frieda44@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2025-03-20T12:56:06.574Z"),
        modifiedAt: new Date("2023-05-19T08:43:25.916Z"),
        id: "<value>",
        name: "<value>",
        description: "distinct ack spork jot hm fedora yet and access",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2025-11-07T00:46:07.643Z"),
            modifiedAt: new Date("2024-06-27T08:03:01.839Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-12-09T18:31:15.290Z"),
            modifiedAt: new Date("2024-06-27T06:08:10.263Z"),
            id: "<value>",
            description:
              "deck fluctuate into lest excepting carelessly defenseless subtract if how",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              guildId: "<id>",
              roleId: "<id>",
              guildToken: "<value>",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/private",
            mimeType: "<value>",
            size: 510076,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-07-27T13:54:33.801Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-03-21T09:01:04.142Z"),
            sizeReadable: "<value>",
            publicUrl: "https://lazy-handover.org",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-07-28T21:37:41.896Z"),
              modifiedAt: new Date("2024-09-14T07:59:03.323Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 650511,
            required: false,
          },
        ],
      },
      discount: {
        duration: "once",
        type: "fixed",
        amount: 21242,
        currency: "Baht",
        createdAt: new Date("2024-09-14T17:45:31.867Z"),
        modifiedAt: new Date("2025-11-09T06:01:46.110Z"),
        id: "<value>",
        metadata: {
          "key": 624755,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-05-25T17:36:12.250Z"),
        endsAt: new Date("2025-06-16T05:13:40.245Z"),
        maxRedemptions: 896224,
        redemptionsCount: 420899,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      price: {
        createdAt: new Date("2023-04-02T08:48:18.080Z"),
        modifiedAt: new Date("2024-02-12T06:01:13.262Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      prices: [
        {
          createdAt: new Date("2023-11-04T04:33:56.076Z"),
          modifiedAt: new Date("2023-07-01T10:10:57.161Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 541499,
          maximumAmount: 704091,
          presetAmount: 31468,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 621613,
    maxPage: 72913,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |