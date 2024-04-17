import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/library/Button"
import { BlockLinkCard, ContentCard } from "./components/library/Card"
import { SiVite, SiNextdotjs } from "react-icons/si"
import { Input } from "./components/library/Input"
export default function App() {
	return (

		<Layout>

			<Container title="Button"
				description="A button is a widget that enables users to trigger an action or event, 
				such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.">
				<Section
					title="Primary"
					description="Primary actions should be obvious. Solid, high contrast background colors work great here."
				>
					{/* Primary Buttons */}
					<Button>Default Primary</Button>
					<Button disabled>Disabled Primary</Button>

					{/* Primary Color Override Buttons */}
					<Button
						colors={
							{ bg: "bg-amber-500", hoverBg: "hover:bg-amber-600", focusRing: "focus:ring-amber-500", }
						}
					>Amber</Button>
					<Button
						colors={
							{ bg: "bg-rose-500", hoverBg: "hover:bg-rose-600", focusRing: "focus:ring-rose-500", }
						}
					>Rose</Button>
					<Button
						colors={
							{ bg: "bg-fuchsia-500", hoverBg: "hover:bg-fuchsia-600", focusRing: "focus:ring-fuchsia-500", }
						}
					>Fuchsia</Button>
					<Button
						colors={
							{ bg: "bg-indigo-500", hoverBg: "hover:bg-indigo-600", focusRing: "focus:ring-indigo-500", }
						}
					>Indigo</Button>
					<Button
						colors={
							{ bg: "bg-[#1da1f2]", hoverBg: "hover:bg-[#1a8cd8]", focusRing: "focus:ring-[#1da1f2]", }
						}
					>Twitter Blue</Button>
				</Section>

				<Section
					title="Secondary"
					description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options."
				>
					{/* Secondary Buttons */}
					<Button variant="secondary">Default Secondary</Button>
					<Button disabled variant="secondary">Disabled Secondary</Button>
					{/* Secondary Color Override Buttons */}
					<Button
						variant="secondary"
						colors={
							{
								text: "text-amber-500",
								hoverBorder: "hover:border-amber-500",
								hoverBg: "hover:bg-amber-600",
								focusRing: "focus:ring-amber-500",
								darkHoverBorder: "dark:hover:border-amber-500"
							}
						}
					>Amber</Button>
					<Button
						variant="secondary"
						colors={
							{
								text: "text-rose-500",
								hoverBorder: "hover:border-rose-500",
								hoverBg: "hover:bg-rose-600",
								focusRing: "focus:ring-rose-500",
								darkHoverBorder: "dark:hover:border-rose-500"
							}
						}
					>Rose</Button>
					<Button
						variant="secondary"
						colors={
							{
								text: "text-fuchsia-500",
								hoverBorder: "hover:border-fuchsia-500",
								hoverBg: "hover:bg-fuchsia-600",
								focusRing: "focus:ring-fuchsia-500",
								darkHoverBorder: "dark:hover:border-fuchsia-500"
							}
						}
					>Fuchsia</Button>
					<Button
						variant="secondary"
						colors={
							{
								text: "text-indigo-500",
								hoverBorder: "hover:border-indigo-500",
								hoverBg: "hover:bg-indigo-600",
								focusRing: "focus:ring-indigo-500",
								darkHoverBorder: "dark:hover:border-indigo-500"
							}
						}
					>Indigo</Button>
					<Button
						variant="secondary"
						colors={
							{
								text: "text-[#1da1f2]-500",
								hoverBorder: "hover:border-[#1da1f2]",
								hoverBg: "hover:bg-[#1da1f2]",
								focusRing: "focus:ring-[#1da1f2]",
								darkHoverBorder: "dark:hover:border-[#1da1f2]-500"
							}
						}
					>Twitter Blue</Button>

				</Section>
				<Section
					title="Tertiary"
					description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach."
				>
					{/* Tertiary Buttons */}
					<Button variant="tertiary">Default Tertiary</Button>
					<Button disabled variant="tertiary">Disabled Tertiary</Button>

					{/* Tertiary Color Override Buttons */}
					<Button
						variant="tertiary"
						colors={
							{
								text: "text-amber-500",
								hoverText: "hover:text-amber-700",
								focusRing: "focus:ring-amber-500",
								darkHoverText: "dark:hover:text-amber-500"
							}
						}
					>Amber</Button>
					<Button
						variant="tertiary"
						colors={
							{
								text: "text-rose-500",
								hoverText: "hover:text-rose-700",
								focusRing: "focus:ring-rose-500",
								darkHoverText: "dark:hover:text-rose-500"
							}
						}
					>Rose</Button>
					<Button
						variant="tertiary"
						colors={
							{
								text: "text-fuchsia-500",
								hoverText: "hover:text-fuchsia-700",
								focusRing: "focus:ring-fuchsia-500",
								darkHoverText: "dark:hover:text-fuchsia-500"
							}
						}
					>Fuchsia</Button>
					<Button
						variant="tertiary"
						colors={
							{
								text: "text-indigo-500",
								hoverText: "hover:text-indigo-700",
								focusRing: "focus:ring-indigo-500",
								darkHoverText: "dark:hover:text-indigo-500"
							}
						}
					>Indigo</Button>
					<Button
						variant="tertiary"
						colors={
							{
								text: "text-[#1da1f2]",
								hoverText: "hover:text-[#1a8cd8]",
								focusRing: "focus:ring-[#1da1f2]",
								darkHoverText: "dark:hover:text-[#1da1f2]-500"
							}
						}
					>Twitter Blue</Button>

				</Section>
				<Section
					title="Destructive"
					description="Destructive actions typically result in the removal of an item, and may result in an undesirable consequence."
				>
					<Button
						colors={
							{ bg: "bg-red-500", hoverBg: "hover:bg-red-600", focusRing: "focus:ring-red-500", }
						}
					>Yes, I'm sure I want to delete this.</Button>

					<Button
						variant="secondary"
						colors={
							{
								text: "text-red-500",
								hoverBorder: "hover:border-red",
								hoverBg: "hover:bg-red",
								focusRing: "focus:ring-red",
								darkHoverBorder: "dark:hover:border-red-500"
							}
						}
					>Unsubscribe</Button>
					<Button
						variant="tertiary"
						colors={
							{
								text: "text-gray-500",
								hoverText: "hover:text-gray-700",
								focusRing: "focus:ring-gray-500",
								darkHoverText: "dark:hover:text-zinc-400"
							}
						}
					>Cancel</Button>

				</Section>
			</Container>


			<Container
				title="Card"
				description="A card is a flexible and extensible content container."
			>


				<Section
					title="Simple"
					description="Simple cards display content and can provide a distinct link that can be selected."
				>
					{/* Simple card */}
					<ContentCard
						title="Card title"
						subtitle="Card subtitle"
						plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
						link={
							{
								url: "#",
								text: "Card Link"
							}
						}
					></ContentCard>
				</Section>


				<Section
					title="Simple with a header and footer"
					description="Add an optional header and/or footer within a card"
				>
					{/* Simple card with header*/}
					<ContentCard
						header="Featured"
						title="Card title"
						subtitle="Card subtitle"
						plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
						link={
							{
								url: "#",
								text: "Card Link"
							}
						}
					></ContentCard>
					{/* Simple card with footer*/}
					<ContentCard
						footer="Last updated 5 mins ago"
						title="Card title"
						subtitle="Card subtitle"
						plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
						link={
							{
								url: "#",
								text: "Card Link"
							}
						}
					></ContentCard>
				</Section>
				<Section
					title="Block link"
					description="A simple card enhanced into a selectable block link."
				>
					{/* Vite Card */}
					<BlockLinkCard url="https://vitejs.dev/" text="Vite">
						<SiVite className="h-10 w-10" />

					</BlockLinkCard>

					{/* NextJS Card */}
					<BlockLinkCard url="https://nextjs.org/" text="Next.js">
						<SiNextdotjs className="h-10 w-10" />

					</BlockLinkCard>
				</Section>


			</Container>


			<Container
				title="Inputs"
				description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a form or used to interact with and manipulate content on a web page."
			>


				<Section
					title="Basic"
					description="Basic input with a placeholder."
				>
					{/* Basic Input */}

					<Input type="text" placeholder="Type things here."></Input>

					{/* Basic Disabled Input */}
					<Input disabled type="text" placeholder="Disabled"></Input>

				</Section>


				<Section
					title="Label"
					description="Input with a label."
				>

					{/* Label Input */}
					<Input type="email" label="Email" placeholder="you@site.com"></Input>
				</Section>
				<Section
					title="Description"
					description="Input with a description."
				>
					{/* Description Input */}
					<Input type="password" label="Password" description="We'll never share your details." placeholder="Secret!"></Input>


				</Section>


			</Container>

		</Layout>

	)
}
