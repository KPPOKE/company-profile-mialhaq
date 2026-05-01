export function GET(request: Request) {
  return Response.redirect(new URL("/clear_bckround_logo_sekolah.png", request.url), 308);
}
