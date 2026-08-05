import { redirect } from "next/navigation";

export default function EnterpriseSolutionsLegacyRedirectPage() {
  const targetUrl =
    process.env.NODE_ENV === "production"
      ? "https://dockwarelabs.dockfinity.com#services"
      : "http://dockwarelabs.localhost:3000#services";

  redirect(targetUrl);
}
