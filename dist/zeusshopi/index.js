const index = {
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        name: "Cloudflare"
      });
    }
    return new Response(null, { status: 404 });
  }
};
export {
  index as default
};
