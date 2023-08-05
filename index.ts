import { env, getApiClientFromEmailAndPassword } from "./util";

(async () => {
  const client = await getApiClientFromEmailAndPassword(
    env("email"),
    env("username"),
    env("password"),
    () => {
      return "123456";
    }
  );

  client.getTweetApi().getUserTweets({
    userId: "",
    count: 10,
  });
})();