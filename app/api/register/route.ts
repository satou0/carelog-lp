import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const formData = await request.formData();
	const email = formData.get("email");

	if (!email || typeof email !== "string" || !email.includes("@")) {
		return NextResponse.redirect(new URL("/?registered=false", request.url), {
			status: 302,
		});
	}

	try {
		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: process.env.NOTIFY_EMAIL ?? "",
			subject: "【ケアログAI】新しい事前登録がありました",
			html: `
				<p>新しい事前登録がありました。</p>
				<p><strong>メールアドレス：</strong>${email}</p>
				<hr />
				<p style="color:#888;font-size:12px;">CareLog AI LP 自動通知</p>
			`,
		});
	} catch (err) {
		console.error("[CareLog AI] Resend error:", err);
	}

	console.info("[CareLog AI] 事前登録:", email);
	return NextResponse.redirect(new URL("/?registered=true", request.url), {
		status: 302,
	});
}
