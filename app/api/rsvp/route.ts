import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            name,
            email,
            phone,
            attending,
            guests,
            message,
            selectedEvents = [],
        } = body;

        const eventsHtml =
            selectedEvents.length > 0
                ? selectedEvents
                    .map(
                        (event: string) => `
                <div style="padding:12px 14px;border:1px dashed #d9c8b5;border-radius:14px;margin-bottom:10px;background:#fffaf1;">
                  <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#9a6b5f;">Boarding Pass</div>
                  <div style="font-size:18px;font-family:Georgia,serif;color:#30231f;margin-top:4px;">${event}</div>
                </div>
              `
                    )
                    .join("")
                : `
          <div style="padding:12px 14px;border:1px dashed #d9c8b5;border-radius:14px;background:#fffaf1;color:#6D7355;">
            No events selected
          </div>
        `;
        if (email) {
            await resend.emails.send({
                from: "Kamal & Shan <noreply@thegrewals.com>",
                to: email,
                subject: "Your RSVP has been received ✈️",
                html: `
      <div style="background:#efe3d3;padding:28px;font-family:Arial,sans-serif;color:#30231f;">
        <div style="max-width:600px;margin:auto;background:#fffaf1;border-radius:28px;padding:28px;">
          <p style="letter-spacing:4px;text-transform:uppercase;color:#9a6b5f;font-size:11px;">
            Boarding Confirmed
          </p>

          <h1 style="font-family:Georgia,serif;font-size:38px;margin:10px 0;">
            Thank you, ${name}
          </h1>

          <p style="line-height:1.7;color:#6D7355;">
            Your RSVP for Kamal & Shan’s wedding has been received.
          </p>

          <p><strong>Attending:</strong> ${attending}</p>
          <p><strong>Guests:</strong> ${guests}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>

          <div className="mt-10 rounded-[2rem] border border-[#25D366]/30 bg-[#25D366]/10 p-6 text-center">
  <p className="text-xs uppercase tracking-[0.35em] text-[#1e7c45]">
    Stay Connected
  </p>

  <h2 className="mt-3 font-serif text-3xl text-[#30231f]">
    Join Our Wedding WhatsApp Group
  </h2>

  <p className="mx-auto mt-3 max-w-md text-[#6D7355]">
    Receive event reminders, travel updates, important announcements,
    and share in the excitement leading up to the wedding.
  </p>

  <a
    href="https://chat.whatsapp.com/GklupxftipUFeyT8zbnSOW?s=cl&p=i&mlu=1"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-[#1faa59]"
  >
    💬 Join WhatsApp Group
  </a>
</div>

          <p style="margin-top:20px;"><strong>Selected Events:</strong></p>
          <ul>
            ${selectedEvents.length > 0
                        ? selectedEvents.map((event: string) => `<li>${event}</li>`).join("")
                        : "<li>No events selected</li>"
                    }
          </ul>

          <p style="margin-top:24px;color:#6D7355;">
            We look forward to celebrating with you.
          </p>

          <p style="font-family:Georgia,serif;font-size:24px;">
            Kamal & Shan
          </p>
        </div>
      </div>
    `,
            });
        }


        await resend.emails.send({
            from: "Wedding RSVP <noreply@thegrewals.com>",
            to: process.env.TO_EMAIL!,
            subject: `✈️ Wedding RSVP • ${name}`,
            html: `
        <div style="margin:0;padding:0;background:#efe3d3;font-family:Arial,sans-serif;color:#30231f;">
          <div style="max-width:640px;margin:0 auto;padding:32px 18px;">

            <div style="background:#3b241f;border-radius:28px;padding:28px;color:#d8b66a;text-align:center;box-shadow:0 20px 45px rgba(0,0,0,0.18);">
              <div style="border:1px solid rgba(216,182,106,0.45);border-radius:22px;padding:28px;">
                <div style="font-size:11px;letter-spacing:5px;text-transform:uppercase;">
                  Wedding Passport
                </div>

                <div style="margin:28px auto 22px;width:92px;height:92px;border:1px solid #d8b66a;border-radius:999px;display:flex;align-items:center;justify-content:center;font-family:Georgia,serif;font-size:30px;">
                  K | S
                </div>

                <div style="font-family:Georgia,serif;font-size:38px;line-height:1.1;">
                  Kamal &amp; Shan
                </div>

                <div style="margin-top:12px;font-size:11px;letter-spacing:4px;text-transform:uppercase;">
                  New RSVP Received
                </div>
              </div>
            </div>

            <div style="background:#fffaf1;border-radius:28px;padding:28px;margin-top:20px;box-shadow:0 12px 30px rgba(0,0,0,0.12);">
              <div style="font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#9a6b5f;">
                Passenger Information
              </div>

              <h2 style="font-family:Georgia,serif;font-size:34px;margin:10px 0 18px;color:#30231f;">
                ${name}
              </h2>

              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px;">
                <div style="padding:14px;border:1px solid #d9c8b5;border-radius:16px;background:white;">
                  <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#9a6b5f;">Attending</div>
                  <div style="margin-top:6px;font-size:18px;font-weight:600;">${attending}</div>
                </div>

                <div style="padding:14px;border:1px solid #d9c8b5;border-radius:16px;background:white;">
                  <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#9a6b5f;">Guests</div>
                  <div style="margin-top:6px;font-size:18px;font-weight:600;">${guests}</div>
                </div>
              </div>

              <div style="margin-top:24px;">
                <div style="font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#9a6b5f;margin-bottom:12px;">
                  Selected Events
                </div>

                ${eventsHtml}
              </div>

              <div style="margin-top:24px;padding:18px;border-radius:18px;background:white;border:1px solid #d9c8b5;">
                <div style="font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#9a6b5f;">
                  Message
                </div>

                <p style="font-size:16px;line-height:1.7;color:#6D7355;margin-bottom:0;">
                  ${message || "No message"}
                </p>
              </div>
            </div>

            <div style="text-align:center;color:#6D7355;font-size:12px;margin-top:22px;">
              Sent from the Kamal &amp; Shan wedding website.
            </div>

          </div>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("RSVP email error:", error);

        return NextResponse.json(
            { success: false, error: "Unable to send RSVP" },
            { status: 500 }
        );
    }
}