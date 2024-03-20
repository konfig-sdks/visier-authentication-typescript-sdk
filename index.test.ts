import { VisierAuthentication } from "./index";

describe("visier-authentication-typescript-sdk", () => {
    it("initialize client", async () => {
        const visierauthentication = new VisierAuthentication({
            apiKey: "API_KEY",
        });
    });
});
