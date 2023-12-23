import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { heroPlusSolid, heroMinusSolid } from '@ng-icons/heroicons/solid'
import { provideIcons, NgIconComponent } from '@ng-icons/core'

@Component({
	selector: '.faq',
	standalone: true,
	imports: [CommonModule, NgIconComponent],
	templateUrl: './faq.component.html',
	styleUrls: ['./faq.component.css'],
	viewProviders: [provideIcons({ heroPlusSolid, heroMinusSolid })]
})
export class FaqComponent {
	data = [
		{
			title: 'Why Cobuildr instead of hiring?',
			text: 'Cobuildr, as a fully online service, distinguishes itself by offering clients the ability to leverage their own in-house team with diverse skills, rather than hiring external professionals. This approach allows businesses to maximize the use of their internal resources while benefiting from the flexibility, remote management, and diversity of skills provided by the platform. Instead of opting for an external hiring process, Cobuildr facilitates the optimization and collaboration within the existing internal team.'
		},
		{
			title: 'How quickly will I receive my work?',
			text: 'We are dedicated to providing our clients with a fast and efficient experience. We commit to processing and delivering small tasks within a 72 business-hour timeframe. This demonstrates our commitment to responsiveness and customer satisfaction. We understand the importance of meeting deadlines, and our team is ready to meet the challenge to ensure high-quality results within a short time frame. Transparency and open communication are at the core of our commitment to our clients, and we look forward to delivering quick and effective solutions to meet their needs.'
		},
		{
			title: 'Why no calls or meetings?',
			text: 'The choice to abstain from calls or meetings can stem from various factors. Some prefer asynchronous communication, such as emails or messages, for its flexibility and efficiency. This approach can be especially suitable for teams distributed across different time zones, sidestepping challenges associated with coordinating live interactions. Additionally, written communication provides a clear record of discussions and decisions, reducing the risk of misunderstandings and ensuring a traceable history. It also allows for thoughtful consideration before providing a response. By avoiding calls or meetings, some individuals seek to minimize interruptions, fostering continuous focus on work. Clearly communicating these preferences is crucial to mutual understanding, and providing alternative means of communication, if necessary, is key.'
		},
		{
			title: 'What does “One request at a time” mean?',
			text: 'We handle each request one at a time. This means that we process and address each inquiry individually and sequentially. This approach reflects our commitment to an organized process, allowing our team to manage each request thoroughly and attentively. By adopting this method, Cobuildr ensures a systematic and efficient response to every request, guaranteeing a high level of service quality with focused attention to each aspect of the process.'
		},
		{
			title: 'How do I manage my subscription?',
			text: `We're thrilled to provide our users with dedicated access to a Trello space that streamlines the management of their requests, allowing them to easily track the progress of their status. This interactive dashboard ensures complete transparency in the handling of inquiries. Furthermore, we value flexibility, and as such, our clients have the freedom to cancel their subscription with Cobuildr at any time. This approach underscores our commitment to customer satisfaction, offering everyone the ability to tailor our services to their evolving needs while maintaining a transparent and seamless experience.`
		},
		{
			title: 'Are there any refunds?',
			text: "The subscription to Cobuildr is cancellable at any time, providing users with complete flexibility. However, it's important to note that Cobuildr does not issue refunds once the subscription is canceled. This policy reflects our commitment to transparency and freedom of choice for our users, who can adjust their subscription based on their needs without concerns about refunds."
		},
		{
			title: 'What if I don’t like the work?',
			text: "If you are subscribed to Cobuildr, it's reassuring to know that you have the flexibility to modify your requests, especially within the framework of a monthly subscription. This feature allows you to tailor your needs based on the development of your project or changing priorities"
		},
		{
			title: 'Is there a request limit?',
			text: "No, there is no limit on requests as long as your subscription is active with Cobuildr. This provides users with the flexibility to submit as many requests as needed throughout the duration of their subscription. It's a feature that aligns with our commitment to offering unrestricted access to our services and accommodating our users' evolving needs during the active subscription period."
		}
	]
}
