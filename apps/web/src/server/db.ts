export type DatabaseStatus = {
  status: "not-configured";
};

export function getDatabaseStatus(): DatabaseStatus {
  return {
    status: "not-configured"
  };
}