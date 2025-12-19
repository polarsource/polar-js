# TokenType

## Example Usage

```typescript
import { TokenType } from "@polar-sh/sdk/models/components/introspecttokenresponse.js";

let value: TokenType = "refresh_token";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"access_token" | "refresh_token" | Unrecognized<string>
```