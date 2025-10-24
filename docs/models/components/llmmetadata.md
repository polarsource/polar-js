# LLMMetadata

## Example Usage

```typescript
import { LLMMetadata } from "@polar-sh/sdk/models/components/llmmetadata.js";

let value: LLMMetadata = {
  vendor: "<value>",
  model: "Alpine",
  inputTokens: 547167,
  outputTokens: 335460,
  totalTokens: 589880,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `vendor`                                                      | *string*                                                      | :heavy_check_mark:                                            | The vendor of the event.                                      |
| `model`                                                       | *string*                                                      | :heavy_check_mark:                                            | The model used for the event.                                 |
| `prompt`                                                      | *string*                                                      | :heavy_minus_sign:                                            | The LLM prompt used for the event.                            |
| `response`                                                    | *string*                                                      | :heavy_minus_sign:                                            | The LLM response used for the event.                          |
| `inputTokens`                                                 | *number*                                                      | :heavy_check_mark:                                            | The number of LLM input tokens used for the event.            |
| `cachedInputTokens`                                           | *number*                                                      | :heavy_minus_sign:                                            | The number of LLM cached tokens that were used for the event. |
| `outputTokens`                                                | *number*                                                      | :heavy_check_mark:                                            | The number of LLM output tokens used for the event.           |
| `totalTokens`                                                 | *number*                                                      | :heavy_check_mark:                                            | The total number of LLM tokens used for the event.            |