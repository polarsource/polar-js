# BenefitArticlesSubscriberProperties

Properties available to subscribers for a benefit of type `articles`.

## Example Usage

```typescript
import { BenefitArticlesSubscriberProperties } from "@polar-sh/sdk/models/components";

let value: BenefitArticlesSubscriberProperties = {
    paidArticles: false,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `paidArticles`                             | *boolean*                                  | :heavy_check_mark:                         | Whether the user can access paid articles. |