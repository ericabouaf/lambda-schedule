# lambda-schedule

Schedule lambda execution, cron-style.

## Usage

Download locally, then launch :

    node index.js sample-jobs.js

## Job example

````js
{
  schedule: '*/10 * * * * *',
  lambda: {
    FunctionName: 'echo',
    InvocationType: 'Event', // Don't wait
    LogType: 'None',
    Payload: JSON.stringify({
      "some": "data"
    })
  }
}
````

## Cron format

The cron format consists of:
```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```

# License

MIT
