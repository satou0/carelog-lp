import { ImageResponse } from "next/og";

export const alt = "ケアログAI — 親の介護記録・家族共有AIアプリ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				background: "#059669",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "60px",
			}}
		>
			<div
				style={{
					color: "#a7f3d0",
					fontSize: 26,
					marginBottom: 24,
					letterSpacing: "0.1em",
				}}
			>
				Care Log AI — Family Care Records
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: 32,
				}}
			>
				<span
					style={{
						color: "white",
						fontSize: 68,
						fontWeight: 700,
						lineHeight: 1.2,
					}}
				>
					Family Care Records
				</span>
				<span
					style={{
						color: "white",
						fontSize: 68,
						fontWeight: 700,
						lineHeight: 1.2,
					}}
				>
					Powered by AI
				</span>
			</div>
			<div
				style={{
					color: "#d1fae5",
					fontSize: 26,
					textAlign: "center",
					marginBottom: 48,
				}}
			>
				Record daily care → AI generates weekly summaries &amp; doctor notes
			</div>
			<div
				style={{
					background: "white",
					color: "#059669",
					padding: "14px 44px",
					borderRadius: 50,
					fontSize: 22,
					fontWeight: 700,
				}}
			>
				Pre-register now — Free
			</div>
		</div>,
		{ ...size },
	);
}
