
module.exports = [
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
];
