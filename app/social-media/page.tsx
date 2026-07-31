import type { Metadata } from 'next';
import {
	Link,
	Briefcase,
	Star,
	BookOpen,
	ExternalLink,
} from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import StructuredData from '@/components/seo/StructuredData';

const LinkedInIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
	</svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
	</svg>
);

const PinterestIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z' />
	</svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z' />
	</svg>
);

const MediumIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z' />
	</svg>
);

const QuoraIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M12.222 9.908v3.858h-.018c-1.108.018-1.925-.369-2.526-1.083l-1.045.603c.75 1.185 1.864 1.807 3.264 1.807.037 0 .075-.002.112-.005a5.07 5.07 0 00.213-1.173v-4.007h.002zm1.746-3.64c-.725 0-1.31.585-1.31 1.31 0 .725.585 1.31 1.31 1.31.724 0 1.31-.585 1.31-1.31 0-.725-.586-1.31-1.31-1.31zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.062 11.46c0 3.13-1.55 6.178-4.412 8.165-2.563 1.775-5.853 2.375-8.952 2.375-3.33 0-6.392-.694-8.81-2.375C-1.428 17.638-3.06 14.59-3.06 11.46c0-3.253 1.586-6.16 4.47-8.24C3.853 1.458 6.945.773 10.125.773c3.33 0 6.392.694 8.81 2.375 2.952 1.95 4.47 4.908 4.47 8.312h-1.343z' />
	</svg>
);

const YCombinatorIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M0 0v24h24V0H0zm12.8 14.3V17H6.5V7h6.3v2.7H9.3v4.4h3.5zm4.5-1.7c0-1.4-.8-2.3-2.2-2.3-.9 0-1.5.4-1.9 1l-.2-.8H13v7.7h1.7V9.8c.4-.5 1.1-.7 1.7-.7 1.3 0 2 .8 2 2.1v5.2h1.7V9.9l-.4.4z' />
	</svg>
);

const TrustpilotIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z' />
	</svg>
);

const SubstackIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z' />
	</svg>
);

const MastodonIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.547c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054 19.648 19.648 0 0 0 4.636.536c.562 0 1.124-.014 1.686-.042 1.902-.093 3.925-.167 5.72-1.015.048-.023.095-.045.141-.068 2.34-1.064 4.443-2.584 4.878-6.183.013-.117.035-.23.066-.342zM19.462 14.53h-3.14V9.46c0-1.29-.543-1.947-1.63-1.947-1.21 0-1.816.79-1.816 2.356v3.387H9.716V9.87c0-1.565-.607-2.356-1.817-2.356-1.087 0-1.63.656-1.63 1.947v5.068H3.902V9.637c0-1.29.327-2.35.983-3.182.673-.83 1.55-1.255 2.634-1.255 1.255 0 2.215.48 2.79 1.44l.6 1.016.6-1.016c.576-.96 1.536-1.44 2.79-1.44 1.083 0 1.96.425 2.633 1.255.657.832.984 1.892.984 3.182v4.893z' />
	</svg>
);

const HashnodeIcon = ({ className }: { className?: string }) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className}>
		<path d='M17.613 6.987c-.152-.134-.334-.203-.517-.203h-2.39c-.33 0-.6.27-.6.6v3.49c0 .33.27.6.6.6h.6v3.887c0 2.14 1.738 3.878 3.878 3.878 2.14 0 3.878-1.738 3.878-3.878V6.387c0-.33-.27-.6-.6-.6h-4.442zM20.856 14.773c0 1.438-1.168 2.606-2.606 2.606-1.438 0-2.606-1.168-2.606-2.606V9.887h2.606v4.886zM3.2 6.187c-.152-.134-.334-.203-.517-.203H.287c-.33 0-.6.27-.6.6v8.02c0 2.14 1.738 3.878 3.878 3.878 1.225 0 2.314-.567 3.032-1.45l.47-.582.47.582c.718.883 1.807 1.45 3.032 1.45.544 0 1.053-.124 1.503-.347.33-.163.476-.546.313-.877a.614.614 0 0 0-.313-.313 3.885 3.885 0 0 1-1.503-.347c-1.48-.73-2.473-2.182-2.57-3.896H3.287c-.33 0-.6-.27-.6-.6V6.787c0-.33.27-.6.6-.6h.013zM12 1.433c-2.14 0-3.878 1.738-3.878 3.878 0 1.438.788 2.692 1.955 3.35.33.186.464.596.278.926a.61.61 0 0 0 .278.278c.33.186.74.052.926-.278.825-.468 1.796-.736 2.441-.736 1.48 0 2.686 1.206 2.686 2.686 0 1.48-1.206 2.686-2.686 2.686h-1.01v2.17h1.01c2.67 0 4.856-2.186 4.856-4.856 0-2.67-2.186-4.856-4.856-4.856H12V1.433zm.293 7.593c-.186-.083-.396-.136-.613-.136-.785 0-1.422.637-1.422 1.422v2.17c0 .785.637 1.422 1.422 1.422.785 0 1.422-.637 1.422-1.422V9.01c0-.296-.096-.569-.255-.79-.126-.175-.315-.306-.53-.394z' />
	</svg>
);

export const metadata: Metadata = {
	title: 'Follow Us on Social Media',
	description:
		'Connect with SpaceCapture on social media. Follow us on YouTube, Medium, Reddit, Quora, Pinterest, and more for updates, insights, and community discussions.',
	alternates: {
		canonical: 'https://spacecapture.ai/social-media',
	},
	openGraph: {
		title: 'Follow Us on Social Media | SpaceCapture',
		description:
			'Connect with SpaceCapture on social media. Follow us on YouTube, Medium, Reddit, Quora, Pinterest, and more.',
		url: 'https://spacecapture.ai/social-media',
	},
};

const PLATFORMS = [
// 	{
// 		name: 'Facebook',
// 		url: '',
// 		icon: SiFacebook,
// 		color: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
// 		description: 'Follow our page for updates and community.',
// 	},
// 	{
// 		name: 'Instagram',
// 		url: '',
// 		icon: SiInstagram,
// 		color: 'bg-pink-50 text-pink-600 hover:bg-pink-100',
// 		description: 'Visual stories and behind-the-scenes content.',
// 	},
// 	{
// 		name: 'X',
// 		url: '',
// 		icon: SiX,
// 		color: 'bg-slate-50 text-slate-900 hover:bg-slate-100',
// 		description: 'Real-time updates and tech discussions.',
// 	},
// 	{
// 		name: 'LinkedIn',
// 		url: '',
// 		icon: LinkedInIcon,
// 		color: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
// 		description: 'Connect with us on the professional network.',
// 	},
	{
		name: 'YouTube',
		url: 'https://www.youtube.com/@SpaceCapture_AI',
		icon: YoutubeIcon,
		color: 'bg-red-50 text-red-600 hover:bg-red-100',
		description: 'Watch tutorial videos and demos for construction field management.',
	},
	{
		name: 'Pinterest',
		url: 'https://www.pinterest.com/spacecaptureai/',
		icon: PinterestIcon,
		color: 'bg-rose-50 text-rose-600 hover:bg-rose-100',
		description: 'Visual inspiration for construction and field inspection.',
	},
	{
		name: 'Reddit',
		url: 'https://www.reddit.com/user/spacecaptureAI/',
		icon: RedditIcon,
		color: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
		description: 'Join discussions on construction and AI communities.',
	},
	{
		name: 'Medium',
		url: 'https://medium.com/@spacecaptureai5',
		icon: MediumIcon,
		color: 'bg-green-50 text-green-600 hover:bg-green-100',
		description:
			'Read our articles on AI, construction tech, and field inspections.',
	},
	{
		name: 'Quora',
		url: 'https://www.quora.com/profile/SpacecaptureAI/',
		icon: QuoraIcon,
		color: 'bg-red-50 text-red-600 hover:bg-red-100',
		description: 'Ask and answer questions about construction software and AI.',
	},
// 	{
// 		name: 'Dribbble',
// 		url: '',
// 		icon: SiDribbble,
// 		color: 'bg-pink-50 text-pink-500 hover:bg-pink-100',
// 		description: 'Design shots and UI/UX inspiration.',
// 	},
// 	{
// 		name: 'Behance',
// 		url: '',
// 		icon: SiBehance,
// 		color: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
// 		description: 'Creative projects and design portfolios.',
// 	},
	{
		name: 'Hacker News',
		url: 'https://news.ycombinator.com/user?id=spacecaptureai',
		icon: YCombinatorIcon,
		color: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
		description: 'Tech discussions and startup community.',
	},
// 	{
// 		name: 'Kaggle',
// 		url: '',
// 		icon: SiKaggle,
// 		color: 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100',
// 		description: 'Data science notebooks and ML competitions.',
// 	},
	{
		name: 'Substack',
		url: 'https://substack.com/@spacecaptureai',
		icon: SubstackIcon,
		color: 'bg-amber-50 text-amber-600 hover:bg-amber-100',
		description: 'Subscribe to our newsletter for weekly insights.',
	},
	{
		name: 'Mastodon',
		url: 'https://mastodon.social/@spacecaptureai',
		icon: MastodonIcon,
		color: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
		description: 'Follow us on the decentralized social network.',
	},
	{
		name: 'Hashnode',
		url: 'https://hashnode.com/@space-capture-ai',
		icon: HashnodeIcon,
		color: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
		description: 'Technical blog posts on engineering and development.',
	},
	{
		name: 'TrustPilot',
		url: 'https://www.trustpilot.com/users/6a3899d49192b772e984f272',
		icon: TrustpilotIcon,
		color: 'bg-teal-50 text-teal-600 hover:bg-teal-100',
		description: 'Read verified reviews on TrustPilot.',
	},
	{
		name: 'G2',
		url: 'https://www.g2.com/users/spacecaptureai',
		icon: Star,
		color: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100',
		description: 'See our reviews and ratings on G2.',
	},
// 	{
// 		name: 'VSCO',
// 		url: '',
// 		icon: SiVsco,
// 		color: 'bg-slate-50 text-slate-700 hover:bg-slate-100',
// 		description: 'Photography and visual storytelling.',
// 	},
	{
		name: 'AllMyLinks',
		url: 'https://allmylinks.com/spacecaptureai',
		icon: Link,
		color: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
		description: 'All our links in one place.',
	},
	{
		name: 'F6S',
		url: 'https://www.f6s.com/space-captureai?event=focus-thumbnail',
		icon: Briefcase,
		color: 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100',
		description: 'Startup profile and founder network.',
	},
	{
		name: 'BrownBook',
		url: 'https://www.brownbook.net/business/55231856/spacecaptureai',
		icon: BookOpen,
		color: 'bg-amber-50 text-amber-700 hover:bg-amber-100',
		description: 'Find us on BrownBook business directory.',
	},
// 	{
// 		name: 'Clutch',
// 		url: '',
// 		icon: Award,
// 		color: 'bg-violet-50 text-violet-600 hover:bg-violet-100',
// 		description: 'Top rated on Clutch for inspection software.',
// 	},
// 	{
// 		name: 'Web of Science',
// 		url: '',
// 		icon: Globe,
// 		color: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
// 		description: 'Academic publications and research profile.',
// 	},
// 	{
// 		name: 'Scribd',
// 		url: '',
// 		icon: FileText,
// 		color: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
// 		description: 'Documents, audiobooks, and publications.',
// 	},
];

const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'SpaceCapture',
	url: 'https://spacecapture.ai',
	sameAs: PLATFORMS.map((p) => p.url).filter(Boolean),
};

export default function SocialMediaPage() {
	return (
		<div className='min-h-screen bg-slate-50'>
			<main>
				{/* Hero Section */}
				<section className='bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden'>
					<div className='absolute inset-0 z-0'>
						<div className='absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[150px] opacity-20' />
						<div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20' />
					</div>
					<div className='container mx-auto px-6 relative z-10 text-center'>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight'>
							Follow Us on{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400'>
								Social Media
							</span>
						</h1>
						<p className='text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed'>
							Stay connected with SpaceCapture across the web. Join our
							communities, read our insights, and follow our journey.
						</p>
					</div>
				</section>

				{/* Platform Grid */}
				<section className='py-20 bg-white'>
					<div className='container mx-auto px-6'>
						<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
							{PLATFORMS.map((platform) => (
								<a
									key={platform.name}
									href={platform.url}
									target='_blank'
									rel='noopener noreferrer'
									className={`group flex flex-col p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${platform.color} bg-opacity-50`}
								>
									<div className='flex items-center justify-between mb-4'>
										<div className='w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm'>
											<platform.icon className='w-6 h-6' />
										</div>
										<ExternalLink className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
									</div>
									<h3 className='text-lg font-bold mb-1'>{platform.name}</h3>
									<p className='text-sm opacity-70 leading-relaxed flex-1'>
										{platform.description}
									</p>
								</a>
							))}
						</div>
					</div>
				</section>

				<CallToAction />

				<StructuredData data={organizationSchema} />
			</main>
		</div>
	);
}
