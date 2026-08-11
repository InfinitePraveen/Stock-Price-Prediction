# Architecture

```text
CSV selected by interviewer
        |
        v
FileReader / File.text()
        |
        v
CSV parser + column detector
        |
        v
cleanRows()
        |
        v
time-series feature engineering
        |
        v
Ridge Regression
        |
        +--> chronological holdout metrics
        |
        +--> final next-close forecast
        |
        v
dashboard result + chart
```

No server-side prediction API is required.
