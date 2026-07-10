import type { Metadata } from 'next';
import {
	SiMedium,
	SiQuora,
	SiHashnode,
	SiMastodon,
	SiReddit,
	SiPinterest,
	SiSubstack,
	SiYcombinator,
	SiTrustpilot,
} from 'react-icons/si';
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

export const metadata: Metadata = {
	title: 'Follow Us on Social Media',
	description:
		'Connect with SpaceCapture on social media. Follow us on Medium, Reddit, Quora, Pinterest, and more for updates, insights, and community discussions.',
	alternates: {
		canonical: 'https://spacecapture.ai/social-media',
	},
	openGraph: {
		title: 'Follow Us on Social Media | SpaceCapture',
		description:
			'Connect with SpaceCapture on social media. Follow us on Medium, Reddit, Quora, Pinterest, and more.',
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
		name: 'Pinterest',
		url: 'https://www.pinterest.com/spacecaptureai/',
		icon: SiPinterest,
		color: 'bg-rose-50 text-rose-600 hover:bg-rose-100',
		description: 'Visual inspiration for construction and field inspection.',
	},
	{
		name: 'Reddit',
		url: 'https://www.reddit.com/user/spacecaptureAI/',
		icon: SiReddit,
		color: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
		description: 'Join discussions on construction and AI communities.',
	},
	{
		name: 'Medium',
		url: 'https://medium.com/@spacecaptureai5',
		icon: SiMedium,
		color: 'bg-green-50 text-green-600 hover:bg-green-100',
		description:
			'Read our articles on AI, construction tech, and field inspections.',
	},
	{
		name: 'Quora',
		url: 'https://www.quora.com/profile/SpacecaptureAI/',
		icon: SiQuora,
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
		icon: SiYcombinator,
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
		icon: SiSubstack,
		color: 'bg-amber-50 text-amber-600 hover:bg-amber-100',
		description: 'Subscribe to our newsletter for weekly insights.',
	},
	{
		name: 'Mastodon',
		url: 'https://mastodon.social/@spacecaptureai',
		icon: SiMastodon,
		color: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
		description: 'Follow us on the decentralized social network.',
	},
	{
		name: 'Hashnode',
		url: 'https://hashnode.com/@space-capture-ai',
		icon: SiHashnode,
		color: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
		description: 'Technical blog posts on engineering and development.',
	},
	{
		name: 'TrustPilot',
		url: 'https://www.trustpilot.com/users/6a3899d49192b772e984f272',
		icon: SiTrustpilot,
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
