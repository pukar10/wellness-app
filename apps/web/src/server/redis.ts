export type RedisStatus = {
  status: "not-configured";
};

export function getRedisStatus(): RedisStatus {
  return {
    status: "not-configured"
  };
}