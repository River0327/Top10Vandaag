import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { url, store } = await req.json();
    if (!url || !store) {
      return NextResponse.json({ error: 'Missing url or store' }, { status: 400 });
    }

    // Dynamically import node-fetch and cheerio for compatibility
    const fetch = (await import('node-fetch')).default;
    const cheerio = await import('cheerio');

    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      }
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch product page' }, { status: 500 });
    }
    const html = await res.text();
    let price = null;

    if (store === 'Coolblue') {
      // Coolblue: zoek naar prijs in de HTML
      const $ = cheerio.load(html);
      price = $("meta[itemprop='price']").attr('content') ||
              $("[data-test='product-price']").first().text().replace(/[^0-9,.]/g, '');
    } else if (store === 'Bol.com') {
      // Bol.com: zoek naar prijs in de HTML
      const $ = cheerio.load(html);
      price = $("meta[itemprop='price']").attr('content') ||
              $(".promo-price").first().text().replace(/[^0-9,.]/g, '');
      if (!price) {
        // Fallback: zoek naar andere prijs selectors
        price = $(".price-block__highlight").first().text().replace(/[^0-9,.]/g, '');
      }
    } else {
      return NextResponse.json({ error: 'Unknown store' }, { status: 400 });
    }

    if (!price) {
      return NextResponse.json({ error: 'Prijs niet gevonden' }, { status: 404 });
    }
    return NextResponse.json({ price });
  } catch (e) {
    return NextResponse.json({ error: 'Server error', details: e?.toString() }, { status: 500 });
  }
} 