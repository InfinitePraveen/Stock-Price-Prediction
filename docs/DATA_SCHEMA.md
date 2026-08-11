# Data Schema

Minimum compatible schema:

```csv
Date,Close
2025-01-01,100
2025-01-02,101
```

Recommended:

```csv
Date,Open,High,Low,Close,Volume
```

Common alternatives are automatically recognized, including `Last`, `Adj Close`, `Price`, `Vol`, and `Timestamp`.
