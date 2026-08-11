# Model Card

**Task:** next trading-day closing-price regression

**Browser model:** standardized Ridge Regression implemented in JavaScript

**Features:** lagged closes, returns, moving-average gaps, volatility, OHLC range, volume change

**Validation:** chronological 80/20 holdout

**Output:** next close estimate and UP/DOWN direction

The model is intentionally lightweight so an interviewer can understand and run it without installing a JavaScript ML framework.
