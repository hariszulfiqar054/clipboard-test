const crypto = require('crypto');

const hashData = (data) =>
  crypto.createHash('sha3-512').update(data).digest('hex');

const calculateEventHash = (eventData) => {
  if (!eventData) return;
  if (eventData.partitionKey) {
    return eventData.partitionKey;
  }
  const data = JSON.stringify(eventData);
  return hashData(data);
};

const calculateCandidateHash = (candidateData) => {
  const TRIVIAL_PARTITION_KEY = '0';
  const MAX_PARTITION_KEY_LENGTH = 256;
  if (candidateData) {
    if (typeof candidateData !== 'string') {
      candidateData = JSON.stringify(candidateData);
    }
  } else {
    candidateData = TRIVIAL_PARTITION_KEY;
  }
  if (candidateData.length > MAX_PARTITION_KEY_LENGTH) {
    candidateData = hashData(candidateData);
  }
  return candidateData;
};

exports.deterministicPartitionKey = (event) => {
  let candidate;

  candidate = calculateEventHash(event);
  candidate = calculateCandidateHash(candidate);

  return candidate;
};
