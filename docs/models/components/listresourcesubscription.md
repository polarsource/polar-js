# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2023-11-17T14:35:18.819Z"),
      modifiedAt: new Date("2024-02-10T13:04:40.129Z"),
      id: "<value>",
      amount: 576624,
      currency: "Dobra",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2024-12-13T12:08:21.329Z"),
      currentPeriodEnd: new Date("2024-10-11T06:36:37.814Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-10-20T15:06:03.630Z"),
      startedAt: new Date("2025-05-19T11:50:21.965Z"),
      endsAt: new Date("2025-10-24T21:22:16.317Z"),
      endedAt: new Date("2025-03-31T02:07:48.328Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      metadata: {
        "key": false,
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-08-06T06:22:45.544Z"),
        modifiedAt: new Date("2023-11-25T10:08:10.795Z"),
        metadata: {
          "key": "<value>",
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "FR61954506077",
          "eu_vat",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2023-05-20T17:25:15.201Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Adelia_Schaden@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2025-05-04T07:22:05.808Z"),
        modifiedAt: new Date("2025-07-29T01:03:47.705Z"),
        id: "<value>",
        name: "<value>",
        description: "reasonable while carefully ouch incidentally",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        prices: [
          {
            createdAt: new Date("2024-06-11T03:06:20.381Z"),
            modifiedAt: new Date("2023-10-03T02:53:48.626Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            unitAmount: 577429,
            includedUnits: 496498,
            capAmount: 162787,
            meterId: "<value>",
            meter: {
              id: "<value>",
              name: "<value>",
            },
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-10-03T00:36:40.121Z"),
            modifiedAt: new Date("2024-05-18T09:15:56.504Z"),
            id: "<value>",
            description:
              "liberalize besmirch distinction adviser accompanist sport calmly",
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
            path: "/home/user/dir",
            mimeType: "<value>",
            size: 785583,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-03-15T02:44:07.130Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-09-26T04:56:43.373Z"),
            sizeReadable: "<value>",
            publicUrl: "https://tired-bell.name/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-12-25T11:36:55.890Z"),
              modifiedAt: new Date("2024-04-29T01:03:37.412Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 152982,
            required: false,
          },
        ],
      },
      discount: {
        duration: "once",
        durationInMonths: 58922,
        type: "percentage",
        basisPoints: 776593,
        createdAt: new Date("2023-09-29T17:43:45.476Z"),
        modifiedAt: new Date("2023-09-28T13:02:06.335Z"),
        id: "<value>",
        metadata: {
          "key": 943603,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-11-16T23:19:08.981Z"),
        endsAt: new Date("2025-07-01T10:51:36.392Z"),
        maxRedemptions: 867104,
        redemptionsCount: 134449,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      price: {
        createdAt: new Date("2023-04-15T19:51:11.119Z"),
        modifiedAt: new Date("2024-05-01T03:02:44.155Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        unitAmount: 119716,
        includedUnits: 404439,
        capAmount: 752961,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
      prices: [
        {
          createdAt: new Date("2023-04-22T22:51:59.592Z"),
          modifiedAt: new Date("2024-08-17T14:15:01.488Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          unitAmount: 845623,
          includedUnits: 474165,
          capAmount: 604325,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
    },
  ],
  pagination: {
    totalCount: 7852,
    maxPage: 689029,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |