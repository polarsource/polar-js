# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2024-01-15T22:43:28.512Z"),
      modifiedAt: new Date("2023-04-11T18:09:18.386Z"),
      id: "<value>",
      amount: 450113,
      currency: "Norwegian Krone",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2024-11-25T13:41:08.143Z"),
      currentPeriodEnd: new Date("2024-12-30T14:12:56.950Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-07-04T05:15:11.502Z"),
      startedAt: new Date("2025-11-01T14:06:18.331Z"),
      endsAt: new Date("2023-10-10T19:36:32.221Z"),
      endedAt: new Date("2025-07-22T16:47:45.821Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      metadata: {
        "key": "<value>",
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2023-08-13T13:39:26.566Z"),
        modifiedAt: new Date("2025-08-28T07:26:38.517Z"),
        metadata: {
          "key": false,
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
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Maye.Satterfield-Feest@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-09-12T15:24:37.344Z"),
        modifiedAt: new Date("2025-05-17T14:42:51.445Z"),
        id: "<value>",
        name: "<value>",
        description:
          "what shabby bloom blah along eek override absent delectable",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 106118,
        },
        prices: [
          {
            createdAt: new Date("2025-09-06T04:53:08.086Z"),
            modifiedAt: new Date("2023-04-29T18:01:53.095Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-10-30T16:33:35.903Z"),
            modifiedAt: new Date("2025-04-09T06:40:27.256Z"),
            id: "<value>",
            description: "council absent quietly",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              archived: {
                "key": false,
              },
              files: [
                "<value>",
              ],
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/sys",
            mimeType: "<value>",
            size: 535031,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-01-09T21:15:00.436Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-11-06T11:43:07.881Z"),
            sizeReadable: "<value>",
            publicUrl: "https://corny-submitter.net",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-05-17T18:00:28.664Z"),
              modifiedAt: new Date("2024-09-30T10:38:22.243Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 654263,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2024-10-24T07:42:42.569Z"),
        modifiedAt: new Date("2025-03-17T20:19:28.004Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 285288,
        maximumAmount: 902001,
        presetAmount: 577971,
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        basisPoints: 289990,
        createdAt: new Date("2024-03-06T03:26:30.971Z"),
        modifiedAt: new Date("2025-09-13T08:44:24.014Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-03-13T10:52:47.144Z"),
        endsAt: new Date("2024-05-27T04:51:56.681Z"),
        maxRedemptions: 717148,
        redemptionsCount: 61249,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
    },
  ],
  pagination: {
    totalCount: 367318,
    maxPage: 206230,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |