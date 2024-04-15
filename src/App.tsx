import { Section } from "./components/site/Section"
import { Container } from "./components/site/Container"
import { Layout } from "./components/site/Layout"
import { Button } from "./components/library/Button"
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
								text: "text-[#1da1f2]-500",
								hoverBorder: "hover:border-[#1da1f2]",
								hoverBg: "hover:bg-[#1da1f2]",
								focusRing: "focus:ring-[#1da1f2]",
							}
						}
					>Twitter Blue</Button>
					<Button
						variant="tertiary"
						colors={
							{
								text: "text-amber-500",
								hoverText: "hover:text-amber-700",
								focusRing: "focus:ring-amber-500",
							}
						}
					>Amber</Button>

				</Section>
			</Container>

			<Container title="Component name using component"
				description="Component description using component">
				<Section
					title="Section heading using a component"
					description="Section description"
				>
					<div className="bg-blue-500/50 p-3">component 1 using a component</div>
					<div className="bg-blue-500/50 p-3">component 2 using a component</div>

				</Section>

				<Section
					title="Section heading using a component"
					description="Section description"
				>
					<div className="bg-blue-500/50 p-3">component 1 using a component</div>
					<div className="bg-blue-500/50 p-3">component 2 using a component</div>

				</Section>
			</Container>

			<Container title="Component name using component"
				description="Component description using component">
				<Section
					title="Section heading using a component"
					description="Section description"
				>
					<div className="bg-blue-500/50 p-3">component 1 using a component</div>
					<div className="bg-blue-500/50 p-3">component 2 using a component</div>

				</Section>

				<Section
					title="Section heading using a component"
					description="Section description"
				>
					<div className="bg-blue-500/50 p-3">component 1 using a component</div>
					<div className="bg-blue-500/50 p-3">component 2 using a component</div>

				</Section>
			</Container>
		</Layout>

	)
}
