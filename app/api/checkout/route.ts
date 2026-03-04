import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST() {
  try {
    const priceId = process.env.STRIPE_PRICE_ID;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3035";

    if (!priceId) {
      return NextResponse.json({ error: "STRIPE_PRICE_ID not configured" }, { status: 500 });
    }

    const session = await getStripe().checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      locale: "de",
      success_url: `${siteUrl}/danke?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/`,
      allow_promotion_codes: true,
      subscription_data: {
        metadata: { source: "landing-page" },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unbekannter Fehler";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
