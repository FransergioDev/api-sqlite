import Redis from "ioredis";

export default class Cache {
  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST || "localhost",
      port: parseInt(process.env.REDIS_PORT) || 6379,
      keyPrefix: "cache:",
    });
  }

  async get(key) {
    const value = await this.redis.get(key);

    return value ? JSON.parse(value) : null;
  }

  set(key, value, timeExp) {
    return this.redis.set(key, JSON.stringify(value), "EX", timeExp);
  }

  del(key) {
    return this.redis.del(key);
  }

  //cache:id:xx
  async delPrefix(prefix) {
    const keys = (await this.redis.keys(`cache:${prefix}:*`)).map((key) =>
      key.replace("cache:", "")
    );

    return this.redis.del(keys);
  }
}
