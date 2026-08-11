# Web App Guide

The web app is a dependency-free client-side ML demonstration.

## Input

Minimum:

```csv
Date,Close
```

Recommended:

```csv
Date,Open,High,Low,Close,Volume
```

NSE-style files are also supported:

```text
Date, Symbol, Series, Prev Close, Open, High, Low, Last, Close, VWAP, Volume, ...
```

## Prediction

The target is the next trading day's closing price.

The browser:

1. Reads the selected CSV.
2. Detects columns.
3. Cleans and sorts observations.
4. Builds time-series features.
5. Splits chronologically.
6. Fits Ridge Regression.
7. Evaluates the holdout.
8. Retrains on all usable history.
9. Forecasts the next close.

The browser can read a user-selected file through the standard File API/FileReader mechanism. citehttps://developer.mozilla.org/en-US/docs/Web/API/FileReader

## No server-side upload

The selected CSV is processed locally by the application. There is no upload endpoint, API key, or external prediction service.
