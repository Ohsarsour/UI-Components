import { BlockLinkCard } from "../components/library/Card"
import { Container } from "../components/site/Container"
import { Link } from "react-router-dom"
import { RxButton, RxIdCard, RxInput } from "react-icons/rx"
export const HomePage = () => {
    return (
        <Container title="Obaid components"
            description="A collection of customized components. Built with React and Tailwind CSS.">


            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">

                <BlockLinkCard CustomLinkComponent={Link}
                    customLinkProps={{
                        to: "/button"

                    }}
                    text="Button" widthLimit="none">
                    <RxButton className="h-10 w-10" />

                </BlockLinkCard>
                <BlockLinkCard CustomLinkComponent={Link}
                    customLinkProps={{
                        to: "/card"

                    }}
                    text="Card" widthLimit="none">
                    <RxIdCard className="h-10 w-10" />

                </BlockLinkCard>
                <BlockLinkCard CustomLinkComponent={Link}
                    customLinkProps={{
                        to: "/input"

                    }}
                    text="Input" widthLimit="none">
                    <RxInput className="h-10 w-10" />

                </BlockLinkCard>
                {/* <Link to="button">Button</Link>
                <Link to="card">Card</Link>
                <Link to="input">Input</Link> */}
            </div>
        </Container>
    )
}
