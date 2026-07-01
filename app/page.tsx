const problems = [
	{
		icon: "📝",
		title: "記録がバラバラ",
		desc: "LINEや紙のメモに散らばって、親の状態の変化に気づけない",
	},
	{
		icon: "👨‍👩‍👧",
		title: "共有が一人に偏る",
		desc: "兄弟間で「最近どう？」のやりとりが特定の人に集中してしまう",
	},
	{
		icon: "🏥",
		title: "受診前に慌てる",
		desc: "「先生に何を伝えるか」を通院直前に整理するのが毎回大変",
	},
];

const features = [
	{
		icon: "✅",
		title: "タップで記録、続けられるシンプルさ",
		desc: "体調・食事量・睡眠・気分をタップで選ぶだけ。忙しい毎日でも30秒で記録できます。",
	},
	{
		icon: "👪",
		title: "家族グループで安全に共有",
		desc: "招待コードで家族を招待するだけ。兄弟・配偶者・ケアマネと同じ記録をリアルタイムで共有できます。",
	},
	{
		icon: "🤖",
		title: "AIが「週次サマリ」と「受診メモ」を自動生成",
		desc: "1週間の記録からAIが変化・気づきをまとめます。通院前には「先生に伝えるポイント」を箇条書きで出力。",
	},
];

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ registered?: string }>;
}) {
	const params = await searchParams;
	const isRegistered = params.registered === "true";

	return (
		<>
			{/* ヘッダー */}
			<header className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
				<div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="text-2xl" aria-hidden="true">
							🌿
						</span>
						<span className="font-bold text-lg text-emerald-700">
							ケアログAI
						</span>
					</div>
					<a
						href="#register"
						className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
					>
						事前登録（無料）
					</a>
				</div>
			</header>

			<main>
				{/* ヒーロー */}
				<section className="bg-gradient-to-b from-emerald-50 to-white py-20 px-4">
					<div className="max-w-3xl mx-auto text-center">
						<p className="text-emerald-600 font-medium mb-4 text-sm tracking-wide">
							介護記録・家族共有AIアプリ（開発中）
						</p>
						<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
							親の変化を、
							<br />
							家族みんなで見守る。
						</h1>
						<p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
							毎日の体調・食事・服薬をタップで記録。
							<br />
							AIが「今週のサマリ」と「受診時の伝え方」を自動でまとめます。
						</p>
						<a
							href="#register"
							className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-md"
						>
							無料で事前登録する →
						</a>
						<p className="text-xs text-gray-400 mt-4">
							※ 現在開発中です。リリース時にメールでお知らせします。
						</p>
					</div>
				</section>

				{/* 課題提示 */}
				<section className="bg-gray-50 py-16 px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
							こんなお困りはありませんか？
						</h2>
						<div className="grid sm:grid-cols-3 gap-6">
							{problems.map((item) => (
								<div
									key={item.title}
									className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
								>
									<div className="text-3xl mb-3" aria-hidden="true">
										{item.icon}
									</div>
									<h3 className="font-semibold text-gray-900 mb-2">
										{item.title}
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										{item.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* 特徴・解決策 */}
				<section className="py-16 px-4 bg-white">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
							ケアログAIが解決します
						</h2>
						<p className="text-center text-gray-500 mb-12">
							3つの価値をひとつのアプリで
						</p>
						<div className="space-y-10">
							{features.map((item) => (
								<div
									key={item.title}
									className="flex flex-col sm:flex-row gap-6 items-start"
								>
									<div className="flex-shrink-0 w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl">
										<span aria-hidden="true">{item.icon}</span>
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											{item.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* デモ体験 */}
				<section className="py-16 px-4 bg-emerald-50">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
							今すぐブラウザで試せます
						</h2>
						<p className="text-gray-500 mb-10">
							インストール不要。実際のアプリをそのまま操作できます。
						</p>
						<div className="flex justify-center">
							<iframe
								src="https://appetize.io/embed/b_stwxqb3jjgkywr3idmntzbh7ka?device=pixel7&osVersion=13.0&scale=75&autoplay=false&orientation=portrait"
								width="300"
								height="620"
								className="rounded-3xl shadow-2xl border-4 border-gray-800"
								title="ケアログAI デモ"
								allow="clipboard-write"
							/>
						</div>
						<p className="text-xs text-gray-400 mt-6">
							※ デモ版のため通知・課金機能は動作しません
						</p>
					</div>
				</section>

				{/* グループ共有ビジュアル */}
				<section className="py-16 px-4 bg-emerald-50">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
							離れていても、同じ画面で見守れる
						</h2>
						<p className="text-center text-gray-500 mb-10">
							招待コードを送るだけで、家族全員がリアルタイムに確認できます
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
							{/* 記録カード */}
							<div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 w-full sm:w-56">
								<div className="flex items-center gap-2 mb-4">
									<span className="text-xl" aria-hidden="true">
										📋
									</span>
									<span className="font-semibold text-gray-800 text-sm">
										今日の記録
									</span>
									<span className="ml-auto text-xs text-gray-400">6/30</span>
								</div>
								<div className="space-y-2">
									{[
										{
											label: "体調",
											value: "良好",
											color: "text-emerald-600",
										},
										{
											label: "食事量",
											value: "完食",
											color: "text-emerald-600",
										},
										{
											label: "服薬",
											value: "済み",
											color: "text-emerald-600",
										},
										{
											label: "睡眠",
											value: "6時間",
											color: "text-blue-600",
										},
									].map((row) => (
										<div
											key={row.label}
											className="flex justify-between items-center text-xs"
										>
											<span className="text-gray-500">{row.label}</span>
											<span className={`font-medium ${row.color}`}>
												{row.value} ✓
											</span>
										</div>
									))}
								</div>
							</div>

							{/* 矢印 */}
							<div className="flex sm:flex-col items-center gap-2">
								<span
									className="text-4xl text-emerald-300 rotate-90 sm:rotate-0"
									aria-hidden="true"
								>
									→
								</span>
								<span className="text-xs text-emerald-600 font-medium bg-emerald-100 px-3 py-1 rounded-full whitespace-nowrap">
									リアルタイム同期
								</span>
							</div>

							{/* 受信者カード */}
							<div className="flex flex-col gap-3 w-full sm:w-56">
								{[
									{
										icon: "👨",
										name: "長男",
										location: "東京在住",
									},
									{
										icon: "👩",
										name: "長女",
										location: "大阪在住",
									},
									{
										icon: "👷",
										name: "ケアマネ",
										location: "担当者",
									},
								].map((person) => (
									<div
										key={person.name}
										className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 flex items-center gap-3"
									>
										<span className="text-2xl" aria-hidden="true">
											{person.icon}
										</span>
										<div>
											<p className="text-sm font-semibold text-gray-800">
												{person.name}
											</p>
											<p className="text-xs text-gray-400">{person.location}</p>
										</div>
										<div className="ml-auto flex items-center gap-1">
											<div className="w-2 h-2 bg-emerald-400 rounded-full" />
											<span className="text-xs text-emerald-600">確認済</span>
										</div>
									</div>
								))}
							</div>
						</div>

						<p className="text-center text-sm text-gray-500 mt-10">
							✅ 招待コードで簡単参加　　✅ 閲覧権限の個別設定　　✅
							通知でリアルタイム把握
						</p>
					</div>
				</section>

				{/* AI レポートビジュアル */}
				<section className="py-16 px-4 bg-white">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
							AIが、面倒な「まとめ」を代わりにやってくれる
						</h2>
						<p className="text-center text-gray-500 mb-10">
							記録をためるだけで、週末と通院前に自動生成されます
						</p>

						<div className="grid sm:grid-cols-2 gap-6">
							{/* 週次サマリカード */}
							<div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
								<div className="flex items-center gap-2 mb-4">
									<span className="text-lg" aria-hidden="true">
										🤖
									</span>
									<div>
										<p className="font-semibold text-gray-800 text-sm">
											今週のサマリ
										</p>
										<p className="text-xs text-gray-400">6/23〜6/29</p>
									</div>
									<span className="ml-auto text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
										AI生成
									</span>
								</div>
								<div className="space-y-2 text-sm text-gray-700 leading-relaxed">
									<p className="text-gray-500 text-xs font-medium mb-3">
										今週は全体的に安定していました。
									</p>
									{[
										{
											label: "食事量",
											text: "7日中6日が「完食」。木曜のみ半分程度。",
										},
										{
											label: "睡眠",
											text: "平均5.8時間。月・火はやや早起きぎみ。",
										},
										{
											label: "服薬",
											text: "すべて「済み」を確認。",
										},
										{
											label: "気になる変化",
											text: "木曜に食欲が落ち、疲れ気味のメモあり。週末にかけて回復。",
										},
									].map((row) => (
										<div key={row.label} className="flex gap-2">
											<span className="text-emerald-500 flex-shrink-0">•</span>
											<p>
												<span className="font-medium text-gray-800">
													{row.label}：
												</span>
												{row.text}
											</p>
										</div>
									))}
								</div>
							</div>

							{/* 受診メモカード */}
							<div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
								<div className="flex items-center gap-2 mb-4">
									<span className="text-lg" aria-hidden="true">
										📋
									</span>
									<div>
										<p className="font-semibold text-gray-800 text-sm">
											受診メモ
										</p>
										<p className="text-xs text-gray-400">本日の通院用</p>
									</div>
									<span className="ml-auto text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
										AI生成
									</span>
								</div>
								<p className="text-xs text-gray-500 font-medium mb-3">
									先生に伝えるポイント
								</p>
								<div className="space-y-2 text-sm text-gray-700">
									{[
										"先週木曜（6/26）に食欲が落ち、疲れ気味との記録あり",
										"睡眠は平均5〜6時間で、やや短め",
										"服薬は毎日忘れず継続できています",
										"特に気になる症状の訴えはなし",
									].map((item) => (
										<div key={item} className="flex gap-2">
											<span className="text-emerald-500 flex-shrink-0">•</span>
											<p>{item}</p>
										</div>
									))}
								</div>
							</div>
						</div>

						<p className="text-center text-xs text-gray-400 mt-6">
							※
							上記はサンプルです。本内容は記録の要約であり、医療上の助言・診断ではありません。判断は医療者にご相談ください。
						</p>
					</div>
				</section>

				{/* 料金プラン */}
				<section className="py-16 px-4 bg-white">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
							シンプルな料金プラン
						</h2>
						<p className="text-center text-gray-500 mb-10">
							まずは無料ではじめて、必要になったらアップグレード
						</p>

						<div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
							{/* 無料プラン */}
							<div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
								<p className="text-sm font-medium text-gray-500 mb-1">
									無料プラン
								</p>
								<p className="text-4xl font-bold text-gray-900 mb-1">¥0</p>
								<p className="text-sm text-gray-400 mb-6">ずっと無料</p>
								<ul className="space-y-3 text-sm text-gray-700">
									{[
										"日次記録（体調・食事・服薬・睡眠）",
										"介護対象プロフィール 1人分",
										"家族共有 1名まで",
										"タイムライン閲覧",
									].map((item) => (
										<li key={item} className="flex items-start gap-2">
											<span className="text-emerald-500 mt-0.5 flex-shrink-0">
												✓
											</span>
											{item}
										</li>
									))}
									<li className="flex items-start gap-2 text-gray-400">
										<span className="mt-0.5 flex-shrink-0">–</span>
										AI 週次サマリ・受診メモ
									</li>
								</ul>
							</div>

							{/* プレミアムプラン */}
							<div className="bg-emerald-700 rounded-2xl p-6 border border-emerald-600 relative">
								<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
									おすすめ
								</span>
								<p className="text-sm font-medium text-emerald-200 mb-1">
									プレミアムプラン
								</p>
								<div className="flex items-baseline gap-2 mb-1">
									<p className="text-4xl font-bold text-white">¥480</p>
									<p className="text-emerald-300 text-sm">/ 月</p>
								</div>
								<p className="text-sm text-emerald-300 mb-6">
									年払い ¥4,800（2ヶ月分お得）
								</p>
								<ul className="space-y-3 text-sm text-emerald-50">
									{[
										"無料プランのすべて",
										"AI 週次サマリ（無制限）",
										"AI 受診メモ生成（無制限）",
										"家族共有 人数拡張",
										"PDF エクスポート",
									].map((item) => (
										<li key={item} className="flex items-start gap-2">
											<span className="text-amber-300 mt-0.5 flex-shrink-0">
												✓
											</span>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>

						<p className="text-center text-sm text-gray-400 mt-8">
							※
							価格・内容はリリース時に変更になる場合があります。事前登録者には最新情報をお知らせします。
						</p>
					</div>
				</section>

				{/* 事前登録 */}
				<section id="register" className="bg-emerald-700 py-16 px-4">
					<div className="max-w-xl mx-auto text-center">
						<h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
							リリース時にお知らせを受け取る
						</h2>
						<p className="text-emerald-100 mb-8 text-sm leading-relaxed">
							事前登録者には、リリース情報と早期アクセス優待をお届けします。
							<br />
							迷惑メールは一切送りません。
						</p>

						{isRegistered ? (
							<div className="bg-white rounded-2xl p-8">
								<div className="text-4xl mb-3" aria-hidden="true">
									🎉
								</div>
								<p className="text-gray-900 font-semibold text-lg mb-1">
									登録ありがとうございます！
								</p>
								<p className="text-gray-600 text-sm">
									リリース時にメールでご連絡します。楽しみにお待ちください。
								</p>
							</div>
						) : (
							<form
								action="/api/register"
								method="POST"
								className="flex flex-col sm:flex-row gap-3"
							>
								<label htmlFor="email" className="sr-only">
									メールアドレス
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									placeholder="メールアドレスを入力"
									className="flex-1 px-4 py-3 rounded-full border-2 border-transparent focus:border-emerald-300 outline-none text-gray-900 placeholder-gray-400"
								/>
								<button
									type="submit"
									className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors whitespace-nowrap"
								>
									無料で登録する
								</button>
							</form>
						)}

						<p className="text-emerald-200 text-xs mt-4">
							個人情報はリリース通知の目的のみに使用します。
						</p>
					</div>
				</section>

				{/* 免責 */}
				<section className="bg-gray-50 py-8 px-4">
					<div className="max-w-3xl mx-auto">
						<p className="text-xs text-gray-500 text-center leading-relaxed">
							本サービスのAI機能は介護記録の要約・整理を目的としており、医療上の助言・診断・治療の指示を行うものではありません。
							健康状態の判断については必ず医療者にご相談ください。
						</p>
					</div>
				</section>
			</main>

			{/* フッター */}
			<footer className="bg-gray-900 text-gray-400 py-8 px-4">
				<div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-2">
						<span className="text-xl" aria-hidden="true">
							🌿
						</span>
						<span className="font-semibold text-white">ケアログAI</span>
					</div>
					<p className="text-xs">© 2026 CareLog AI. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}
