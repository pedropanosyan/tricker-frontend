import { LinearClient, LinearFetch, User } from "@linear/sdk";

const apiKey = "lin_api_kLUxFiKcmMP4nFyM4Bb4F43lUwfpZHNmM1sLD1bF";

const linearClient = new LinearClient({ apiKey });

export async function getCurrentUser(): LinearFetch<User> {
    return linearClient.viewer;
}
