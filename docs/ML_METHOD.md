# ML Method

The application forecasts the next trading day's close.

Features are computed only from historical observations available on the prediction date:

- lagged closes
- returns
- moving-average gaps
- rolling volatility
- OHLC ranges
- volume change

The first 80% of samples are used for training and the last 20% for chronological evaluation. The final model is retrained on all usable samples before the next-day forecast.
