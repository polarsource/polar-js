# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2023-02-12T14:57:02.739Z"),
    modifiedAt: new Date("2022-01-02T12:23:15.498Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    amount: 318233,
    taxAmount: 858778,
    currency: "North Korean Won",
    billingReason: "subscription_create",
    billingAddress: {
      country: "Germany",
    },
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    user: {
      id: "<value>",
      email: "Tyrell_Hodkiewicz-Wintheiser67@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://dazzling-topsail.biz/",
    },
    product: {
      createdAt: new Date("2023-05-12T14:11:27.716Z"),
      modifiedAt: new Date("2023-06-26T09:04:00.715Z"),
      id: "<value>",
      name: "<value>",
      description:
        "dearly necklace meh uproot storyboard joy unexpectedly sightseeing contravene",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-06-03T13:33:10.460Z"),
      modifiedAt: new Date("2024-08-24T23:35:22.943Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "forever",
      durationInMonths: 515638,
      type: "percentage",
      amount: 737279,
      currency: "UAE Dirham",
      createdAt: new Date("2024-01-31T19:07:41.241Z"),
      modifiedAt: new Date("2024-10-04T18:43:22.193Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-07-13T23:57:36.282Z"),
      endsAt: new Date("2023-06-14T22:27:38.966Z"),
      maxRedemptions: 140316,
      redemptionsCount: 358995,
      organizationId: "<value>",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2024-10-08T22:37:22.117Z"),
      modifiedAt: new Date("2022-11-06T23:44:26.014Z"),
      id: "<value>",
      amount: 339631,
      currency: "Malaysian Ringgit",
      recurringInterval: "year",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2022-10-09T13:56:07.424Z"),
      currentPeriodEnd: new Date("2024-08-15T10:02:19.627Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-06-24T02:43:59.746Z"),
      endedAt: new Date("2024-09-12T06:16:21.252Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.WebhookOrderCreatedPayloadType](../../models/components/webhookordercreatedpayloadtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.Order](../../models/components/order.md)                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |