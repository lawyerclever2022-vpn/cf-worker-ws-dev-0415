export default {
  async fetch(request, env) {
    const uuid = env.UUID || "7c9e6679-7425-40de-944b-e07fc1f90ae7";

    return new Response(
`VLESS Configuration

UUID:
${uuid}

Host:
${new URL(request.url).hostname}

Status:
Worker Running Successfully`,
      {
        headers: {
          "content-type": "text/plain"
        }
      }
    );
  }
}
