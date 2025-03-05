# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2023-12-09T16:59:37.115Z"),
    modifiedAt: new Date("2025-08-27T05:15:52.024Z"),
    id: "<value>",
    amount: 958533,
    currency: "Cuban Peso",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2025-08-30T07:06:29.227Z"),
    currentPeriodEnd: new Date("2023-07-01T10:30:42.476Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-12-30T21:24:34.925Z"),
    startedAt: new Date("2023-04-03T07:05:35.185Z"),
    endsAt: new Date("2025-12-03T09:17:23.978Z"),
    endedAt: new Date("2025-02-06T21:27:34.191Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 476801,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-11-12T13:59:39.924Z"),
      modifiedAt: new Date("2024-08-02T12:01:00.206Z"),
      metadata: {
        "key": 759451,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
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
      email: "Emmett54@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-03-21T13:40:19.741Z"),
      modifiedAt: new Date("2025-04-20T06:28:09.460Z"),
      id: "<value>",
      name: "<value>",
      description: "bakeware flickering in vamoose sit",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2025-11-25T21:11:55.739Z"),
          modifiedAt: new Date("2025-08-16T19:51:12.559Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-12-10T19:26:04.923Z"),
          modifiedAt: new Date("2024-07-15T14:23:33.760Z"),
          id: "<value>",
          description: "deserted meh failing up subsidy",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "admin",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/rescue",
          mimeType: "<value>",
          size: 870100,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-10-28T13:20:43.403Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-18T14:23:36.397Z"),
          sizeReadable: "<value>",
          publicUrl: "https://indolent-license.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-10-19T19:15:03.918Z"),
            modifiedAt: new Date("2023-09-04T14:26:31.007Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 326942,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-10-24T02:05:02.156Z"),
      modifiedAt: new Date("2023-05-10T08:24:22.560Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      minimumAmount: 862666,
      maximumAmount: 254288,
      presetAmount: 665952,
    },
    discount: {
      duration: "forever",
      durationInMonths: 957489,
      type: "percentage",
      basisPoints: 112751,
      createdAt: new Date("2024-09-04T00:25:02.418Z"),
      modifiedAt: new Date("2025-02-26T03:10:42.176Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-01-29T20:21:23.051Z"),
      endsAt: new Date("2025-02-26T21:23:27.554Z"),
      maxRedemptions: 825681,
      redemptionsCount: 746834,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.created                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |